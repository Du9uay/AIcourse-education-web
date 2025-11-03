import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from './Icons';
import { getChapterNavigation } from '../utils/courseNavigation';

interface CourseNavigationProps {
  className?: string;
}

const CourseNavigation: React.FC<CourseNavigationProps> = ({ className = '' }) => {
  const location = useLocation();
  const { prev, next } = getChapterNavigation(location.pathname);

  return (
    <div className={`flex justify-between items-center mt-12 ${className}`}>
      {prev ? (
        <Link
          to={prev.path}
          className="cyber-button flex items-center group"
        >
          <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
          <div className="text-left">
            <div className="text-sm opacity-70">上一章</div>
            <div className="font-medium">{prev.title}</div>
          </div>
        </Link>
      ) : (
        <Link
          to="/"
          className="cyber-button flex items-center group"
        >
          <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
          返回首页
        </Link>
      )}

      {next ? (
        <Link
          to={next.path}
          className="cyber-button flex items-center group"
        >
          <div className="text-right">
            <div className="text-sm opacity-70">下一章</div>
            <div className="font-medium">{next.title}</div>
          </div>
          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
        </Link>
      ) : (
        <Link
          to="/course-summary"
          className="cyber-button flex items-center group"
        >
          <div className="text-right">
            <div className="text-sm opacity-70">课程完成</div>
            <div className="font-medium">课程总结</div>
          </div>
          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
        </Link>
      )}
    </div>
  );
};

export default CourseNavigation;