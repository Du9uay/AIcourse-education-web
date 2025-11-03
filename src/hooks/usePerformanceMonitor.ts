import { useEffect, useState, useCallback } from 'react';

interface PerformanceMetrics {
  fps: number;
  memoryUsage: number | null;
  renderTime: number;
  isLowPerformance: boolean;
}

export const usePerformanceMonitor = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fps: 60,
    memoryUsage: null,
    renderTime: 0,
    isLowPerformance: false
  });

  const [shouldReduceEffects, setShouldReduceEffects] = useState(false);

  // FPS 监控
  const measureFPS = useCallback(() => {
    let lastTime = performance.now();
    let frames = 0;
    let fps = 60;

    const frame = () => {
      const currentTime = performance.now();
      frames++;

      if (currentTime >= lastTime + 1000) {
        fps = Math.round((frames * 1000) / (currentTime - lastTime));
        frames = 0;
        lastTime = currentTime;

        // 如果FPS低于30，启用性能模式
        if (fps < 30) {
          setShouldReduceEffects(true);
        }

        setMetrics(prev => ({
          ...prev,
          fps,
          isLowPerformance: fps < 30
        }));
      }

      requestAnimationFrame(frame);
    };

    requestAnimationFrame(frame);
  }, []);

  // 内存使用监控
  const measureMemory = useCallback(() => {
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      const usedMemory = memory.usedJSHeapSize / 1048576; // 转换为MB
      
      setMetrics(prev => ({
        ...prev,
        memoryUsage: Math.round(usedMemory)
      }));
    }
  }, []);

  // 渲染时间监控
  const measureRenderTime = useCallback(() => {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (entry.entryType === 'measure' && entry.name.includes('render')) {
          setMetrics(prev => ({
            ...prev,
            renderTime: Math.round(entry.duration)
          }));
        }
      });
    });

    observer.observe({ entryTypes: ['measure'] });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // 启动性能监控
    measureFPS();
    const memoryInterval = setInterval(measureMemory, 5000);
    const cleanupRender = measureRenderTime();

    // 检测用户偏好
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      setShouldReduceEffects(true);
    }

    // 检测设备性能
    if (navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4) {
      setShouldReduceEffects(true);
    }

    // 检测电池状态
    if ('getBattery' in navigator) {
      (navigator as any).getBattery().then((battery: any) => {
        if (battery.level < 0.2 || !battery.charging) {
          setShouldReduceEffects(true);
        }
      });
    }

    return () => {
      clearInterval(memoryInterval);
      cleanupRender();
    };
  }, [measureFPS, measureMemory, measureRenderTime]);

  return {
    metrics,
    shouldReduceEffects,
    enablePerformanceMode: () => setShouldReduceEffects(true),
    disablePerformanceMode: () => setShouldReduceEffects(false)
  };
};

// 性能优化建议
export const getPerformanceRecommendations = (metrics: PerformanceMetrics): string[] => {
  const recommendations: string[] = [];

  if (metrics.fps < 30) {
    recommendations.push('FPS较低，建议减少动画效果');
  }

  if (metrics.memoryUsage && metrics.memoryUsage > 500) {
    recommendations.push('内存使用较高，建议清理缓存');
  }

  if (metrics.renderTime > 16) {
    recommendations.push('渲染时间过长，建议简化组件');
  }

  return recommendations;
};