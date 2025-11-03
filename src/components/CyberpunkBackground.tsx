import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// 霓虹网格线
const NeonGrid: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(244, 63, 94, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'grid-move 20s linear infinite',
          transform: 'perspective(500px) rotateX(60deg) translateZ(0)',
          transformOrigin: 'center center',
          filter: 'brightness(1.5)',
          mixBlendMode: 'screen',
        }}
      />
    </div>
  );
};

// 日文字符数据雨效果
const DataRain: React.FC = () => {
  const columns = 15;  // 减少列数从30到15
  const [charColumns, setCharColumns] = useState<Array<{ chars: string[]; delay: number; duration: number; x: number }>>([]);

  // 日文字符集合（片假名、平假名和汉字）
  const japaneseChars = [
    'ア', 'イ', 'ウ', 'エ', 'オ', 'カ', 'キ', 'ク', 'ケ', 'コ',
    'サ', 'シ', 'ス', 'セ', 'ソ', 'タ', 'チ', 'ツ', 'テ', 'ト',
    'ナ', 'ニ', 'ヌ', 'ネ', 'ノ', 'ハ', 'ヒ', 'フ', 'ヘ', 'ホ',
    'マ', 'ミ', 'ム', 'メ', 'モ', 'ヤ', 'ユ', 'ヨ', 'ラ', 'リ',
    'ル', 'レ', 'ロ', 'ワ', 'ヲ', 'ン', '日', '本', '語', '愛',
    '雨', '桜', '心', '風', '光', '影', '夢', '星', '月', '雲',
    '龍', '侍', '忍', '者', '武', '士', '道', '禅', '気', '力',
    '火', '水', '土', '空', '時', '無', '有', '生', '死', '闇',
  ];

  useEffect(() => {
    // 初始化列
    const drops = Array.from({ length: columns }, (_, i) => ({
      chars: Array.from({ length: 15 }, () =>  // 改为15个字符
        japaneseChars[Math.floor(Math.random() * japaneseChars.length)]
      ),
      delay: Math.random() * 5,
      duration: 12 + Math.random() * 6,
      x: (i / columns) * 100,
    }));
    setCharColumns(drops);

    // 定期更新字符 - 加快更新频率
    const interval = setInterval(() => {
      setCharColumns(prev => prev.map(column => ({
        ...column,
        chars: column.chars.map(char => 
          Math.random() < 0.1 ? japaneseChars[Math.floor(Math.random() * japaneseChars.length)] : char  // 从0.02增加到0.1
        )
      })));
    }, 50);  // 从100ms减少到50ms

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden opacity-60">
      {charColumns.map((column, i) => (
        <motion.div
          key={i}
          className="absolute flex flex-col text-green-400"
          style={{
            left: `${column.x}%`,
            fontSize: '12px',  // 从18px减小到12px
            fontFamily: "'Courier New', monospace",
            fontWeight: 'normal',  // 从bold改为normal
            lineHeight: '1',
            letterSpacing: '0px',
          }}
          initial={{ y: -50 }}  // 从更接近顶部的位置开始
          animate={{ y: window.innerHeight + 100 }}
          transition={{
            duration: column.duration,
            repeat: Infinity,
            delay: column.delay,
            ease: "linear",
          }}
        >
          {column.chars.map((char, idx) => (
            <div 
              key={idx}
              style={{
                opacity: idx === 0 ? 1 : Math.max(0.05, 1 - (idx / column.chars.length) * 0.95),
                color: idx === 0 ? '#ffffff' : idx < 2 ? '#66ff66' : '#00ff00',
                textShadow: idx === 0 
                  ? '0 0 8px #ffffff, 0 0 15px #00ff00'
                  : idx < 2 
                  ? '0 0 3px rgba(102, 255, 102, 0.8)'
                  : '0 0 2px rgba(0, 255, 0, 0.3)',
                height: '14px',  // 从20px减小到14px
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {char}
            </div>
          ))}
        </motion.div>
      ))}
    </div>
  );
};

// 霓虹光束
const NeonBeams: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-px"
          style={{
            background: `linear-gradient(90deg, 
              transparent, 
              ${i % 2 === 0 ? '#f43f5e' : '#06b6d4'}, 
              transparent
            )`,
            width: '200%',
            top: `${20 + i * 15}%`,
            filter: `blur(${i === 0 ? 2 : 1}px)`,
            boxShadow: `0 0 ${10 + i * 5}px ${i % 2 === 0 ? '#f43f5e' : '#06b6d4'}`,
          }}
          animate={{
            x: ['-100%', '0%'],
          }}
          transition={{
            duration: 10 + i * 2,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

// 故障效果
const GlitchOverlay: React.FC = () => {
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 200);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  if (!isGlitching) return null;

  return (
    <motion.div
      className="absolute inset-0 pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        background: `repeating-linear-gradient(
          0deg,
          transparent,
          transparent 2px,
          rgba(244, 63, 94, 0.03) 2px,
          rgba(244, 63, 94, 0.03) 4px
        )`,
        animation: 'glitch 0.3s infinite',
      }}
    />
  );
};

// 粒子效果
const ParticleField: React.FC = () => {
  const [particles, setParticles] = useState<Array<{ x: number; y: number; size: number; delay: number }>>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 50 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      delay: Math.random() * 5,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {particles.map((particle, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            background: i % 3 === 0 ? '#f43f5e' : i % 3 === 1 ? '#a855f7' : '#06b6d4',
            boxShadow: `0 0 ${particle.size * 2}px currentColor`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 1, 0.2],
          }}
          transition={{
            duration: 3 + particle.size,
            repeat: Infinity,
            delay: particle.delay,
          }}
        />
      ))}
    </div>
  );
};

// 主背景组件 - 原始版本
const CyberpunkBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* 基础渐变背景 */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 20% 50%, rgba(244, 63, 94, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 50%, rgba(168, 85, 247, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 50% 100%, rgba(6, 182, 212, 0.1) 0%, transparent 50%),
            linear-gradient(180deg, #0a0a0a 0%, #030712 100%)
          `,
        }}
      />
      
      {/* 动态元素 */}
      <NeonGrid />
      <NeonBeams />
      <DataRain />
      <ParticleField />
      <GlitchOverlay />
      
      {/* 光晕效果 */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at center, 
              transparent 20%, 
              rgba(0, 0, 0, 0.3) 40%,
              rgba(0, 0, 0, 0.6) 70%,
              rgba(0, 0, 0, 0.9) 100%
            )
          `,
        }}
      />
      
      {/* 边缘暗角 */}
      <div 
        className="absolute inset-0"
        style={{
          boxShadow: 'inset 0 0 200px 50px rgba(0, 0, 0, 0.9)',
        }}
      />
      
      {/* CRT扫描线效果 */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(255, 255, 255, 0.03) 2px,
            rgba(255, 255, 255, 0.03) 4px
          )`,
          animation: 'scan 8s linear infinite',
        }}
      />
    </div>
  );
};

export default CyberpunkBackground;