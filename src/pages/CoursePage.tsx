import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSectionScroll } from '../hooks/useSectionScroll';
import {
  BookOpen,
  Brain,
  Rocket,
  Award,
  TrendingUp,
  Users,
  Target,
  Zap,
  Settings,
  Lightbulb,
  CheckCircle,
  ArrowRight,
  Package,
  Database,
  Code,
  BarChart
} from '../components/Icons';

const CoursePage: React.FC = () => {
  // 图片查看器状态
  const [viewingImage, setViewingImage] = useState<string | null>(null);

  // 轮播图状态
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselImages = [
    `${process.env.PUBLIC_URL}/images/课程页面/第一阶段轮播图/七、我们的课程设置_AI工具logo轮播图.png`,
    `${process.env.PUBLIC_URL}/images/课程页面/第一阶段轮播图/七、构建属于自己的AI工作流系统.png`,
    `${process.env.PUBLIC_URL}/images/课程页面/第一阶段轮播图/七、网页作品集-1.png`,
    `${process.env.PUBLIC_URL}/images/课程页面/第一阶段轮播图/七、网页作品集-2.png`
  ];

  // 使用section滚动Hook
  const { registerSection, scrollToSection, currentSection } = useSectionScroll({
    duration: 1000, // 1秒动画
    easing: 'cubic-bezier(0.4, 0, 0.2, 1)' // Apple风格缓动
  });

  // 目录数据
  const sections = [
    { id: 0, title: '课程概览' },
    { id: 1, title: '课程价值' },
    { id: 2, title: 'AI基础课' },
    { id: 3, title: '复合技能课' },
    { id: 4, title: '垂直技能课' }
  ];

  // 自动轮播
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  // 动画配置
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  return (
    <div className="section-scroll-container">
      {/* 右侧目录导航 */}
      <nav className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block">
        <div className="cyber-card p-4 rounded-xl">
          <div className="space-y-3">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`
                  block w-full text-left px-4 py-2 rounded-lg transition-all duration-300
                  ${currentSection === section.id
                    ? 'bg-cyber-pink-500/20 border-l-4 border-cyber-pink-500 text-cyber-pink-400 font-bold'
                    : 'text-cyber-dark-200 hover:bg-cyber-dark-800 hover:text-neon-cyan-400'
                  }
                `}
              >
                <span className="text-sm">{section.title}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero区域 */}
      <section
        ref={(el) => registerSection(el, 0)}
        className="section-scroll-item relative flex items-center justify-center px-4 py-32"
      >
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative z-10 text-center max-w-5xl mx-auto"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-6xl md:text-7xl lg:text-8xl font-black mb-6 glitch-text gradient-text-reverse"
            data-text="我们的课程设置"
          >
            我们的课程设置
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold neon-text-cyan"
          >
            从入门到实战，打造你的AI职业进阶路线图
          </motion.p>
        </motion.div>
      </section>

      {/* 课程价值说明区 */}
      <section
        ref={(el) => registerSection(el, 1)}
        className="section-scroll-item flex items-center justify-center px-4"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto"
        >
          {/* 左右布局 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* 左侧：三张卡片竖向排列 */}
            <div className="space-y-6">
              {/* 价值点1 */}
              <motion.div
                variants={fadeInUp}
                whileHover={{ x: 10 }}
                className="cyber-card p-6 rounded-2xl"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-neon-cyan-500/20 to-transparent rounded-xl flex items-center justify-center border border-neon-cyan-500/30">
                      <Brain className="text-neon-cyan-500 neon-glow-cyan" size={32} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-neon-cyan-400 mb-2">
                      各式各样AI工具的使用方法
                    </h3>
                    <p className="text-base text-cyber-dark-200">
                      从ChatGPT到Midjourney，从文本到视频，全面掌握主流AI工具
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* 价值点2 */}
              <motion.div
                variants={fadeInUp}
                whileHover={{ x: 10 }}
                className="cyber-card p-6 rounded-2xl"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-neon-purple-500/20 to-transparent rounded-xl flex items-center justify-center border border-neon-purple-500/30">
                      <Settings className="text-neon-purple-500 neon-glow-purple" size={32} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-neon-purple-400 mb-2">
                      构建属于自己的AI工作流系统
                    </h3>
                    <p className="text-base text-cyber-dark-200">
                      学会自动化工作流，让AI成为你的智能助理
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* 价值点3 */}
              <motion.div
                variants={fadeInUp}
                whileHover={{ x: 10 }}
                className="cyber-card p-6 rounded-2xl"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyber-pink-500/20 to-transparent rounded-xl flex items-center justify-center border border-cyber-pink-500/30">
                      <Award className="text-cyber-pink-500 neon-glow-pink" size={32} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-cyber-pink-400 mb-2">
                      在就业市场中脱颖而出
                    </h3>
                    <p className="text-base text-cyber-dark-200">
                      拥有AI技能，让你的简历在HR眼中闪闪发光
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* 右侧：轮播图 */}
            <motion.div variants={fadeInUp} className="relative">
              <div className="relative overflow-hidden rounded-2xl border-2 border-neon-cyan-500/30 shadow-neon-cyan bg-cyber-dark-900/50">
                {/* 轮播图片 */}
                <div className="relative aspect-video">
                  {carouselImages.map((image, index) => (
                    <motion.img
                      key={index}
                      src={image}
                      alt={`轮播图 ${index + 1}`}
                      className="absolute inset-0 w-full h-full object-cover"
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: currentSlide === index ? 1 : 0,
                        scale: currentSlide === index ? 1 : 1.1
                      }}
                      transition={{ duration: 0.7 }}
                    />
                  ))}
                </div>

                {/* 轮播指示器 */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                  {carouselImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        currentSlide === index
                          ? 'bg-neon-cyan-500 w-8 shadow-neon-cyan'
                          : 'bg-cyber-dark-300 hover:bg-cyber-dark-100'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* 核心理念 */}
          <motion.div
            variants={fadeInUp}
            className="mt-16 text-center cyber-card p-8 rounded-2xl"
          >
            <p className="text-3xl md:text-4xl font-black gradient-text">
              每个岗位都有独特的AI提示词与工具，<br />
              我们要学的不只是"用AI"，而是让AI高效地为我们工作
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* 第一阶段：AI基础课 */}
      <section
        ref={(el) => registerSection(el, 2)}
        className="section-scroll-item py-16 px-4"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto"
        >
          {/* 标题 */}
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-6 gradient-text">
              第一阶段：AI基础课
            </h2>
            <p className="text-3xl font-bold text-neon-cyan-400">
              你的终身学习系统
            </p>
            <p className="text-xl text-cyber-dark-200 mt-4">
              学习目标：从零掌握AI核心原理与工具使用，建立个人AI工作流
            </p>
          </motion.div>

          {/* 核心内容 */}
          <motion.div variants={fadeInUp} className="cyber-card p-8 rounded-2xl mb-8">
            <h3 className="text-3xl font-bold text-neon-purple-400 mb-6 flex items-center gap-4">
              <BookOpen className="neon-glow-purple" size={40} />
              核心内容
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-cyber-dark-900/50 rounded-xl border border-neon-purple-500/20">
                <div className="flex items-center gap-3 mb-3">
                  <Lightbulb className="text-neon-yellow-500" size={32} />
                  <h4 className="text-2xl font-bold text-neon-yellow-400">提示词工程</h4>
                </div>
                <p className="text-lg text-cyber-dark-200 mb-4">
                  掌握Prompt设计技巧，让AI精准理解你的需求
                </p>
                <div className="relative rounded-lg overflow-hidden border border-neon-yellow-500/30 cursor-pointer"
                  onClick={() => setViewingImage(`${process.env.PUBLIC_URL}/images/课程页面/AI基础课/提示词工程.png`)}
                >
                  <img
                    src={`${process.env.PUBLIC_URL}/images/课程页面/AI基础课/提示词工程.png`}
                    alt="提示词工程"
                    className="w-full h-auto hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              <div className="p-6 bg-cyber-dark-900/50 rounded-xl border border-neon-cyan-500/20">
                <div className="flex items-center gap-3 mb-3">
                  <Brain className="text-neon-cyan-500" size={32} />
                  <h4 className="text-2xl font-bold text-neon-cyan-400">上下文设计与表达逻辑</h4>
                </div>
                <p className="text-lg text-cyber-dark-200 mb-4">
                  学会结构化思考，提升AI输出质量
                </p>
                <div className="relative rounded-lg overflow-hidden border border-neon-cyan-500/30 cursor-pointer"
                  onClick={() => setViewingImage(`${process.env.PUBLIC_URL}/images/课程页面/AI基础课/上下文设计与表达逻辑.png`)}
                >
                  <img
                    src={`${process.env.PUBLIC_URL}/images/课程页面/AI基础课/上下文设计与表达逻辑.png`}
                    alt="上下文设计与表达逻辑"
                    className="w-full h-auto hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              <div className="p-6 bg-cyber-dark-900/50 rounded-xl border border-cyber-pink-500/20">
                <div className="flex items-center gap-3 mb-3">
                  <Package className="text-cyber-pink-500" size={32} />
                  <h4 className="text-2xl font-bold text-cyber-pink-400">各种类型的AI工具</h4>
                </div>
                <p className="text-lg text-cyber-dark-200 mb-4">
                  全面了解文本、图像、视频、代码等AI工具
                </p>
                <div className="relative rounded-lg overflow-hidden border border-cyber-pink-500/30 cursor-pointer"
                  onClick={() => setViewingImage(`${process.env.PUBLIC_URL}/images/课程页面/AI基础课/各种类型的AI工具.png`)}
                >
                  <img
                    src={`${process.env.PUBLIC_URL}/images/课程页面/AI基础课/各种类型的AI工具.png`}
                    alt="各种类型的AI工具"
                    className="w-full h-auto hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              <div className="p-6 bg-cyber-dark-900/50 rounded-xl border border-neon-purple-500/20">
                <div className="flex items-center gap-3 mb-3">
                  <Zap className="text-neon-purple-500" size={32} />
                  <h4 className="text-2xl font-bold text-neon-purple-400">Agent自动化工作流</h4>
                </div>
                <p className="text-lg text-cyber-dark-200 mb-4">
                  使用N8N等工具构建智能自动化系统
                </p>
                <div className="relative rounded-lg overflow-hidden border border-neon-purple-500/30 cursor-pointer"
                  onClick={() => setViewingImage(`${process.env.PUBLIC_URL}/images/课程页面/AI基础课/Agent自动化工作流.png`)}
                >
                  <img
                    src={`${process.env.PUBLIC_URL}/images/课程页面/AI基础课/Agent自动化工作流.png`}
                    alt="Agent自动化工作流"
                    className="w-full h-auto hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* 你可以成为 */}
          <motion.div variants={fadeInUp} className="cyber-card p-8 rounded-2xl mb-8">
            <h3 className="text-3xl font-bold text-neon-cyan-400 mb-6 flex items-center gap-4">
              <Rocket className="neon-glow-cyan" size={40} />
              你可以成为
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <CheckCircle className="text-neon-cyan-500 flex-shrink-0 mt-1" size={28} />
                <p className="text-xl text-cyber-dark-200">
                  告别"玩AI"，真正理解AI的工作原理
                </p>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="text-neon-cyan-500 flex-shrink-0 mt-1" size={28} />
                <p className="text-xl text-cyber-dark-200">
                  让AI准确理解你的需求，高效输出可用结果
                </p>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="text-neon-cyan-500 flex-shrink-0 mt-1" size={28} />
                <p className="text-xl text-cyber-dark-200">
                  建立属于自己的"AI工作流系统"
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* 第二阶段：复合技能课 */}
      <section
        ref={(el) => registerSection(el, 3)}
        className="section-scroll-item py-16 px-4 bg-cyber-dark-900/30"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto"
        >
          {/* 标题 */}
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-6 gradient-text-reverse">
              第二阶段：复合技能课
            </h2>
            <p className="text-3xl font-bold text-neon-purple-400">
              打通AI与行业的桥梁
            </p>
            <p className="text-xl text-cyber-dark-200 mt-4">
              学习目标：掌握AI在不同行业中的实际应用，提升岗位专业能力
            </p>
          </motion.div>

          {/* 六大订单班 */}
          <motion.div variants={fadeInUp} className="mb-12">
            <h3 className="text-3xl font-bold text-center text-neon-cyan-400 mb-8">
              六大订单班，根据自己的专业/兴趣任选其中之一
            </h3>
            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="cyber-card rounded-xl text-center relative overflow-hidden h-48"
                style={{
                  backgroundImage: `url(${process.env.PUBLIC_URL}/images/课程页面/订单班图片/七、我们的课程设置_第二阶段_涵盖方向_智能制造.png)`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark-950/95 via-cyber-dark-950/70 to-cyber-dark-950/40"></div>
                <div className="relative z-10 p-6 h-full flex flex-col items-center justify-center">
                  <Settings className="text-neon-blue-500 mx-auto mb-3 neon-glow-blue !w-12 !h-12" size={48} />
                  <p className="text-lg font-bold text-neon-blue-400">智能制造</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="cyber-card rounded-xl text-center relative overflow-hidden h-48"
                style={{
                  backgroundImage: `url(${process.env.PUBLIC_URL}/images/课程页面/订单班图片/七、我们的课程设置_第二阶段_涵盖方向_财经商贸.jpg)`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark-950/95 via-cyber-dark-950/70 to-cyber-dark-950/40"></div>
                <div className="relative z-10 p-6 h-full flex flex-col items-center justify-center">
                  <BarChart className="text-neon-cyan-500 mx-auto mb-3 neon-glow-cyan !w-12 !h-12" size={48} />
                  <p className="text-lg font-bold text-neon-cyan-400">财经商贸</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="cyber-card rounded-xl text-center relative overflow-hidden h-48"
                style={{
                  backgroundImage: `url(${process.env.PUBLIC_URL}/images/课程页面/订单班图片/七、我们的课程设置_第二阶段_涵盖方向_智能开发.jpg)`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark-950/95 via-cyber-dark-950/70 to-cyber-dark-950/40"></div>
                <div className="relative z-10 p-6 h-full flex flex-col items-center justify-center">
                  <Code className="text-neon-purple-500 mx-auto mb-3 neon-glow-purple !w-12 !h-12" size={48} />
                  <p className="text-lg font-bold text-neon-purple-400">智能开发</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="cyber-card rounded-xl text-center relative overflow-hidden h-48"
                style={{
                  backgroundImage: `url(${process.env.PUBLIC_URL}/images/课程页面/订单班图片/七、我们的课程设置_第二阶段_涵盖方向_视觉设计.jpg)`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark-950/95 via-cyber-dark-950/70 to-cyber-dark-950/40"></div>
                <div className="relative z-10 p-6 h-full flex flex-col items-center justify-center">
                  <Lightbulb className="text-cyber-pink-500 mx-auto mb-3 neon-glow-pink !w-12 !h-12" size={48} />
                  <p className="text-lg font-bold text-cyber-pink-400">视觉设计</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="cyber-card rounded-xl text-center relative overflow-hidden h-48"
                style={{
                  backgroundImage: `url(${process.env.PUBLIC_URL}/images/课程页面/订单班图片/七、我们的课程设置_第二阶段_涵盖方向_文旅.jpg)`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark-950/95 via-cyber-dark-950/70 to-cyber-dark-950/40"></div>
                <div className="relative z-10 p-6 h-full flex flex-col items-center justify-center">
                  <Users className="text-neon-yellow-500 mx-auto mb-3 neon-glow-yellow !w-12 !h-12" size={48} />
                  <p className="text-lg font-bold text-neon-yellow-400">文旅</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="cyber-card rounded-xl text-center relative overflow-hidden h-48"
                style={{
                  backgroundImage: `url(${process.env.PUBLIC_URL}/images/课程页面/订单班图片/七、我们的课程设置_第二阶段_涵盖方向_大健康.jpg)`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark-950/95 via-cyber-dark-950/70 to-cyber-dark-950/40"></div>
                <div className="relative z-10 p-6 h-full flex flex-col items-center justify-center">
                  <Award className="text-red-500 mx-auto mb-3 !w-12 !h-12" size={48} />
                  <p className="text-lg font-bold text-red-400">大健康</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* 核心内容 */}
          <motion.div variants={fadeInUp} className="cyber-card p-8 rounded-2xl mb-8">
            <h3 className="text-3xl font-bold text-neon-purple-400 mb-6">核心内容</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-neon-purple-500 rounded-full"></div>
                <p className="text-xl text-cyber-dark-200">行业内的基础概念与专业术语讲解</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-neon-cyan-500 rounded-full"></div>
                <p className="text-xl text-cyber-dark-200">行业内核心岗位的工作步骤与重要技能</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-cyber-pink-500 rounded-full"></div>
                <p className="text-xl text-cyber-dark-200">行业内AI软件案例实操</p>
              </div>
            </div>
          </motion.div>

          {/* 你可以得到 */}
          <motion.div variants={fadeInUp} className="cyber-card p-8 rounded-2xl">
            <h3 className="text-3xl font-bold text-neon-cyan-400 mb-6">你可以得到</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-gradient-to-br from-neon-cyan-500/10 to-transparent rounded-xl border border-neon-cyan-500/30">
                <TrendingUp className="text-neon-cyan-500 mb-4" size={40} />
                <p className="text-lg font-bold text-neon-cyan-400 mb-2">产业与商业认知</p>
                <p className="text-base text-cyber-dark-200">超越同龄人的产业与商业认知能力</p>
              </div>
              <div className="p-6 bg-gradient-to-br from-neon-purple-500/10 to-transparent rounded-xl border border-neon-purple-500/30">
                <Target className="text-neon-purple-500 mb-4" size={40} />
                <p className="text-lg font-bold text-neon-purple-400 mb-2">岗位工作逻辑</p>
                <p className="text-base text-cyber-dark-200">理解每个岗位的工作逻辑以及工作门道</p>
              </div>
              <div className="p-6 bg-gradient-to-br from-cyber-pink-500/10 to-transparent rounded-xl border border-cyber-pink-500/30">
                <Brain className="text-cyber-pink-500 mb-4" size={40} />
                <p className="text-lg font-bold text-cyber-pink-400 mb-2">双重能力</p>
                <p className="text-base text-cyber-dark-200">"AI思维 + 行业知识"的双重能力</p>
              </div>
            </div>
          </motion.div>

          {/* 案例展示区 */}
          <motion.div variants={fadeInUp} className="mt-16">
            <h3 className="text-4xl font-bold text-center text-neon-cyan-400 mb-12">
              实战案例展示
            </h3>

            {/* 案例一：AI视觉设计水果茶 */}
            <div className="mb-16">
              <h4 className="text-2xl font-bold text-neon-purple-400 mb-6 flex items-center gap-3">
                <Lightbulb className="neon-glow-purple" size={32} />
                案例一：AI视觉设计 - 水果茶海报设计
              </h4>

              {/* 第一个效果 */}
              <div className="cyber-card p-6 rounded-2xl mb-8">
                {/* 上部：需求和提示词横向排列 */}
                <div className="grid lg:grid-cols-2 gap-6 mb-8">
                  {/* 左侧：需求 */}
                  <div className="space-y-4">
                    <h5 className="text-xl font-bold text-neon-cyan-400 mb-3">设计需求</h5>
                    <div className="text-base text-cyber-dark-200 space-y-2">
                      <p className="flex items-start gap-2">
                        <span className="text-neon-cyan-500 mt-1">•</span>
                        <span>确定目标受众、氛围、画面元素，如奶茶杯、水果、光效、杯壁含有水滴，在树荫下，草丛上</span>
                      </p>
                      <p className="flex items-start gap-2">
                        <span className="text-neon-cyan-500 mt-1">•</span>
                        <span>AI的风格为实拍、清新</span>
                      </p>
                      <p className="flex items-start gap-2">
                        <span className="text-neon-cyan-500 mt-1">•</span>
                        <span>角度为平视、特写</span>
                      </p>
                      <p className="flex items-start gap-2">
                        <span className="text-neon-cyan-500 mt-1">•</span>
                        <span>要有英文的宣传文案</span>
                      </p>
                      <h5 className="text-xl font-bold text-neon-cyan-400 mb-3">模型</h5>
                      <p className="flex items-start gap-2">
                        <span className="text-neon-cyan-500 mt-1">•</span>
                        <span>Doubao Seedream 4.0</span>
                      </p>
                    </div>
                  </div>

                  {/* 右侧：提示词(高度缩小) */}
                  <div className="space-y-4">
                    <h5 className="text-xl font-bold text-neon-purple-400 mb-3">AI提示词</h5>
                    <div className="bg-cyber-dark-950/80 rounded-xl p-4 border border-neon-purple-500/30 font-mono text-sm text-cyber-dark-100 overflow-y-auto max-h-[450px]">
                      <pre className="whitespace-pre-wrap">
{`
        markdown
        # Role: 商业视觉设计生成器

        ## Profile
        - author: LangGPT
        - version: 1.0
        - language: 中文
        - description: 生成风格鲜明、适合商业推广的海报图像，适用于奶茶、甜品等门店新品上市宣传。

        ## Skills
        1. 根据场景生成高质量、构图合理的图像提示词；
        2. 能根据目标用户、情绪氛围控制图像风格与元素；
        3. 支持对图像风格、焦点、光影、色彩等细节进行微调；
        4. 提供中英双语提示词版本，适配多平台AI绘图工具。

        ## OutputFormat（图像生成提示词结构）:

        markdown
        【中文提示词】
        主题：失重空间站风格的冰镇水果茶海报（主体锁定）
        提示词：

        主体保持不变：一杯透明高杯的冰镇水果茶在失重中漂浮，杯沿覆盖尖锐霜晶，杯壁密布凝结水珠；杯中有橙片、红西柚片、青柠片与冰块，茶汤金橙色；玻璃边缘硬质轮廓光，浅景深，商业美食摄影，超高细节，竖版海报构图。

        背景可自由改变为：{在此填写你想要的背景场景}。

        注意：禁止改变主体外观与构图比例（玻璃杯形状、霜晶、凝露、配料种类与数量、杯体大小与位置不变），禁止添加文字/LOGO/水印，前景芒果与木碗青柠可有可无，以干净画面为先。

        背景示例库（直接替换{在此填写你想要的背景场景}）
        赛博朋克霓虹夜市，雨中反射、远景霓虹招牌与薄雾
        日出雪山与云海，干净的高空冷色环境光
        热带雨林瀑布飞沫，湿润空气与背光树叶散射
        地中海海岸，白色小镇与湛蓝海面、正午阳光
        复古法式厨房，奶油色瓷砖与铜锅反光
        现代极简摄影棚，无缝背景与柔光巨型软箱
        沙漠金色沙丘与热浪空气抖动
        深海蓝色背景与柔和体积光（营造水下感）
        樱花满开的城市河畔，浅粉色花海虚化
        月球表面与低角度太阳光，远处地球悬挂

        【English Prompt】

        Keep the subject unchanged: a tall clear glass of iced fruit tea floating weightlessly, rim covered with spiky frost crystals, dense condensation on the glass; inside the glass are orange slices, ruby-grapefruit, lime slices and ice cubes; golden-orange liquid; hard cool rim light, shallow depth of field, commercial food photography, ultra-high detail, vertical poster composition.

        The background may vary to: {write your desired background scene here}.

        Notes: Do not alter the subject's appearance or composition (glass shape, frost, condensation, fruit types/quantity, glass size and position remain the same). No text/logo/watermark. Foreground mango and wooden bowl of limes are optional; keep the frame clean.

         English, copy-ready single-line prompts (subject locked, background varies). Paste any one into Doubao or seedream.
        — Cyberpunk neon night market, rain reflections, distant neon signs and light mist
        — Sunrise over snowy mountains and a sea of clouds, clean high-altitude cool ambient light
        — Tropical rainforest waterfall spray, humid air with backlit foliage scattering
        — Mediterranean coast, white hillside town and deep-blue sea under noon sunlight
        — Vintage French kitchen, cream-colored tiles and reflections on copper pots
        — Modern minimal photo studio, seamless backdrop and large softbox diffuse lighting
        — Desert with golden sand dunes and shimmering heat haze
        — Deep-ocean blue background with soft volumetric light (submerged/water feel)
        — City riverside in full cherry blossom, soft pink bokeh of flowers
        — Lunar surface with low-angle sunlight, Earth hanging in the distant sky
        `}
                      </pre>
                    </div>
                  </div>
                </div>

                {/* 下部：效果图横向排列 */}
                <div>
                  <h5 className="text-xl font-bold text-cyber-pink-400 mb-4">最终效果</h5>
                  <div className="grid grid-cols-4 gap-4 mb-6">
                    <div className="relative rounded-xl overflow-hidden border-2 border-neon-pink-500/30 shadow-neon-pink cursor-pointer"
                      onClick={() => setViewingImage(`${process.env.PUBLIC_URL}/images/课程页面/图片效果/奶茶海报1.png`)}
                    >
                      <img
                        src={`${process.env.PUBLIC_URL}/images/课程页面/图片效果/奶茶海报1.png`}
                        alt="AI视觉设计案例1"
                        className="w-full h-auto hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="relative rounded-xl overflow-hidden border-2 border-neon-pink-500/30 shadow-neon-pink cursor-pointer"
                      onClick={() => setViewingImage(`${process.env.PUBLIC_URL}/images/课程页面/图片效果/奶茶海报2.png`)}
                    >
                      <img
                        src={`${process.env.PUBLIC_URL}/images/课程页面/图片效果/奶茶海报2.png`}
                        alt="AI视觉设计案例2"
                        className="w-full h-auto hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="relative rounded-xl overflow-hidden border-2 border-neon-pink-500/30 shadow-neon-pink cursor-pointer"
                      onClick={() => setViewingImage(`${process.env.PUBLIC_URL}/images/课程页面/图片效果/奶茶海报3.png`)}
                    >
                      <img
                        src={`${process.env.PUBLIC_URL}/images/课程页面/图片效果/奶茶海报3.png`}
                        alt="AI视觉设计案例3"
                        className="w-full h-auto hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="relative rounded-xl overflow-hidden border-2 border-neon-pink-500/30 shadow-neon-pink cursor-pointer"
                      onClick={() => setViewingImage(`${process.env.PUBLIC_URL}/images/课程页面/图片效果/奶茶海报4.png`)}
                    >
                      <img
                        src={`${process.env.PUBLIC_URL}/images/课程页面/图片效果/奶茶海报4.png`}
                        alt="AI视觉设计案例4"
                        className="w-full h-auto hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>

                  {/* 演示视频 */}
                  <div className="mt-6">
                    <h5 className="text-xl font-bold text-neon-purple-400 mb-4">演示视频</h5>
                    <div className="relative overflow-hidden rounded-xl border-2 border-neon-purple-500/50 shadow-neon-purple">
                      <video
                        controls
                        className="w-full"
                        poster=""
                      >
                        <source src="https://ddcz-1315997005.cos.ap-nanjing.myqcloud.com/static/video/web_teach/milktea.mp4" type="video/mp4" />
                        您的浏览器不支持视频播放。
                      </video>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 案例二：AI编程开发 */}
            <div>
              <h4 className="text-2xl font-bold text-neon-purple-400 mb-6 flex items-center gap-3">
                <Code className="neon-glow-purple" size={32} />
                案例二：AI编程开发 - 小型商品展示网站
              </h4>

              {/* 开发效果展示 */}
              <div className="cyber-card p-6 rounded-2xl">
                {/* 上部：需求和提示词横向排列 */}
                <div className="grid lg:grid-cols-2 gap-6 mb-8">
                  {/* 左侧：需求 */}
                  <div className="space-y-4">
                    <h5 className="text-xl font-bold text-neon-cyan-400 mb-3">开发需求</h5>
                    <div className="text-base text-cyber-dark-200 space-y-2">
                      <p className="flex items-start gap-2">
                        <span className="text-neon-cyan-500 mt-1">•</span>
                        <span>功能需求：个人电商独立站，具有上架、销售、客服等功能</span>
                      </p>
                      <p className="flex items-start gap-2">
                        <span className="text-neon-cyan-500 mt-1">•</span>
                        <span>模块布局：有首页、产品页联系我们三大板块</span>
                      </p>
                      <p className="flex items-start gap-2">
                        <span className="text-neon-cyan-500 mt-1">•</span>
                        <span>网站风格：主题为为简约高级风</span>
                      </p>
                      <p className="flex items-start gap-2">
                        <span className="text-neon-cyan-500 mt-1">•</span>
                        <span>开发环境：纯前端开发环境，使用HTML5、CSS3和原生JavaScript，可直接在浏览器运行并部署到任何静态网站托管服务。</span>
                      </p>
                      <h5 className="text-xl font-bold text-neon-cyan-400 mb-3">模型</h5>
                      
                      <p className="flex items-start gap-2">
                        <span className="text-neon-cyan-500 mt-1">•</span>
                        <span>https://chat.z.ai/</span>
                      </p>
                    </div>
                  </div>

                  {/* 右侧：提示词(高度缩小) */}
                  <div className="space-y-4">
                    <h5 className="text-xl font-bold text-neon-purple-400 mb-3">AI提示词</h5>
                    <div className="bg-cyber-dark-950/80 rounded-xl p-4 border border-neon-purple-500/30 font-mono text-sm text-cyber-dark-100 overflow-y-auto max-h-[450px]">
                      <pre className="whitespace-pre-wrap">
{`# Role: 网站前端开发专家

## Profile
- author: LangGPT
- version: 1.0
- language: 中文
- description: 你是一位网站前端开发专家，擅长设计和构建高质量网页。

## Skills
- 能够构建完整的电商网站页面结构，包括首页、产品页和联系我们页。
- 熟悉商品上架、销售展示、用户交互和简易客服模块的实现方式。
- 擅长使用简约高级风格设计网页，提升用户体验和品牌形象。

## Goals
- 创建一个具备基本电商功能的个人独立站前端项目。
- 包含首页、产品页、联系我们三大板块，每个页面具有简约高级的视觉设计。
- 支持商品上架展示、基础销售交互和留言形式的客服功能。

## Rules
1. 代码需结构清晰，便于维护和扩展。
2. 页面风格需统一，符合"简约高级"的美学标准。
3. 确保所有页面之间导航顺畅，用户体验良好。

## Workflows
为我生成一个个人电商独立站，包含以下功能和模块：
1. 功能要求：
    上架功能：允许产品上传并展示；
    销售功能：支持在线支付和订单管理；
    客服功能：集成聊天支持或留言系统。
2. 模块布局：
    首页：展示品牌、产品和促销信息；
    产品页：显示详细产品信息、图片、价格和购买链接；
    联系我们：提供联系方式、客服支持和社交媒体链接。
3. 网站风格：
    主题风格：简约且高级，注重细节和现代感；
    色调：使用优雅的配色方案，搭配简洁的布局。
4. 开发环境：
    使用HTML5、CSS3和原生JavaScript开发，无需依赖任何外部框架或库；
    网站应为静态网站，能够直接在浏览器运行；
    能够轻松部署到任何静态网站托管服务，如GitHub Pages、Netlify等。

【English Prompt】

# Role: Front-End Web Development Expert

## Profile
- author: LangGPT
- version: 1.0
- language: English
- description: You are an expert in front-end web development, specializing in creating fully static websites using HTML5, CSS3, and vanilla JavaScript.

## Skills
- Building static, browser-run websites without any backend dependencies
- Designing clean and elegant UI/UX with minimalist aesthetics
- Structuring multi-page websites (Home, Product, Contact)
- Implementing interactive features using pure JavaScript
- Deploying to any static hosting service

## Goals
- Build a personal e-commerce website with product listing, sales presentation, and a basic customer contact form.
- Include three main sections: Home, Product, and Contact Us.
- Ensure clean layout, smooth navigation, and a refined minimalist design.
- Ensure that all code runs directly in the browser and can be deployed as a static website.

## Rules
1. Use only HTML5, CSS3, and vanilla JavaScript.
2. Avoid using any frameworks, libraries, or server-side code.
3. Focus on aesthetic simplicity and modern design.
4. Ensure the code is clean, modular, and ready for deployment.

## Workflows
1. Create the overall site structure and navigation system.
2. Design and implement the Product page with item listings, prices, and purchase buttons.
3. Add a Contact Us page with a simple customer service form.
4. Style all components to match a minimalist and elegant theme.`}
                      </pre>
                    </div>
                  </div>
                </div>

                {/* 下部：效果图横向排列 */}
                <div>
                  <h5 className="text-xl font-bold text-cyber-pink-400 mb-4">最终效果</h5>
                  <div className="space-y-4">
                    {/* 第一行：2张图片 */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="relative rounded-xl overflow-hidden border-2 border-neon-pink-500/30 shadow-neon-pink cursor-pointer"
                        onClick={() => setViewingImage(`${process.env.PUBLIC_URL}/images/课程页面/图片效果/1.生成页面.jpeg`)}
                      >
                        <img
                          src={`${process.env.PUBLIC_URL}/images/课程页面/图片效果/1.生成页面.jpeg`}
                          alt="AI生成页面效果"
                          className="w-full h-auto hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="relative rounded-xl overflow-hidden border-2 border-neon-pink-500/30 shadow-neon-pink cursor-pointer"
                        onClick={() => setViewingImage(`${process.env.PUBLIC_URL}/images/课程页面/图片效果/2.主页.jpeg`)}
                      >
                        <img
                          src={`${process.env.PUBLIC_URL}/images/课程页面/图片效果/2.主页.jpeg`}
                          alt="网站主页"
                          className="w-full h-auto hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    </div>
                    {/* 第二行：3张图片 */}
                    <div className="grid grid-cols-3 gap-4">
                      <div className="relative rounded-xl overflow-hidden border-2 border-neon-pink-500/30 shadow-neon-pink cursor-pointer"
                        onClick={() => setViewingImage(`${process.env.PUBLIC_URL}/images/课程页面/图片效果/3.产品页.jpeg`)}
                      >
                        <img
                          src={`${process.env.PUBLIC_URL}/images/课程页面/图片效果/3.产品页.jpeg`}
                          alt="产品列表页"
                          className="w-full h-auto hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="relative rounded-xl overflow-hidden border-2 border-neon-pink-500/30 shadow-neon-pink cursor-pointer"
                        onClick={() => setViewingImage(`${process.env.PUBLIC_URL}/images/课程页面/图片效果/4.产品详情页.jpeg`)}
                      >
                        <img
                          src={`${process.env.PUBLIC_URL}/images/课程页面/图片效果/4.产品详情页.jpeg`}
                          alt="产品详情页"
                          className="w-full h-auto hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="relative rounded-xl overflow-hidden border-2 border-neon-pink-500/30 shadow-neon-pink cursor-pointer"
                        onClick={() => setViewingImage(`${process.env.PUBLIC_URL}/images/课程页面/图片效果/5.联系我们.jpeg`)}
                      >
                        <img
                          src={`${process.env.PUBLIC_URL}/images/课程页面/图片效果/5.联系我们.jpeg`}
                          alt="联系我们页"
                          className="w-full h-auto hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    </div>
                  </div>

                  {/* 演示视频 */}
                  <div className="mt-6">
                    <h5 className="text-xl font-bold text-neon-purple-400 mb-4">演示视频</h5>
                    <div className="relative overflow-hidden rounded-xl border-2 border-neon-purple-500/50 shadow-neon-purple">
                      <video
                        controls
                        className="w-full"
                        poster=""
                      >
                        <source src="https://ddcz-1315997005.cos.ap-nanjing.myqcloud.com/static/video/web_teach/web.mov" type="video/mp4" />
                        您的浏览器不支持视频播放。
                      </video>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* 第三阶段：垂直技能课 */}
      <section
        ref={(el) => registerSection(el, 4)}
        className="section-scroll-item py-16 px-4"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto"
        >
          {/* 标题 */}
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-6 gradient-text">
              第三阶段：垂直技能课
            </h2>
            <p className="text-3xl font-bold text-cyber-pink-400">
              从学习到实战
            </p>
            <p className="text-xl text-cyber-dark-200 mt-4">
              学习目标：实战驱动，构建岗位级AI工作流，提升职场竞争力
            </p>
          </motion.div>

          {/* 核心内容 */}
          <motion.div variants={fadeInUp} className="cyber-card p-8 rounded-2xl mb-8">
            <h3 className="text-3xl font-bold text-neon-purple-400 mb-6">核心内容</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-cyber-dark-900/50 rounded-xl">
                <Database className="text-neon-cyan-500 mb-4" size={48} />
                <h4 className="text-xl font-bold text-neon-cyan-400 mb-3">真实工作场景模拟</h4>
                <p className="text-base text-cyber-dark-200">各行业真实工作场景模拟</p>
              </div>
              <div className="p-6 bg-cyber-dark-900/50 rounded-xl">
                <Zap className="text-neon-purple-500 mb-4" size={48} />
                <h4 className="text-xl font-bold text-neon-purple-400 mb-3">AI实战项目</h4>
                <p className="text-base text-cyber-dark-200">岗位工作流设计与AI实战项目</p>
              </div>
              <div className="p-6 bg-cyber-dark-900/50 rounded-xl">
                <Settings className="text-cyber-pink-500 mb-4" size={48} />
                <h4 className="text-xl font-bold text-cyber-pink-400 mb-3">智能决策流程</h4>
                <p className="text-base text-cyber-dark-200">自动化与智能决策流程构建</p>
              </div>
            </div>
          </motion.div>

          {/* 学习成果 */}
          <motion.div variants={fadeInUp} className="cyber-card p-8 rounded-2xl mb-8">
            <h3 className="text-3xl font-bold text-neon-cyan-400 mb-6">学习成果</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 bg-neon-cyan-500/5 rounded-xl border border-neon-cyan-500/20">
                <Award className="text-neon-cyan-500 flex-shrink-0 mt-1" size={32} />
                <div>
                  <h4 className="text-xl font-bold text-neon-cyan-400 mb-2">实战应用能力</h4>
                  <p className="text-lg text-cyber-dark-200">掌握AI在职场的实战应用能力</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-neon-purple-500/5 rounded-xl border border-neon-purple-500/20">
                <Rocket className="text-neon-purple-500 flex-shrink-0 mt-1" size={32} />
                <div>
                  <h4 className="text-xl font-bold text-neon-purple-400 mb-2">AI替你工作</h4>
                  <p className="text-lg text-cyber-dark-200">从"懂AI"到"让AI替你工作"</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-cyber-pink-500/5 rounded-xl border border-cyber-pink-500/20">
                <TrendingUp className="text-cyber-pink-500 flex-shrink-0 mt-1" size={32} />
                <div>
                  <h4 className="text-xl font-bold text-cyber-pink-400 mb-2">高效能人才</h4>
                  <p className="text-lg text-cyber-dark-200">成为企业争抢的AI高效能人才</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 案例展示 */}
          <motion.div variants={fadeInUp} className="cyber-card p-8 rounded-2xl">
            <h3 className="text-3xl font-bold text-neon-purple-400 mb-6 flex items-center gap-3">
              <BarChart className="neon-glow-purple" size={36} />
              案例展示：活动策划案自动化生成
            </h3>

            {/* 需求部分 */}
            <div className="mb-8">
              <h4 className="text-2xl font-bold text-neon-cyan-400 mb-4">传统流程：</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-4 bg-cyber-dark-900/50 rounded-xl">
                  <div className="w-2 h-2 bg-neon-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-lg text-cyber-dark-200">人工查资料、写策划案、整理流程表、制作预算表；</p>
                </div>
                <div className="flex items-start gap-3 p-4 bg-cyber-dark-900/50 rounded-xl">
                  <div className="w-2 h-2 bg-neon-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-lg text-cyber-dark-200">多人协作反复修改、沟通成本高、版本混乱、耗时耗力。</p>
                </div>
                <h4 className="text-2xl font-bold text-neon-cyan-400 mb-4">AI赋能流程：</h4>
                <div className="flex items-start gap-3 p-4 bg-cyber-dark-900/50 rounded-xl">
                  <div className="w-2 h-2 bg-cyber-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-lg text-cyber-dark-200">自动收集活动主题相关资料与灵感；</p>
                </div>
                <div className="flex items-start gap-3 p-4 bg-cyber-dark-900/50 rounded-xl">
                  <div className="w-2 h-2 bg-neon-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-lg text-cyber-dark-200">智能生成活动策划案（含流程、创意、预算、宣传方案）；</p>
                </div>
                <div className="flex items-start gap-3 p-4 bg-cyber-dark-900/50 rounded-xl">
                  <div className="w-2 h-2 bg-neon-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-lg text-cyber-dark-200">批量导入飞书表格，形成标准化策划模板；</p>
                </div>
                <div className="flex items-start gap-3 p-4 bg-cyber-dark-900/50 rounded-xl">
                  <div className="w-2 h-2 bg-neon-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-lg text-cyber-dark-200">一键更新与团队共享，实时协同修改与输出。</p>
                </div>
              </div>
            </div>

            {/* 节点展示 */}
            <div>
              <h4 className="text-2xl font-bold text-neon-purple-400 mb-4">节点展示</h4>
              <div className="grid grid-cols-2 gap-6">
                <div className="relative rounded-2xl overflow-hidden border-2 border-neon-purple-500/30 shadow-neon-purple cursor-pointer"
                  onClick={() => setViewingImage(`${process.env.PUBLIC_URL}/images/课程页面/第三阶段/第三阶段ai赋能流程n8n图片1.png`)}
                >
                  <img
                    src={`${process.env.PUBLIC_URL}/images/课程页面/第三阶段/第三阶段ai赋能流程n8n图片1.png`}
                    alt="AI赋能流程N8N节点展示1"
                    className="w-full h-auto hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="relative rounded-2xl overflow-hidden border-2 border-neon-purple-500/30 shadow-neon-purple cursor-pointer"
                  onClick={() => setViewingImage(`${process.env.PUBLIC_URL}/images/课程页面/第三阶段/第三阶段ai赋能流程n8n图片2.png`)}
                >
                  <img
                    src={`${process.env.PUBLIC_URL}/images/课程页面/第三阶段/第三阶段ai赋能流程n8n图片2.png`}
                    alt="AI赋能流程N8N节点展示2"
                    className="w-full h-auto hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <p className="text-center text-sm text-cyber-dark-300 mt-4">
                AI赋能流程工作流节点展示 - N8N自动化流程配置
              </p>

              {/* 演示视频 */}
              <div className="mt-8">
                <h4 className="text-2xl font-bold text-neon-purple-400 mb-4">演示视频</h4>
                <div className="relative overflow-hidden rounded-xl border-2 border-neon-purple-500/50 shadow-neon-purple">
                  <video
                    controls
                    className="w-full"
                    poster=""
                  >
                    <source src="https://ddcz-1315997005.cos.ap-nanjing.myqcloud.com/static/video/web_teach/n8n.mov" type="video/mp4" />
                    您的浏览器不支持视频播放。
                  </video>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* 图片查看器 */}
      <AnimatePresence>
        {viewingImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/95"
            onClick={() => setViewingImage(null)}
          >
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={viewingImage}
              alt="查看图片"
              className="max-w-[85vw] max-h-[85vh] object-contain cursor-pointer"
              onClick={() => setViewingImage(null)}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CoursePage;
