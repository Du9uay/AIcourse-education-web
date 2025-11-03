import React from 'react';

interface IconProps {
  className?: string;
  size?: number;
}

// 书本图标 - 赛博朋克风格
export const BookOpen: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <defs>
      <filter id="neon-glow">
        <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    <path d="M4 19.5A2.5 2.5 0 016.5 17H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" filter="url(#neon-glow)" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.3" />
    <path d="M8 7h8M8 11h8M8 15h4" stroke="currentColor" strokeWidth="1" strokeLinecap="round" className="animate-pulse" opacity="0.8" />
    <circle cx="12" cy="11" r="0.5" fill="currentColor" className="animate-pulse" />
  </svg>
);

// 设置图标 - 赛博朋克风格
export const Settings: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.3" />
    <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" stroke="currentColor" strokeWidth="2" />
    <circle cx="12" cy="12" r="1" fill="currentColor" className="animate-spin" style={{ animationDuration: '3s' }} />
  </svg>
);

// 闪电图标 - 赛博朋克风格
export const Zap: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M13 2L3 14h9l-1 8 10-12h-9z" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.3" strokeLinejoin="round" />
    <path d="M13 2L3 14h9l-1 8 10-12h-9z" stroke="currentColor" strokeWidth="1" strokeLinejoin="round" className="animate-pulse" opacity="0.8" />
    <circle cx="12" cy="10" r="0.5" fill="currentColor" className="animate-pulse" />
  </svg>
);

// CPU图标 - 赛博朋克风格
export const Cpu: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <rect x="7" y="7" width="10" height="10" stroke="currentColor" strokeWidth="2" fill="none" />
    <rect x="9" y="9" width="6" height="6" fill="currentColor" opacity="0.3" />
    <path d="M10 2v5M14 2v5M10 17v5M14 17v5M2 10h5M17 10h5M2 14h5M17 14h5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <circle cx="12" cy="12" r="1" fill="currentColor" className="animate-pulse" />
    <path d="M10 2v5M14 2v5M10 17v5M14 17v5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" className="animate-pulse" opacity="0.5" />
  </svg>
);

// 箭头右图标 - 赛博朋克风格
export const ChevronRight: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="animate-pulse" opacity="0.5" />
  </svg>
);

// 箭头下图标 - 赛博朋克风格
export const ChevronDown: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="animate-pulse" opacity="0.5" />
  </svg>
);

// 播放图标 - 赛博朋克风格
export const PlayCircle: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.3" />
    <polygon points="10,8 16,12 10,16 10,8" fill="currentColor" />
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1" className="animate-pulse" opacity="0.5" />
    <polygon points="10,8 16,12 10,16 10,8" fill="currentColor" className="animate-pulse" opacity="0.3" />
  </svg>
);

// 时钟图标 - 赛博朋克风格
export const Clock: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.3" />
    <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="12" cy="12" r="1" fill="currentColor" className="animate-pulse" />
    <path d="M12 3v1M12 20v1M3 12h1M20 12h1" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.6" className="animate-pulse" />
  </svg>
);

// 用户图标 - 赛博朋克风格
export const Users: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.3" />
    <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.3" />
    <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="currentColor" strokeWidth="2" />
    <circle cx="9" cy="7" r="0.5" fill="currentColor" className="animate-pulse" />
    <circle cx="20" cy="7" r="0.5" fill="currentColor" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
  </svg>
);

// 目标图标 - 赛博朋克风格
export const Target: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" fill="none" />
    <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.6" className="animate-pulse" />
    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1" fill="currentColor" opacity="0.3" />
    <path d="M12 3v3M12 18v3M3 12h3M18 12h3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <circle cx="12" cy="12" r="1" fill="currentColor" className="animate-pulse" />
  </svg>
);

// 奖杯图标 - 赛博朋克风格
export const Award: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="12" cy="8" r="7" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.3" />
    <polyline points="8.21,13.89 7,23 12,20 17,23 15.79,13.88" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.3" />
    <circle cx="12" cy="8" r="3" fill="currentColor" opacity="0.5" />
    <circle cx="12" cy="8" r="1" fill="currentColor" className="animate-pulse" />
    <path d="M12 1v2M7 3l1 1M17 3l-1 1" stroke="currentColor" strokeWidth="1" strokeLinecap="round" className="animate-pulse" opacity="0.6" />
  </svg>
);

