import React from 'react';
import { motion } from 'framer-motion';

interface TechVignetteProps {
  intensity?: 'light' | 'medium' | 'strong';
  variant?: 'default' | 'focused' | 'minimal';
}

const TechVignette: React.FC<TechVignetteProps> = ({ 
  intensity = 'medium',
  variant = 'default' 
}) => {
  const intensityMap = {
    light: { opacity: 0.05, blur: 0.5 },
    medium: { opacity: 0.1, blur: 1 },
    strong: { opacity: 0.2, blur: 1.5 }
  };

  const config = intensityMap[intensity];

  const getBackground = () => {
    switch (variant) {
      case 'focused':
        return `
          radial-gradient(ellipse 80% 60% at 50% 40%, transparent 30%, rgba(15, 23, 42, ${config.opacity * 1.5}) 100%),
          radial-gradient(ellipse 60% 80% at 50% 50%, transparent 50%, rgba(8, 145, 178, ${config.opacity * 0.5}) 100%)
        `;
      case 'minimal':
        return `
          linear-gradient(180deg, rgba(15, 23, 42, ${config.opacity * 0.8}) 0%, transparent 30%, transparent 70%, rgba(15, 23, 42, ${config.opacity * 0.6}) 100%)
        `;
      default:
        return `
          radial-gradient(120% 90% at 50% 40%, transparent 35%, rgba(15, 23, 42, ${config.opacity}) 100%),
          radial-gradient(80% 60% at 50% 50%, transparent 60%, rgba(8, 145, 178, ${config.opacity * 0.3}) 100%),
          linear-gradient(180deg, rgba(15, 23, 42, ${config.opacity * 0.5}) 0%, transparent 20%, transparent 80%, rgba(15, 23, 42, ${config.opacity * 0.3}) 100%)
        `;
    }
  };

  return (
    <motion.div 
      className="fixed inset-0 pointer-events-none z-20"
      style={{
        background: getBackground(),
        filter: `blur(${config.blur}px)`
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    />
  );
};

export default TechVignette;