import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// 网络节点组件 - 代表Agent
const NetworkNode: React.FC<{ 
  id: number; 
  onConnect: (id: number) => void;
  connections: number[];
}> = ({ id, onConnect, connections }) => {
  const [position] = useState({
    x: Math.random() * 90 + 5,
    y: Math.random() * 90 + 5,
    size: Math.random() * 8 + 4,
  });

  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() < 0.3) {
        setIsActive(true);
        onConnect(id);
        setTimeout(() => setIsActive(false), 2000);
      }
    }, Math.random() * 8000 + 5000);

    return () => clearInterval(interval);
  }, [id, onConnect]);

  return (
    <motion.div
      className="absolute"
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
        width: `${position.size}px`,
        height: `${position.size}px`,
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: isActive ? 0.9 : 0.4,
        scale: isActive ? 1.5 : 1,
      }}
      transition={{ 
        duration: 0.5,
        opacity: { duration: 0.3 }
      }}
    >
      {/* 节点核心 */}
      <div
        className={`w-full h-full rounded-full transition-all duration-500 ${
          isActive 
            ? 'bg-gradient-to-r from-cyber-pink-400 to-neon-purple-400 shadow-lg'
            : 'bg-gradient-to-r from-cyber-pink-500/50 to-neon-purple-500/50'
        }`}
        style={{
          boxShadow: isActive 
            ? `0 0 ${position.size * 2}px rgba(6, 182, 212, 0.6), 0 0 ${position.size * 4}px rgba(16, 185, 129, 0.3)`
            : `0 0 ${position.size}px rgba(6, 182, 212, 0.2)`
        }}
      />
      
      {/* 活跃时的脉冲效果 */}
      {isActive && (
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-neon-cyan-300"
          initial={{ scale: 1, opacity: 0.6 }}
          animate={{ scale: 3, opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      )}
    </motion.div>
  );
};

// 数据流粒子组件
const DataParticle: React.FC<{ path: { start: {x: number, y: number}, end: {x: number, y: number} } }> = ({ path }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  const distance = Math.sqrt(
    Math.pow(path.end.x - path.start.x, 2) + Math.pow(path.end.y - path.start.y, 2)
  );
  
  return (
    <motion.div
      className="absolute w-2 h-2 bg-neon-purple-400 rounded-full"
      style={{
        left: `${path.start.x}%`,
        top: `${path.start.y}%`,
        boxShadow: '0 0 8px rgba(16, 185, 129, 0.8)'
      }}
      initial={{ 
        x: 0, 
        y: 0,
        opacity: 0,
        scale: 0.5
      }}
      animate={{ 
        x: `${(path.end.x - path.start.x) * (100/100)}%`,
        y: `${(path.end.y - path.start.y) * (100/100)}%`,
        opacity: [0, 1, 1, 0],
        scale: [0.5, 1, 1, 0.5]
      }}
      transition={{ 
        duration: Math.max(distance / 20, 2),
        ease: "easeInOut"
      }}
    />
  );
};

// 连接线组件
const ConnectionLine: React.FC<{ 
  start: {x: number, y: number}; 
  end: {x: number, y: number};
  isActive: boolean;
}> = ({ start, end, isActive }) => {
  const length = Math.sqrt(Math.pow(end.x - start.x, 2) + Math.pow(end.y - start.y, 2));
  const angle = Math.atan2(end.y - start.y, end.x - start.x) * 180 / Math.PI;
  
  return (
    <motion.div
      className="absolute origin-left"
      style={{
        left: `${start.x}%`,
        top: `${start.y}%`,
        width: `${length}%`,
        height: '1px',
        transform: `rotate(${angle}deg)`,
        background: isActive 
          ? 'linear-gradient(90deg, rgba(6, 182, 212, 0.8), rgba(16, 185, 129, 0.8))'
          : 'linear-gradient(90deg, rgba(6, 182, 212, 0.2), rgba(16, 185, 129, 0.2))',
        boxShadow: isActive ? '0 0 4px rgba(6, 182, 212, 0.5)' : 'none'
      }}
      initial={{ scaleX: 0, opacity: 0 }}
      animate={{ 
        scaleX: 1, 
        opacity: isActive ? 0.8 : 0.3
      }}
      exit={{ scaleX: 0, opacity: 0 }}
      transition={{ duration: 0.5 }}
    />
  );
};

