import React, { useState, useEffect, useMemo } from 'react';

// 优化后的霓虹网格线组件 - 增强颜色对比度
const NeonGrid: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div 
        className="absolute inset-0 cyberpunk-grid"
        style={{
          backgroundImage: `
            linear-gradient(rgba(244, 63, 94, 0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.4) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          transform: 'perspective(500px) rotateX(60deg) scale(1.5)',
          transformOrigin: 'center center',
          filter: 'brightness(1.2)',
          mixBlendMode: 'screen',
        }}
      />
    </div>
  );
};

// 优化的霓虹光束 - 减少数量，使用CSS动画
const NeonBeams: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-50">
      <div className="neon-beam neon-beam-1" />
      <div className="neon-beam neon-beam-2" />
      <div className="neon-beam neon-beam-3" />
    </div>
  );
};

// 增强的数据雨效果 - 更多列，更好的可见性
const DataRainSimplified: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-50">
      <div className="data-rain-container">
        {Array.from({ length: 20 }, (_, i) => (
          <div
            key={i}
            className="data-rain-column"
            style={{
              left: `${i * 5}%`,
              animationDelay: `${i * 0.3}s`,
              opacity: 0.3 + Math.random() * 0.4,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

// 优化的故障效果 - 减少频率
const GlitchOverlayOptimized: React.FC = () => {
  const [glitchActive, setGlitchActive] = useState(false);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 100);
    }, 15000); // 降低频率
    
    return () => clearInterval(interval);
  }, []);
  
  if (!glitchActive) return null;
  
  return (
    <div className="absolute inset-0 pointer-events-none glitch-overlay" />
  );
};

// 优化后的主背景组件
const CyberpunkBackgroundOptimized: React.FC = () => {
  // 使用useMemo缓存静态样式
  const backgroundStyle = useMemo(() => ({
    background: `
      radial-gradient(circle at 50% 50%, 
        rgba(244, 63, 94, 0.05) 0%, 
        transparent 50%
      ),
      radial-gradient(circle at 80% 20%, 
        rgba(168, 85, 247, 0.03) 0%, 
        transparent 50%
      ),
      radial-gradient(circle at 20% 80%, 
        rgba(6, 182, 212, 0.03) 0%, 
        transparent 50%
      ),
      linear-gradient(180deg, #0a0a0a 0%, #030712 100%)
    `,
  }), []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* 静态渐变背景 */}
      <div 
        className="absolute inset-0"
        style={backgroundStyle}
      />
      
      {/* 简化的网格 */}
      <NeonGrid />
      
      {/* CSS动画光束 */}
      <NeonBeams />
      
      {/* 简化的数据雨 */}
      <DataRainSimplified />
      
      {/* 降频的故障效果 */}
      <GlitchOverlayOptimized />
      
      {/* 增强的静态光晕效果 */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse at center, 
              transparent 20%, 
              rgba(0, 0, 0, 0.3) 40%,
              rgba(0, 0, 0, 0.6) 70%,
              rgba(0, 0, 0, 0.9) 100%
            )
          `,
          mixBlendMode: 'multiply',
        }}
      />
      
      {/* 边缘光晕 */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          boxShadow: 'inset 0 0 150px 50px rgba(0, 0, 0, 0.8)',
        }}
      />
      
      {/* 简化的CRT效果 */}
      <div 
        className="absolute inset-0 crt-effect"
      />
    </div>
  );
};

export default CyberpunkBackgroundOptimized;