// 菜单图标 - 赛博朋克风格
export const Menu: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <line x1="3" y1="6" x2="21" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <line x1="3" y1="12" x2="21" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <line x1="3" y1="18" x2="21" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <circle cx="3" cy="6" r="1" fill="currentColor" className="animate-pulse" />
    <circle cx="3" cy="12" r="1" fill="currentColor" className="animate-pulse" style={{ animationDelay: '0.2s' }} />
    <circle cx="3" cy="18" r="1" fill="currentColor" className="animate-pulse" style={{ animationDelay: '0.4s' }} />
  </svg>
);

// 关闭图标 - 赛博朋克风格
export const X: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <line x1="18" y1="6" x2="6" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <line x1="6" y1="6" x2="18" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1" fill="none" className="animate-pulse" opacity="0.3" />
    <circle cx="12" cy="12" r="1" fill="currentColor" className="animate-pulse" />
  </svg>
);

// 勾选图标 - 赛博朋克风格
export const CheckCircle: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.3" />
    <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="animate-pulse" opacity="0.8" />
  </svg>
);

// 箭头右图标 - 赛博朋克风格
export const ArrowRight: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M5 12h14" stroke="currentColor" strokeWidth="1" strokeLinecap="round" className="animate-pulse" opacity="0.6" />
    <circle cx="19" cy="12" r="1" fill="currentColor" className="animate-pulse" />
  </svg>
);

// 显示器图标 - 赛博朋克风格
export const Monitor: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.3" />
    <line x1="8" y1="21" x2="16" y2="21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <line x1="12" y1="17" x2="12" y2="21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <rect x="4" y="5" width="16" height="10" fill="currentColor" opacity="0.2" />
    <circle cx="12" cy="10" r="1" fill="currentColor" className="animate-pulse" />
    <path d="M6 7h3M6 9h5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" className="animate-pulse" opacity="0.5" />
  </svg>
);

// 网络图标 - 赛博朋克风格
export const Network: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="12" cy="5" r="2" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.3" />
    <circle cx="5" cy="19" r="2" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.3" />
    <circle cx="19" cy="19" r="2" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.3" />
    <path d="M12 7v6M12 13l-5.5 4M12 13l5.5 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="animate-pulse" />
    <circle cx="12" cy="13" r="2" fill="currentColor" />
    <circle cx="12" cy="5" r="0.5" fill="currentColor" className="animate-pulse" />
  </svg>
);

// 眼睛图标 - 赛博朋克风格
export const Eye: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.3" />
    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.5" />
    <circle cx="12" cy="12" r="1" fill="currentColor" className="animate-pulse" />
    <path d="M12 5v2M12 17v2" stroke="currentColor" strokeWidth="1" strokeLinecap="round" className="animate-pulse" opacity="0.4" />
  </svg>
);

// 层级图标 - 赛博朋克风格
export const Layers: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M12 2l10 5v10l-10 5-10-5V7z" stroke="currentColor" strokeWidth="2" fill="none" />
    <path d="M12 7l10 5-10 5-10-5z" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.3" />
    <path d="M2 12v5l10 5v-5M22 12v5l-10 5v-5" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" className="animate-pulse" opacity="0.6" />
    <circle cx="12" cy="12" r="1" fill="currentColor" className="animate-pulse" />
  </svg>
);

// 箭头左图标 - 赛博朋克风格
export const ArrowLeft: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M19 12H5M12 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M19 12H5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" className="animate-pulse" opacity="0.6" />
    <circle cx="5" cy="12" r="1" fill="currentColor" className="animate-pulse" />
  </svg>
);

// 刷新图标 - 赛博朋克风格
export const RefreshCw: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <polyline points="23,4 23,10 17,10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <polyline points="1,20 1,14 7,14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M20.49 9A9 9 0 005.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 013.51 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="12" cy="12" r="1" fill="currentColor" className="animate-spin" style={{ animationDuration: '2s' }} />
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1" fill="none" className="animate-pulse" opacity="0.3" />
  </svg>
);

// Hash图标 - 赛博朋克风格
export const Hash = (props: IconProps) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <line x1="4" y1="9" x2="20" y2="9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <line x1="4" y1="15" x2="20" y2="15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <line x1="10" y1="3" x2="8" y2="21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <line x1="16" y1="3" x2="14" y2="21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <circle cx="12" cy="12" r="1" fill="currentColor" className="animate-pulse" />
    <rect x="8" y="9" width="8" height="6" fill="currentColor" opacity="0.2" />
  </svg>
);

