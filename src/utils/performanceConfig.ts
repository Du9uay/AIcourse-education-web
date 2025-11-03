// 性能配置文件
export const performanceConfig = {
  // 动画配置
  animation: {
    // 减少动画持续时间
    duration: {
      fast: 0.2,
      normal: 0.3,
      slow: 0.5
    },
    // 简化的弹簧配置
    spring: {
      light: {
        type: "spring" as const,
        stiffness: 300,
        damping: 30
      },
      normal: {
        type: "spring" as const,
        stiffness: 200,
        damping: 25
      },
      heavy: {
        type: "spring" as const,
        stiffness: 100,
        damping: 20
      }
    }
  },
  
  // 延迟加载配置
  lazyLoad: {
    threshold: 0.1,
    rootMargin: "50px"
  },
  
  // 减少复杂效果
  effects: {
    enableGlitch: false, // 默认关闭故障效果
    enableParticles: false, // 关闭粒子效果
    enableComplexShadows: false, // 关闭复杂阴影
    reducedMotion: false // 减少动效模式
  },
  
  // 防抖和节流配置
  optimization: {
    debounceDelay: 300,
    throttleDelay: 100,
    maxAnimationElements: 20 // 限制同时动画的元素数量
  }
};

// 检测用户偏好
export const detectPerformanceMode = () => {
  // 检查是否偏好减少动效
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  // 检查设备性能
  const isLowEndDevice = navigator.hardwareConcurrency ? navigator.hardwareConcurrency < 4 : false;
  
  // 检查连接速度
  const connection = (navigator as any).connection;
  const isSlowConnection = connection && 
    (connection.effectiveType === 'slow-2g' || 
     connection.effectiveType === '2g' || 
     connection.saveData);
  
  return {
    prefersReducedMotion,
    isLowEndDevice,
    isSlowConnection,
    shouldReduceEffects: prefersReducedMotion || isLowEndDevice || isSlowConnection
  };
};

// 动画优化hook
export const useOptimizedAnimation = () => {
  const { shouldReduceEffects } = detectPerformanceMode();
  
  return {
    transition: shouldReduceEffects 
      ? { duration: 0.1 }
      : performanceConfig.animation.spring.normal,
    animate: shouldReduceEffects ? false : true
  };
};