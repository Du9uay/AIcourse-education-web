import React from 'react';
import { motion } from 'framer-motion';

interface CyberpunkVignetteProps {
  intensity?: 'light' | 'medium' | 'strong';
  variant?: 'default' | 'neon' | 'glitch' | 'minimal';
}

const CyberpunkVignette: React.FC<CyberpunkVignetteProps> = ({ 
  intensity = 'medium',
  variant = 'neon' 
}) => {
  const intensityMap = {
    light: { opacity: 0.3, blur: 0.5 },
    medium: { opacity: 0.5, blur: 1 },
    strong: { opacity: 0.7, blur: 2 }
  };

  const config = intensityMap[intensity];

  const getBackground = () => {
    switch (variant) {
      case 'minimal':
        // 极简变体 - 性能优化版本
        return `
          linear-gradient(180deg, 
            rgba(0, 0, 0, ${config.opacity * 0.2}) 0%, 
            transparent 15%, 
            transparent 85%, 
            rgba(0, 0, 0, ${config.opacity * 0.2}) 100%
          )
        `;
      case 'glitch':
        return `
          radial-gradient(ellipse at center, 
            transparent 30%, 
            rgba(244, 63, 94, ${config.opacity * 0.3}) 60%,
            rgba(168, 85, 247, ${config.opacity * 0.5}) 80%,
            rgba(0, 0, 0, ${config.opacity}) 100%
          ),
          conic-gradient(
            from 0deg at 50% 50%,
            rgba(244, 63, 94, ${config.opacity * 0.1}),
            rgba(168, 85, 247, ${config.opacity * 0.1}),
            rgba(6, 182, 212, ${config.opacity * 0.1}),
            rgba(244, 63, 94, ${config.opacity * 0.1})
          )
        `;
      case 'neon':
        return `
          radial-gradient(ellipse at center, 
            transparent 40%, 
            rgba(244, 63, 94, ${config.opacity * 0.2}) 70%,
            rgba(168, 85, 247, ${config.opacity * 0.3}) 85%,
            rgba(0, 0, 0, ${config.opacity * 0.8}) 100%
          ),
          linear-gradient(180deg, 
            rgba(0, 0, 0, ${config.opacity * 0.3}) 0%, 
            transparent 10%, 
            transparent 90%, 
            rgba(0, 0, 0, ${config.opacity * 0.3}) 100%
          ),
          linear-gradient(90deg, 
            rgba(0, 0, 0, ${config.opacity * 0.3}) 0%, 
            transparent 10%, 
            transparent 90%, 
            rgba(0, 0, 0, ${config.opacity * 0.3}) 100%
          )
        `;
      default:
        return `
          radial-gradient(ellipse at center, 
            transparent 50%, 
            rgba(0, 0, 0, ${config.opacity * 0.5}) 100%
          ),
          linear-gradient(180deg, 
            rgba(0, 0, 0, ${config.opacity * 0.4}) 0%, 
            transparent 20%, 
            transparent 80%, 
            rgba(0, 0, 0, ${config.opacity * 0.4}) 100%
          )
        `;
    }
  };

  return (
    <>
      <motion.div 
        className="fixed inset-0 pointer-events-none z-20"
        style={{
          background: getBackground(),
          filter: `blur(${config.blur}px)`,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      />
      
      {/* 霓虹边框效果已移除 */}
    </>
  );
};

export default CyberpunkVignette;