// 计算器图标 - 赛博朋克风格
export const Calculator = (props: IconProps) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <rect x="4" y="2" width="16" height="20" rx="2" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.3" />
    <rect x="7" y="5" width="10" height="3" stroke="currentColor" strokeWidth="1" fill="currentColor" opacity="0.5" />
    <circle cx="8" cy="12" r="1" stroke="currentColor" strokeWidth="1" fill="currentColor" opacity="0.6" />
    <circle cx="12" cy="12" r="1" stroke="currentColor" strokeWidth="1" fill="currentColor" opacity="0.6" />
    <circle cx="16" cy="12" r="1" stroke="currentColor" strokeWidth="1" fill="currentColor" opacity="0.6" />
    <circle cx="8" cy="16" r="1" stroke="currentColor" strokeWidth="1" fill="currentColor" opacity="0.6" />
    <circle cx="12" cy="16" r="1" stroke="currentColor" strokeWidth="1" fill="currentColor" opacity="0.6" />
    <circle cx="16" cy="16" r="1" stroke="currentColor" strokeWidth="1" fill="currentColor" opacity="0.6" />
    <circle cx="12" cy="6.5" r="0.5" fill="currentColor" className="animate-pulse" />
  </svg>
);

// 电源图标 - 赛博朋克风格
export const Power = (props: IconProps) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M18.36 6.64a9 9 0 11-12.73 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <line x1="12" y1="2" x2="12" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1" fill="currentColor" opacity="0.2" />
    <circle cx="12" cy="2" r="1" fill="currentColor" className="animate-pulse" />
    <path d="M12 2v10" stroke="currentColor" strokeWidth="1" strokeLinecap="round" className="animate-pulse" opacity="0.5" />
  </svg>
);

// 代码图标 - 赛博朋克风格
export const Code = (props: IconProps) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <rect x="3" y="3" width="18" height="18" stroke="currentColor" strokeWidth="2" rx="2" fill="none" />
    <path d="M8 8l-2 4 2 4M16 8l2 4-2 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 16.5v.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="animate-pulse" />
    <rect x="3" y="3" width="18" height="18" stroke="currentColor" strokeWidth="1" rx="2" fill="none" className="animate-pulse" opacity="0.3" />
  </svg>
);

// 盾牌图标 - 赛博朋克风格
export const Shield = (props: IconProps) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M12 2l8 3v7c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V5z" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.3" />
    <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="12" cy="12" r="1" fill="currentColor" className="animate-pulse" />
    <path d="M12 2l8 3v7c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V5z" stroke="currentColor" strokeWidth="1" fill="none" className="animate-pulse" opacity="0.4" />
  </svg>
);

// 箭头下图标 - 赛博朋克风格
export const ArrowDown = (props: IconProps) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M12 5v14M19 12l-7 7-7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 5v14" stroke="currentColor" strokeWidth="1" strokeLinecap="round" className="animate-pulse" opacity="0.6" />
    <circle cx="12" cy="19" r="1" fill="currentColor" className="animate-pulse" />
  </svg>
);

// 文件夹图标 - 赛博朋克风格
export const Folder = (props: IconProps) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.3" />
    <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z" stroke="currentColor" strokeWidth="1" fill="none" className="animate-pulse" opacity="0.5" />
    <circle cx="12" cy="13" r="0.5" fill="currentColor" className="animate-pulse" />
  </svg>
);

// 服务器图标 - 赛博朋克风格
export const Server = (props: IconProps) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <rect x="2" y="2" width="20" height="8" rx="2" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.3" />
    <rect x="2" y="14" width="20" height="8" rx="2" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.3" />
    <circle cx="6" cy="6" r="1" fill="currentColor" className="animate-pulse" />
    <circle cx="6" cy="18" r="1" fill="currentColor" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
    <line x1="10" y1="6" x2="18" y2="6" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
    <line x1="10" y1="18" x2="18" y2="18" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
  </svg>
);

// 数据库图标 - 赛博朋克风格
export const Database = (props: IconProps) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <ellipse cx="12" cy="5" rx="9" ry="3" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.3" />
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3M21 5v14c0 1.66-4 3-9 3s-9-1.34-9-3V5" stroke="currentColor" strokeWidth="2" />
    <path d="M21 12v7c0 1.66-4 3-9 3s-9-1.34-9-3v-7" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" className="animate-pulse" opacity="0.5" />
    <circle cx="12" cy="5" r="0.5" fill="currentColor" className="animate-pulse" />
    <circle cx="12" cy="12" r="0.5" fill="currentColor" className="animate-pulse" style={{ animationDelay: '0.3s' }} />
    <circle cx="12" cy="19" r="0.5" fill="currentColor" className="animate-pulse" style={{ animationDelay: '0.6s' }} />
  </svg>
);

