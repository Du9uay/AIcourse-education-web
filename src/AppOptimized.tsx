import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import ScrollToTop from './components/ScrollToTop';
import CyberpunkBackgroundOptimized from './components/CyberpunkBackgroundOptimized';
import CyberpunkVignette from './components/CyberpunkVignette';

// 懒加载页面组件
const HomePage = lazy(() => import('./pages/HomePage'));

// 加载指示器组件
const LoadingFallback: React.FC = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="text-center">
      <div className="inline-flex items-center space-x-2">
        <div className="w-8 h-8 border-4 border-cyber-pink-500 border-t-transparent rounded-full animate-spin"></div>
        <span className="text-cyber-pink-400 font-medium">加载中...</span>
      </div>
    </div>
  </div>
);

const AppOptimized: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen relative">
        <CyberpunkBackgroundOptimized />
        <CyberpunkVignette intensity="light" variant="minimal" />
        <Navigation />
        <div className="container mx-auto px-4 pt-20 relative z-10">
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
            </Routes>
          </Suspense>
        </div>
      </div>
    </Router>
  );
};

export default AppOptimized;