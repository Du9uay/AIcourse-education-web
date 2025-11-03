import React from 'react';

// 赛博朋克风格的图标组件
interface IconProps {
  className?: string;
  size?: number;
}

// CPU图标 - 带霓虹效果
export const CyberCpu: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    className={className}
  >
    <rect x="7" y="7" width="10" height="10" stroke="currentColor" strokeWidth="2" fill="none" />
    <rect x="9" y="9" width="6" height="6" fill="currentColor" opacity="0.3" />
    <path d="M10 2v5M14 2v5M10 17v5M14 17v5M2 10h5M17 10h5M2 14h5M17 14h5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <circle cx="12" cy="12" r="1" fill="currentColor" className="animate-pulse" />
  </svg>
);

// 网络图标 - 带连接动画
export const CyberNetwork: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    className={className}
  >
    <circle cx="12" cy="5" r="2" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.3" />
    <circle cx="5" cy="19" r="2" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.3" />
    <circle cx="19" cy="19" r="2" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.3" />
    <path d="M12 7v6M12 13l-5.5 4M12 13l5.5 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="animate-pulse" />
    <circle cx="12" cy="13" r="2" fill="currentColor" />
  </svg>
);

// 代码图标 - 终端风格
export const CyberCode: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    className={className}
  >
    <rect x="3" y="3" width="18" height="18" stroke="currentColor" strokeWidth="2" rx="2" fill="none" />
    <path d="M8 8l-2 4l2 4M16 8l2 4l-2 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 16.5v.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="animate-pulse" />
  </svg>
);

// 目标图标 - 瞄准镜风格
export const CyberTarget: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    className={className}
  >
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" fill="none" />
    <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.6" />
    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1" fill="currentColor" opacity="0.3" />
    <path d="M12 3v3M12 18v3M3 12h3M18 12h3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <circle cx="12" cy="12" r="1" fill="currentColor" className="animate-pulse" />
  </svg>
);

// 火箭图标 - 发射风格
export const CyberRocket: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    className={className}
  >
    <path d="M12 2l3 7h7l-5.5 4 2 7L12 15l-6.5 5 2-7L2 9h7z" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.3" />
    <path d="M12 2v13" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" className="animate-pulse" />
  </svg>
);

// 数据库图标 - 层级风格
export const CyberDatabase: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    className={className}
  >
    <ellipse cx="12" cy="6" rx="7" ry="3" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.3" />
    <path d="M5 6v6c0 1.66 3.13 3 7 3s7-1.34 7-3V6" stroke="currentColor" strokeWidth="2" />
    <path d="M5 12v6c0 1.66 3.13 3 7 3s7-1.34 7-3v-6" stroke="currentColor" strokeWidth="2" />
    <path d="M12 9v.01M12 15v.01" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="animate-pulse" />
  </svg>
);

// 闪电图标 - 能量风格
export const CyberZap: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    className={className}
  >
    <path d="M13 2L3 14h9l-1 8 10-12h-9z" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.3" strokeLinejoin="round" />
    <path d="M13 2L3 14h9l-1 8 10-12h-9z" stroke="currentColor" strokeWidth="1" strokeLinejoin="round" className="animate-pulse" opacity="0.8" />
  </svg>
);

// 盾牌图标 - 安全风格
export const CyberShield: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    className={className}
  >
    <path d="M12 2l8 3v7c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V5z" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.3" />
    <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="12" cy="12" r="1" fill="currentColor" className="animate-pulse" />
  </svg>
);

// 设置图标 - 齿轮风格
export const CyberSettings: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    className={className}
  >
    <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.3" />
    <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" stroke="currentColor" strokeWidth="2" />
    <circle cx="12" cy="12" r="1" fill="currentColor" className="animate-spin" style={{ animationDuration: '3s' }} />
  </svg>
);

// 层级图标 - 架构风格
export const CyberLayers: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    className={className}
  >
    <path d="M12 2l10 5v10l-10 5-10-5V7z" stroke="currentColor" strokeWidth="2" fill="none" />
    <path d="M12 7l10 5-10 5-10-5z" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.3" />
    <path d="M2 12v5l10 5v-5M22 12v5l-10 5v-5" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
    <circle cx="12" cy="12" r="1" fill="currentColor" className="animate-pulse" />
  </svg>
);

// 共享图标 - 连接风格
export const CyberShare: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    className={className}
  >
    <circle cx="6" cy="12" r="3" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.3" />
    <circle cx="18" cy="6" r="3" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.3" />
    <circle cx="18" cy="18" r="3" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.3" />
    <path d="M8.59 13.51l6.83 3.98M15.41 6.51l-6.82 3.98" stroke="currentColor" strokeWidth="2" className="animate-pulse" />
    <circle cx="12" cy="12" r="1" fill="currentColor" />
  </svg>
);

// 用户图标 - 头像风格
export const CyberUser: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    className={className}
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.3" />
    <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" fill="none" />
    <path d="M12 13c-4 0-6 2-6 4v2h12v-2c0-2-2-4-6-4z" fill="currentColor" opacity="0.6" />
    <circle cx="9" cy="10" r="0.5" fill="currentColor" className="animate-pulse" />
    <circle cx="15" cy="10" r="0.5" fill="currentColor" className="animate-pulse" />
  </svg>
);

// 勾选图标 - 确认风格
export const CyberCheck: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    className={className}
  >
    <rect x="3" y="3" width="18" height="18" stroke="currentColor" strokeWidth="2" rx="2" fill="currentColor" opacity="0.3" />
    <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="animate-pulse" opacity="0.8" />
  </svg>
);

// 箭头图标 - 方向风格
export const CyberArrow: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    className={className}
  >
    <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M5 12h14" stroke="currentColor" strokeWidth="1" strokeLinecap="round" className="animate-pulse" opacity="0.6" />
    <circle cx="19" cy="12" r="1" fill="currentColor" className="animate-pulse" />
  </svg>
);

// 图表图标 - 数据风格
export const CyberChart: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    className={className}
  >
    <rect x="3" y="3" width="18" height="18" stroke="currentColor" strokeWidth="2" rx="2" fill="none" />
    <path d="M8 16v-5M12 16v-8M16 16v-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M8 16v-5M12 16v-8M16 16v-3" stroke="currentColor" strokeWidth="1" strokeLinecap="round" className="animate-pulse" opacity="0.6" />
    <circle cx="12" cy="8" r="1" fill="currentColor" className="animate-pulse" />
  </svg>
);

// 书籍图标 - 学习风格
export const CyberBook: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    className={className}
  >
    <path d="M4 19.5A2.5 2.5 0 016.5 17H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.3" />
    <path d="M8 7h8M8 11h8M8 15h4" stroke="currentColor" strokeWidth="1" strokeLinecap="round" className="animate-pulse" opacity="0.6" />
  </svg>
);

// 时钟图标 - 时间风格
export const CyberClock: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    className={className}
  >
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.3" />
    <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="12" cy="12" r="1" fill="currentColor" className="animate-pulse" />
    <path d="M12 3v1M12 20v1M3 12h1M20 12h1" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
  </svg>
);

export default {
  CyberCpu,
  CyberNetwork,
  CyberCode,
  CyberTarget,
  CyberRocket,
  CyberDatabase,
  CyberZap,
  CyberShield,
  CyberSettings,
  CyberLayers,
  CyberShare,
  CyberUser,
  CyberCheck,
  CyberArrow,
  CyberChart,
  CyberBook,
  CyberClock
};