// 图表图标 - 赛博朋克风格
export const BarChart = (props: IconProps) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <rect x="3" y="3" width="18" height="18" stroke="currentColor" strokeWidth="2" rx="2" fill="none" />
    <rect x="7" y="8" width="3" height="13" fill="currentColor" opacity="0.6" />
    <rect x="14" y="5" width="3" height="16" fill="currentColor" opacity="0.6" />
    <rect x="7" y="8" width="3" height="13" fill="none" stroke="currentColor" strokeWidth="1" className="animate-pulse" opacity="0.8" />
    <rect x="14" y="5" width="3" height="16" fill="none" stroke="currentColor" strokeWidth="1" className="animate-pulse" opacity="0.8" />
    <circle cx="8.5" cy="8" r="0.5" fill="currentColor" className="animate-pulse" />
    <circle cx="15.5" cy="5" r="0.5" fill="currentColor" className="animate-pulse" style={{ animationDelay: '0.3s' }} />
  </svg>
);

// 灯泡图标 (💡) - 赛博朋克风格
export const Lightbulb = (props: IconProps) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M12 2C8.13 2 5 5.13 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.87-3.13-7-7-7z" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.3" />
    <line x1="9" y1="21" x2="15" y2="21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <line x1="12" y1="18" x2="12" y2="21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <circle cx="12" cy="9" r="2" fill="currentColor" className="animate-pulse" />
    <path d="M12 2v3M18 9h3M6 9H3M17 14l2 2M7 14l-2 2" stroke="currentColor" strokeWidth="1" strokeLinecap="round" className="animate-pulse" opacity="0.5" />
  </svg>
);

// 火箭图标 (🚀) - 赛博朋克风格
export const Rocket = (props: IconProps) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M12 2L8 8l-3 1v6l3 1 4 6 4-6 3-1V9l-3-1z" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.3" />
    <circle cx="12" cy="11" r="2" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.5" />
    <path d="M7 17l-2 4M17 17l2 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <circle cx="12" cy="11" r="0.5" fill="currentColor" className="animate-pulse" />
    <path d="M12 22v-2" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="animate-pulse" opacity="0.8" />
  </svg>
);

// 工具图标 (🔧) - 赛博朋克风格
export const Tool = (props: IconProps) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.3" />
    <circle cx="18" cy="6" r="1" fill="currentColor" className="animate-pulse" />
    <circle cx="6" cy="18" r="1" fill="currentColor" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
    <path d="M15 9l-6 6" stroke="currentColor" strokeWidth="1" strokeLinecap="round" className="animate-pulse" opacity="0.5" />
  </svg>
);

// 书籍图标 (📚) - 赛博朋克风格
export const Books = (props: IconProps) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M4 5h5v14H4zM9 5h5v14H9zM14 5h6v14h-6z" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.3" />
    <path d="M4 5h5v14H4z" stroke="currentColor" strokeWidth="2" />
    <path d="M9 5h5v14H9z" stroke="currentColor" strokeWidth="2" />
    <path d="M14 5h6v14h-6z" stroke="currentColor" strokeWidth="2" />
    <circle cx="6.5" cy="8" r="0.5" fill="currentColor" className="animate-pulse" />
    <circle cx="11.5" cy="8" r="0.5" fill="currentColor" className="animate-pulse" style={{ animationDelay: '0.2s' }} />
    <circle cx="17" cy="8" r="0.5" fill="currentColor" className="animate-pulse" style={{ animationDelay: '0.4s' }} />
  </svg>
);

// 趋势图标 (📈) - 赛博朋克风格
export const TrendingUp = (props: IconProps) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <rect x="3" y="3" width="18" height="18" stroke="currentColor" strokeWidth="2" rx="2" fill="currentColor" opacity="0.2" />
    <polyline points="7,17 12,12 15,15 20,10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <polyline points="15,10 20,10 20,15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="12" cy="12" r="1" fill="currentColor" className="animate-pulse" />
    <polyline points="7,17 12,12 15,15 20,10" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="animate-pulse" opacity="0.5" />
  </svg>
);

