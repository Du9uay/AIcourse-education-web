import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// 星点组件 - 实现消失后随机重生
const Star: React.FC<{ index: number }> = ({ index }) => {
  const [position, setPosition] = useState({
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2, // 增大尺寸范围 2-6px
  });
  const [isVisible, setIsVisible] = useState(true);

  // 生成新的随机位置
  const regenerate = () => {
    setIsVisible(false);
    setTimeout(() => {
      setPosition({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 2, // 增大尺寸范围 2-6px
      });
      setIsVisible(true);
    }, 500);
  };

  useEffect(() => {
    // 随机生命周期（5-15秒）
    const lifetime = (Math.random() * 10 + 5) * 1000;
    const interval = setInterval(regenerate, lifetime);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="absolute bg-[#E5DFD7]"
          style={{
            width: `${position.size}px`,
            height: `${position.size}px`,
            borderRadius: '50%',
            left: `${position.x}%`,
            top: `${position.y}%`,
            boxShadow: `0 0 ${position.size * 3}px rgba(229, 223, 215, 0.9), 0 0 ${position.size * 6}px rgba(229, 223, 215, 0.4)`,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0, 1, 1, 0],
            scale: [0, 1, 1.2, 0]
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            times: [0, 0.2, 0.8, 1],
            ease: "easeInOut"
          }}
        />
      )}
    </AnimatePresence>
  );
};

const GlobalBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* 基础渐变层 - 调暗以突出效果 */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, color-mix(in oklab, #7A9E9F 85%, #000 15%) 0%, color-mix(in oklab, #8A9B8F 75%, #000 25%) 65%, color-mix(in oklab, #8A9B8F 65%, #000 35%) 100%)'
        }}
      />

      {/* 液态流动层 - 增强金色光斑 */}
      <motion.div
        className="absolute inset-[-20%]"
        style={{
          background: `
            radial-gradient(45% 30% at 70% 20%, rgba(212, 180, 131, 0.20), transparent 60%),
            radial-gradient(40% 28% at 30% 80%, rgba(212, 180, 131, 0.15), transparent 60%)
          `,
          filter: 'blur(30px)'
        }}
        animate={{
          x: ['-4%', '6%'],
          y: ['-2%', '3%'],
          rotate: [0.6, -0.6]
        }}
        transition={{
          duration: 25,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />

      {/* 极光效果层1 - 增强可见度 */}
      <motion.div
        className="absolute w-full h-[200%] -top-1/2"
        style={{
          background: `linear-gradient(45deg, 
            transparent 20%,
            rgba(212, 180, 131, 0.25) 30%,
            rgba(122, 158, 159, 0.20) 40%,
            rgba(212, 180, 131, 0.18) 50%,
            transparent 60%
          )`,
          filter: 'blur(60px)',
          transform: 'skewY(-15deg)',
          opacity: 0.6
        }}
        animate={{
          x: ['-100%', '100%'],
          opacity: [0.4, 0.7, 0.4]
        }}
        transition={{
          duration: 30,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />

      {/* 极光效果层2 */}
      <motion.div
        className="absolute w-full h-[200%] -top-1/2 opacity-20"
        style={{
          background: `linear-gradient(-30deg, 
            transparent 10%,
            rgba(138, 155, 143, 0.15) 25%,
            rgba(212, 180, 131, 0.10) 35%,
            rgba(229, 223, 215, 0.08) 45%,
            transparent 60%
          )`,
          filter: 'blur(80px)',
          transform: 'skewY(10deg)'
        }}
        animate={{
          x: ['100%', '-100%'],
          opacity: [0.15, 0.3, 0.15]
        }}
        transition={{
          duration: 35,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
          delay: 10
        }}
      />

      {/* 额外的流动层 - 增强金色效果 */}
      <motion.div
        className="absolute inset-[-30%]"
        style={{
          background: `
            radial-gradient(50% 35% at 20% 50%, rgba(212, 180, 131, 0.12), transparent 70%),
            radial-gradient(35% 25% at 80% 70%, rgba(212, 180, 131, 0.10), transparent 60%)
          `,
          filter: 'blur(40px)',
          opacity: 0.7
        }}
        animate={{
          x: ['5%', '-5%'],
          y: ['3%', '-4%'],
          rotate: [-1, 1]
        }}
        transition={{
          duration: 40,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />

      {/* 星点效果 - 圆形，灭掉后随机重生 */}
      <div className="absolute inset-0">
        {Array.from({ length: 60 }, (_, i) => (
          <Star key={i} index={i} />
        ))}
      </div>



      {/* 减少动效样式 */}
      <style>{`
        @media (prefers-reduced-motion: reduce) {
          .motion-div {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </div>
  );
};

export default GlobalBackground;