// 主背景组件
const AgentNetworkBackground: React.FC = () => {
  const [activeConnections, setActiveConnections] = useState<{
    start: {x: number, y: number};
    end: {x: number, y: number};
    id: string;
  }[]>([]);
  const [dataParticles, setDataParticles] = useState<{
    path: { start: {x: number, y: number}, end: {x: number, y: number} };
    id: string;
  }[]>([]);

  const nodePositions = React.useRef<{[key: number]: {x: number, y: number}}>({});
  
  // 初始化节点位置
  React.useEffect(() => {
    for (let i = 0; i < 12; i++) {
      nodePositions.current[i] = {
        x: Math.random() * 90 + 5,
        y: Math.random() * 90 + 5
      };
    }
  }, []);

  const handleNodeConnect = (nodeId: number) => {
    // 随机选择其他节点连接
    const otherNodes = Object.keys(nodePositions.current)
      .map(Number)
      .filter(id => id !== nodeId);
    
    if (otherNodes.length === 0) return;
    
    const targetId = otherNodes[Math.floor(Math.random() * otherNodes.length)];
    const start = nodePositions.current[nodeId];
    const end = nodePositions.current[targetId];
    
    if (!start || !end) return;

    const connectionId = `${nodeId}-${targetId}-${Date.now()}`;
    
    // 添加连接线
    const newConnection = { start, end, id: connectionId };
    setActiveConnections(prev => [...prev, newConnection]);
    
    // 添加数据粒子
    const particleId = `particle-${Date.now()}`;
    setDataParticles(prev => [...prev, { path: { start, end }, id: particleId }]);

    // 清除连接线
    setTimeout(() => {
      setActiveConnections(prev => prev.filter(conn => conn.id !== connectionId));
    }, 3000);
    
    // 清除数据粒子
    setTimeout(() => {
      setDataParticles(prev => prev.filter(p => p.id !== particleId));
    }, 3000);
  };

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* 基础深色技术背景 */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 25% 25%, rgba(15, 23, 42, 0.8) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(8, 145, 178, 0.1) 0%, transparent 50%),
            linear-gradient(135deg, 
              #0f172a 0%, 
              #1e293b 25%, 
              #0f172a 50%, 
              #164e63 75%, 
              #0f172a 100%
            )
          `
        }}
      />

      {/* 网格背景 - 体现技术感 */}
      <div 
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(6, 182, 212, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />

      {/* 动态光晕效果 */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), 
              rgba(6, 182, 212, 0.1) 0%, 
              rgba(16, 185, 129, 0.05) 40%, 
              transparent 100%
            )
          `
        }}
        animate={{
          '--mouse-x': ['30%', '70%', '30%'],
          '--mouse-y': ['40%', '60%', '40%']
        } as any}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* 数据流背景效果 */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(45deg, 
              transparent 0%, 
              rgba(6, 182, 212, 0.05) 25%, 
              transparent 50%,
              rgba(16, 185, 129, 0.05) 75%,
              transparent 100%
            )
          `,
          transform: 'translateX(-100%)'
        }}
        animate={{
          transform: ['translateX(-100%)', 'translateX(100%)']
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* 连接线层 */}
      <div className="absolute inset-0">
        <AnimatePresence>
          {activeConnections.map(connection => (
            <ConnectionLine
              key={connection.id}
              start={connection.start}
              end={connection.end}
              isActive={true}
            />
          ))}
        </AnimatePresence>
      </div>

      {/* 网络节点 - Agent */}
      <div className="absolute inset-0">
        {Array.from({ length: 12 }, (_, i) => (
          <NetworkNode
            key={i}
            id={i}
            onConnect={handleNodeConnect}
            connections={[]}
          />
        ))}
      </div>

      {/* 数据粒子层 */}
      <div className="absolute inset-0">
        <AnimatePresence>
          {dataParticles.map(particle => (
            <DataParticle
              key={particle.id}
              path={particle.path}
            />
          ))}
        </AnimatePresence>
      </div>

      {/* 顶部渐变遮罩 - 确保文字可读性 */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            linear-gradient(180deg, 
              rgba(15, 23, 42, 0.3) 0%, 
              transparent 20%,
              transparent 80%,
              rgba(15, 23, 42, 0.2) 100%
            )
          `
        }}
      />

      {/* 性能优化 */}
      <style>{`
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </div>
  );
};

export default AgentNetworkBackground;