// 包裹图标 (📦) - 赛博朋克风格
export const Package = (props: IconProps) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M12 2l10 5v10l-10 5-10-5V7z" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.3" />
    <path d="M12 22V12M2 7l10 5 10-5M7 4.5L17 9.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <circle cx="12" cy="12" r="1" fill="currentColor" className="animate-pulse" />
    <path d="M12 2v5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" className="animate-pulse" opacity="0.5" />
  </svg>
);

// 闪光图标 (⚡) - 已存在 Zap，创建别名
export const Lightning = Zap;

// 目标靶心图标 (🎯) - 已存在 Target，创建别名
export const Bullseye = Target;

// 信号图标 (📡) - 赛博朋克风格
export const Signal = (props: IconProps) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <circle cx="12" cy="18" r="2" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.5" />
    <path d="M16.24 13.76a6 6 0 00-8.48 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M19.07 10.93a10 10 0 00-14.14 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M22 8a14 14 0 00-20 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <circle cx="12" cy="18" r="0.5" fill="currentColor" className="animate-pulse" />
    <path d="M16.24 13.76a6 6 0 00-8.48 0" stroke="currentColor" strokeWidth="1" strokeLinecap="round" className="animate-pulse" opacity="0.5" />
  </svg>
);

// 消息图标 (💬) - 赛博朋克风格  
export const Message = (props: IconProps) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.3" />
    <circle cx="8" cy="11" r="0.5" fill="currentColor" className="animate-pulse" />
    <circle cx="12" cy="11" r="0.5" fill="currentColor" className="animate-pulse" style={{ animationDelay: '0.2s' }} />
    <circle cx="16" cy="11" r="0.5" fill="currentColor" className="animate-pulse" style={{ animationDelay: '0.4s' }} />
  </svg>
);

// 标签图标 (🏷️) - 赛博朋克风格
export const Tag = (props: IconProps) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.3" />
    <circle cx="7" cy="7" r="1" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.6" />
    <circle cx="7" cy="7" r="0.5" fill="currentColor" className="animate-pulse" />
    <path d="M2 2l10 10" stroke="currentColor" strokeWidth="1" strokeLinecap="round" className="animate-pulse" opacity="0.5" />
  </svg>
);

// 握手图标 (🤝) - 赛博朋克风格
export const Handshake = (props: IconProps) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M11 6l-3-3-6 6v8h7l3-3m10-8l-6-6-3 3m14 14v-8l-6-6m-5 5l5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <path d="M8 12h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
    <circle cx="12" cy="12" r="2" fill="currentColor" opacity="0.5" />
    <circle cx="12" cy="12" r="0.5" fill="currentColor" className="animate-pulse" />
    <path d="M7 12h10" stroke="currentColor" strokeWidth="1" strokeLinecap="round" className="animate-pulse" opacity="0.5" />
  </svg>
);

// 拼图图标 (🧩) - 赛博朋克风格
export const Puzzle = (props: IconProps) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M4 4h4c0-2 1-3 2-3s2 1 2 3h4v4c2 0 3 1 3 2s-1 2-3 2v4h-4c0 2-1 3-2 3s-2-1-2-3H4v-4c-2 0-3-1-3-2s1-2 3-2V4z" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.3" />
    <circle cx="12" cy="12" r="1" fill="currentColor" className="animate-pulse" />
    <path d="M8 12h8M12 8v8" stroke="currentColor" strokeWidth="1" strokeLinecap="round" className="animate-pulse" opacity="0.5" />
  </svg>
);

// 刷新循环图标 (🔄) - 已有 RefreshCw，创建别名
export const Refresh = RefreshCw;

// 图表图标 (📊) - 已有 BarChart，创建别名
export const Chart = BarChart;

// 机器人图标 (🤖) - 赛博朋克风格
export const Robot = (props: IconProps) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <rect x="4" y="4" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.3" />
    <rect x="6" y="2" width="12" height="2" rx="1" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.5" />
    <circle cx="9" cy="9" r="1" fill="currentColor" className="animate-pulse" />
    <circle cx="15" cy="9" r="1" fill="currentColor" className="animate-pulse" style={{ animationDelay: '0.2s' }} />
    <path d="M8 14h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <rect x="4" y="20" width="4" height="2" rx="1" stroke="currentColor" strokeWidth="1" fill="currentColor" opacity="0.5" />
    <rect x="16" y="20" width="4" height="2" rx="1" stroke="currentColor" strokeWidth="1" fill="currentColor" opacity="0.5" />
    <circle cx="12" cy="12" r="0.5" fill="currentColor" className="animate-pulse" style={{ animationDelay: '0.4s' }} />
  </svg>
);

