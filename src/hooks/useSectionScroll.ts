import { useEffect, useRef, useState } from 'react';

interface UseSectionScrollOptions {
  duration?: number; // 滚动动画持续时间（毫秒）
  easing?: string; // 缓动函数
}

export const useSectionScroll = (options: UseSectionScrollOptions = {}) => {
  const {
    duration = 1800, // 默认1.8秒
    easing = 'cubic-bezier(0.4, 0, 0.2, 1)' // Apple风格缓动
  } = options;

  const [currentSection, setCurrentSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const sectionsRef = useRef<HTMLElement[]>([]);
  const touchStartY = useRef(0);

  // 平滑滚动到指定section
  const scrollToSection = (index: number) => {
    if (index < 0 || index >= sectionsRef.current.length || isScrolling) {
      return;
    }

    setIsScrolling(true);
    const targetSection = sectionsRef.current[index];

    if (targetSection) {
      // 使用scrollIntoView实现平滑滚动
      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });

      setCurrentSection(index);

      // 滚动完成后重置状态
      setTimeout(() => {
        setIsScrolling(false);
      }, duration);
    }
  };

  // 处理滚轮事件
  const handleWheel = (e: WheelEvent) => {
    if (isScrolling) {
      e.preventDefault();
      return;
    }

    const currentSectionElement = sectionsRef.current[currentSection];
    if (!currentSectionElement) return;

    // 检查滚动事件是否发生在当前section内
    const target = e.target as HTMLElement;
    if (!currentSectionElement.contains(target)) return;

    const { scrollTop, scrollHeight, clientHeight } = currentSectionElement;
    const isAtTop = scrollTop === 0;
    const isAtBottom = Math.abs(scrollHeight - clientHeight - scrollTop) < 1;

    // 向下滚动
    if (e.deltaY > 0) {
      // 只有在section底部时才阻止默认行为并切换
      if (isAtBottom && currentSection < sectionsRef.current.length - 1) {
        e.preventDefault();
        scrollToSection(currentSection + 1);
      }
      // 否则允许section内部正常滚动
    }
    // 向上滚动
    else if (e.deltaY < 0) {
      // 只有在section顶部时才阻止默认行为并切换
      if (isAtTop && currentSection > 0) {
        e.preventDefault();
        scrollToSection(currentSection - 1);
      }
      // 否则允许section内部正常滚动
    }
  };

  // 处理触摸事件（移动端）
  const handleTouchStart = (e: TouchEvent) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (isScrolling) {
      e.preventDefault();
      return;
    }

    const currentSectionElement = sectionsRef.current[currentSection];
    if (!currentSectionElement) return;

    const touchEndY = e.touches[0].clientY;
    const deltaY = touchStartY.current - touchEndY;

    const { scrollTop, scrollHeight, clientHeight } = currentSectionElement;
    const isAtTop = scrollTop === 0;
    const isAtBottom = Math.abs(scrollHeight - clientHeight - scrollTop) < 1;

    // 向上滑动（手指向上移动）
    if (deltaY > 50) {
      if (isAtBottom && currentSection < sectionsRef.current.length - 1) {
        e.preventDefault();
        scrollToSection(currentSection + 1);
        touchStartY.current = touchEndY;
      }
    }
    // 向下滑动（手指向下移动）
    else if (deltaY < -50) {
      if (isAtTop && currentSection > 0) {
        e.preventDefault();
        scrollToSection(currentSection - 1);
        touchStartY.current = touchEndY;
      }
    }
  };

  // 处理键盘事件
  const handleKeyDown = (e: KeyboardEvent) => {
    if (isScrolling) return;

    switch (e.key) {
      case 'ArrowDown':
      case 'PageDown':
        if (currentSection < sectionsRef.current.length - 1) {
          e.preventDefault();
          scrollToSection(currentSection + 1);
        }
        break;
      case 'ArrowUp':
      case 'PageUp':
        if (currentSection > 0) {
          e.preventDefault();
          scrollToSection(currentSection - 1);
        }
        break;
      case 'Home':
        e.preventDefault();
        scrollToSection(0);
        break;
      case 'End':
        e.preventDefault();
        scrollToSection(sectionsRef.current.length - 1);
        break;
    }
  };

  useEffect(() => {
    // 绑定事件监听
    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: false });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentSection, isScrolling]);

  // 注册section元素
  const registerSection = (element: HTMLElement | null, index: number) => {
    if (element) {
      sectionsRef.current[index] = element;
    }
  };

  return {
    currentSection,
    scrollToSection,
    registerSection,
    isScrolling
  };
};
