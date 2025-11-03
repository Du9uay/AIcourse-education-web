import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Cpu, PlayCircle, X } from './Icons';

const Navigation: React.FC = () => {
  const location = useLocation();
  const [isTrialModalOpen, setIsTrialModalOpen] = useState(false);

  const navLinks = [
    { path: '/', label: '课程首页' },
    { path: '/course', label: '课程' }
  ];

  return (
    <>
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cyber-dark-900/95 backdrop-blur-xl border-b border-cyber-pink-500/30">
      {/* Trial Button - Absolutely Positioned at Left */}
      <button
        onClick={() => setIsTrialModalOpen(true)}
        className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-xl font-medium text-sm transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-purple-500/30 z-10"
      >
        <PlayCircle className="w-4 h-4" />
        <span>直播回放</span>
      </button>

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-4 ml-32">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-cyber-pink-500 to-neon-purple-500 rounded-lg flex items-center justify-center shadow-neon-pink neon-glow-pink">
                <Cpu className="w-6 h-6 text-white" />
              </div>
              <span className="gradient-text font-bold text-lg uppercase tracking-wider">多Agent协作系统</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-4 py-2 font-semibold transition-all duration-300 ${
                  location.pathname === link.path
                    ? 'text-neon-cyan-400 neon-text-cyan'
                    : 'text-cyber-dark-200 hover:text-neon-cyan-400'
                }`}
              >
                {link.label}
                {location.pathname === link.path && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-neon-cyan-500 to-cyber-pink-500 shadow-neon-cyan"></span>
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center space-x-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 text-sm font-semibold transition-all duration-300 ${
                  location.pathname === link.path
                    ? 'text-neon-cyan-400 neon-text-cyan'
                    : 'text-cyber-dark-200 hover:text-neon-cyan-400'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>

    {/* Trial Video Modal */}
    {isTrialModalOpen && (
      <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4">
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          onClick={() => setIsTrialModalOpen(false)}
        />

        {/* Modal Content */}
        <div className="relative w-full max-w-5xl bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl border border-purple-500/30 overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-purple-500/20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <PlayCircle className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white">直播回放</h2>
            </div>
            <button
              onClick={() => setIsTrialModalOpen(false)}
              className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5 text-white" />
            </button>
          </div>

          {/* Video Container */}
          <div className="relative bg-black" style={{ paddingBottom: '56.25%' }}>
            <video
              className="absolute inset-0 w-full h-full"
              controls
              autoPlay
              src="https://ddcz-1315997005.cos.ap-nanjing.myqcloud.com/static/video/web_teach/AIclass_playback.mov"
            >
              您的浏览器不支持视频播放
            </video>
          </div>

          {/* Footer */}
          <div className="p-6 bg-gradient-to-r from-purple-900/20 to-pink-900/20 border-t border-purple-500/20">
            <div className="flex items-center justify-between">
              <p className="text-white/80">
                观看多Agent协作系统课程的完整直播回放，深入了解AI协作技术
              </p>
              <button
                onClick={() => setIsTrialModalOpen(false)}
                className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-lg font-medium transition-all hover:scale-105"
              >
                关闭
              </button>
            </div>
          </div>
        </div>
      </div>
    )}
  </>
  );
};

export default Navigation; 