// 大脑图标 (🧠) - 赛博朋克风格
export const Brain = (props: IconProps) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M12 2C8 2 5 5 5 9c0 1.5.5 3 1.5 4C5.5 14 5 15.5 5 17c0 2.5 2 4.5 4.5 4.5h5c2.5 0 4.5-2 4.5-4.5 0-1.5-.5-3-1.5-4 1-.5 1.5-2.5 1.5-4 0-4-3-7-7-7z" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.3" />
    <path d="M8 10c0-1 .5-2 1.5-2S11 9 11 10M13 10c0-1 .5-2 1.5-2S16 9 16 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <circle cx="12" cy="12" r="1" fill="currentColor" className="animate-pulse" />
    <path d="M9 14c1 1 2 1 3 1s2 0 3-1" stroke="currentColor" strokeWidth="1" strokeLinecap="round" className="animate-pulse" opacity="0.6" />
  </svg>
);

// 天平图标 (⚖️) - 赛博朋克风格
export const Scale = (props: IconProps) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M12 2v20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M6 6l6 0 6 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <circle cx="6" cy="6" r="4" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.3" />
    <circle cx="18" cy="6" r="4" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.3" />
    <rect x="8" y="20" width="8" height="2" rx="1" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.5" />
    <circle cx="6" cy="6" r="0.5" fill="currentColor" className="animate-pulse" />
    <circle cx="18" cy="6" r="0.5" fill="currentColor" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
  </svg>
);

// 天平图标别名
export const Balance = Scale;

// 添加更多赛博朋克风格图标
export const Warning = (props: IconProps) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M12 2L2 20h20L12 2z" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.3" />
    <path d="M12 9v4m0 4h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="animate-pulse" />
  </svg>
);

export const Cog = (props: IconProps) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.3" />
    <path d="M12 1v6m0 6v6m6.36-15.36l-4.24 4.24m-4.24 4.24l-4.24 4.24M23 12h-6m-6 0H1m16.36 6.36l-4.24-4.24m-4.24-4.24L4.64 5.64" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="animate-spin-slow" />
  </svg>
);

export const ClipboardCheck = (props: IconProps) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.3" />
    <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-pulse" />
    <rect x="8" y="2" width="8" height="4" rx="1" stroke="currentColor" strokeWidth="2" />
  </svg>
);

export const Globe = (props: IconProps) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.3" />
    <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" stroke="currentColor" strokeWidth="2" className="animate-pulse" />
  </svg>
);

export const Timer = (props: IconProps) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <circle cx="12" cy="13" r="9" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.3" />
    <path d="M12 7v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="animate-pulse" />
    <path d="M9 2h6m-3 0v3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const Map = (props: IconProps) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M1 6v16l7-4 8 4 7-4V2l-7 4-8-4-7 4z" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.3" />
    <path d="M8 2v16m8-12v16" stroke="currentColor" strokeWidth="2" className="animate-pulse" />
  </svg>
);

export const Building = (props: IconProps) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <rect x="4" y="2" width="16" height="20" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.3" />
    <rect x="8" y="6" width="3" height="3" stroke="currentColor" strokeWidth="1" className="animate-pulse" />
    <rect x="13" y="6" width="3" height="3" stroke="currentColor" strokeWidth="1" className="animate-pulse" />
    <rect x="8" y="12" width="3" height="3" stroke="currentColor" strokeWidth="1" className="animate-pulse" />
    <rect x="13" y="12" width="3" height="3" stroke="currentColor" strokeWidth="1" className="animate-pulse" />
    <rect x="10" y="18" width="4" height="4" stroke="currentColor" strokeWidth="2" />
  </svg>
);

export const MessageSquare = (props: IconProps) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.3" />
    <circle cx="9" cy="10" r="1" fill="currentColor" className="animate-pulse" />
    <circle cx="12" cy="10" r="1" fill="currentColor" className="animate-pulse" style={{ animationDelay: '0.2s' }} />
    <circle cx="15" cy="10" r="1" fill="currentColor" className="animate-pulse" style={{ animationDelay: '0.4s' }} />
  </svg>
);