import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import ScrollToTop from './components/ScrollToTop';
import CyberpunkBackground from './components/CyberpunkBackground';
import CyberpunkVignette from './components/CyberpunkVignette';
import HomePage from './pages/HomePage';
import CoursePage from './pages/CoursePage';

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen relative">
        <CyberpunkBackground />
        <CyberpunkVignette
          intensity="strong"
          variant="neon"
        />
        <Navigation />
        <div className="container mx-auto px-4 pt-20 relative z-10">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/course" element={<CoursePage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App; 