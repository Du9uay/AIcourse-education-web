import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Robot,
  Brain,
  TrendingUp,
  Users,
  Rocket,
  Shield,
  Settings,
  Award,
  Eye,
  Package,
  MessageSquare,
  Database,
  Globe,
  Lightbulb,
  Monitor,
  Hash,
  Tool,
  CheckCircle,
  ArrowRight,
  Warning,
  Zap
} from '../components/Icons';

const HomePage: React.FC = () => {
  // 图片查看器状态
  const [viewingImage, setViewingImage] = useState<string | null>(null);

  // 动画变体
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen pb-20">
      {/* 1. 英雄区 Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="text-center z-10 px-4 max-w-6xl mx-auto"
        >
          {/* 浮动图标 */}
          <div className="flex justify-center gap-12 mb-12">
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Robot className="text-cyber-pink-500 neon-glow-pink" size={80} />
            </motion.div>
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
            >
              <Brain className="text-neon-purple-500 neon-glow-purple" size={80} />
            </motion.div>
          </div>

          {/* 主标题 */}
          <motion.h1
            variants={fadeInUp}
            className="text-6xl md:text-7xl lg:text-8xl font-black mb-6 glitch-text"
            data-text="为什么大专生一定要学习AI？"
          >
            为什么大专生一定要学习AI？
          </motion.h1>

          {/* 副标题 */}
          <motion.p
            variants={fadeInUp}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 neon-text-cyan"
          >
            下一个吃到AI红利的人——可能就是你！
          </motion.p>

          {/* CTA按钮 */}
          
        </motion.div>

        {/* 向下滚动提示 */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <ArrowRight className="text-neon-cyan-400 rotate-90" size={40} />
        </motion.div>
      </section>

      {/* 2. 痛点区块 - 为什么就业难 */}
      <section className="py-20 px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto"
        >
          {/* 标题 */}
          <motion.h2
            variants={fadeInUp}
            className="text-5xl md:text-6xl font-black mb-16 text-center gradient-text"
          >
            一、为什么你觉得就业越来越难？
          </motion.h2>

          {/* 图片展示区 */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* 图片1：传统岗位困境 */}
            <motion.div variants={fadeInUp} className="space-y-6">
              <div className="cyber-card p-6 rounded-2xl bg-red-500/5 border-red-500/30">
                <div className="flex items-center gap-4 mb-4">
                  <Warning className="text-red-500 flex-shrink-0" size={36} />
                  <h3 className="text-2xl font-bold text-red-400">传统岗位困境</h3>
                </div>
                <div className="relative overflow-hidden rounded-xl border-2 border-red-500/30 shadow-neon-pink h-96 bg-white">
                  <img
                    src="/images/一、为什么你觉得就业越来越难？/一、为什么你觉得就业越来越难？_传统的招聘岗位越来越少，并且越来越卷，薪资越来越低.png"
                    alt="传统的招聘岗位越来越少，并且越来越卷，薪资越来越低"
                    className="w-full h-full object-contain hover:scale-105 transition-transform duration-500 cursor-pointer"
                    onClick={() => setViewingImage("/images/一、为什么你觉得就业越来越难？/一、为什么你觉得就业越来越难？_传统的招聘岗位越来越少，并且越来越卷，薪资越来越低.png")}
                  />
                </div>
                <p className="text-lg text-cyber-dark-200 mt-4 text-center">
                  传统的招聘岗位越来越少，并且越来越卷，薪资越来越低
                </p>
              </div>
            </motion.div>

            {/* 图片2：AI岗位机遇 */}
            <motion.div variants={fadeInUp} className="space-y-6">
              <div className="cyber-card p-6 rounded-2xl bg-neon-cyan-500/5 border-neon-cyan-500/30">
                <div className="flex items-center gap-4 mb-4">
                  <TrendingUp className="text-neon-cyan-400 neon-glow-cyan flex-shrink-0" size={36} />
                  <h3 className="text-2xl font-bold text-neon-cyan-400">AI岗位机遇</h3>
                </div>
                <div className="relative overflow-hidden rounded-xl border-2 border-neon-cyan-500/30 shadow-neon-cyan h-96 bg-white">
                  <img
                    src='/images/一、为什么你觉得就业越来越难？/AI关键词的招聘信息增长.jpeg'
                    alt="AI关键词的招聘信息增长11%"
                    className="w-full h-full object-contain hover:scale-105 transition-transform duration-500 cursor-pointer"
                    onClick={() => setViewingImage('/images/一、为什么你觉得就业越来越难？/AI关键词的招聘信息增长.jpeg')}
                  />
                </div>
                <p className="text-lg text-cyber-dark-200 mt-4 text-center">
                  数据显示：过去一年里，含有"AI"关键词的招聘信息增长11%
                </p>
              </div>
            </motion.div>
          </div>

          {/* 结论 */}
          <motion.div
            variants={fadeInUp}
            className="mt-16 text-center px-4"
          >
            <div className="cyber-card p-10 rounded-2xl max-w-5xl mx-auto">
              <p className="text-4xl md:text-5xl font-black gradient-text leading-tight">
                不是岗位变少了，而是你不会用AI
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* 3. 数据冲击区 - AI岗位薪资对比 */}
      <section className="py-20 px-4 relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto"
        >
          {/* 标题 */}
          <motion.h2
            variants={fadeInUp}
            className="text-5xl md:text-6xl font-black mb-8 text-center neon-text-pink"
          >
            二、时代背景：和AI相关的岗位为什么薪资都那么高？
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-2xl text-center text-cyber-dark-200 mb-16"
          >
            会用AI的人，正在淘汰不会AI的人
          </motion.p>

          {/* 三个数据卡片 - 垂直排列 */}
          <div className="space-y-8">
            {/* 卡片1：薪资提升 */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ x: 10 }}
              className="cyber-card p-8 rounded-2xl bg-neon-yellow-500/5 border-neon-yellow-500/30"
            >
              <div className="flex items-start gap-6 mb-6">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-full bg-neon-yellow-500/20 flex items-center justify-center border-2 border-neon-yellow-500">
                    <TrendingUp className="text-neon-yellow-400 neon-glow-cyan !w-12 !h-12" size={48} />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="text-6xl font-black text-neon-yellow-500 neon-text-cyan mb-4">
                    +30~50%
                  </div>
                  <h3 className="text-3xl font-bold text-neon-yellow-400 mb-4">薪资提升</h3>
                  <p className="text-xl text-cyber-dark-200 leading-relaxed">
                    从招聘网站的招聘信息来看，带有AI的招聘岗位，薪资要比普通岗位多出30%~50%
                  </p>
                </div>
              </div>
              {/* 薪资提升图片 */}
              <div className="grid md:grid-cols-3 gap-4 mt-6">
                <div className="space-y-3">
                  <div className="relative overflow-hidden rounded-lg border border-neon-yellow-500/30 bg-white h-56">
                    <img
                      src="/images/二、和AI相关的岗位薪资那么高？/薪资提升-1.png"
                      alt="AI岗位薪资对比数据"
                      className="w-full h-full object-contain hover:scale-105 transition-transform duration-500 cursor-pointer"
                      onClick={() => setViewingImage("/images/二、和AI相关的岗位薪资那么高？/薪资提升-1.png")}
                    />
                  </div>
                  <p className="text-sm text-cyber-dark-200 text-center">AI编程全栈工程师</p>
                </div>
                <div className="space-y-3">
                  <div className="relative overflow-hidden rounded-lg border border-neon-yellow-500/30 bg-white h-56">
                    <img
                      src="/images/二、和AI相关的岗位薪资那么高？/薪资提升-2.png"
                      alt="AI技能带来的薪资增长"
                      className="w-full h-full object-contain hover:scale-105 transition-transform duration-500 cursor-pointer"
                      onClick={() => setViewingImage("/images/二、和AI相关的岗位薪资那么高？/薪资提升-2.png")}
                    />
                  </div>
                  <p className="text-sm text-cyber-dark-200 text-center">AI漫画师</p>
                </div>
                <div className="space-y-3">
                  <div className="relative overflow-hidden rounded-lg border border-neon-yellow-500/30 bg-white h-56">
                    <img
                      src="/images/二、和AI相关的岗位薪资那么高？/薪资提升-3.png"
                      alt="企业对AI人才的薪资投入"
                      className="w-full h-full object-contain hover:scale-105 transition-transform duration-500 cursor-pointer"
                      onClick={() => setViewingImage("/images/二、和AI相关的岗位薪资那么高？/薪资提升-3.png")}
                    />
                  </div>
                  <p className="text-sm text-cyber-dark-200 text-center">AI策略产品经理</p>
                </div>
              </div>
            </motion.div>

            {/* 卡片2：效率倍增 */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ x: 10 }}
              className="cyber-card p-8 rounded-2xl bg-neon-purple-500/5 border-neon-purple-500/30"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-full bg-neon-purple-500/20 flex items-center justify-center border-2 border-neon-purple-500">
                    <Users className="text-neon-purple-400 neon-glow-purple !w-12 !h-12" size={48} />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="text-6xl font-black text-neon-purple-500 neon-text-purple mb-4">
                    1=3
                  </div>
                  <h3 className="text-3xl font-bold text-neon-purple-400 mb-4">效率倍增</h3>
                  <p className="text-xl text-cyber-dark-200 leading-relaxed">
                    企业不需要埋头苦干的人，需要的是会使用AI的新型人才；<br />一个人顶三个人，薪资自然也要×3
                  </p>
                </div>
              </div>
            </motion.div>

            {/* 卡片3：严峻现实 */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ x: 10 }}
              className="cyber-card p-8 rounded-2xl bg-red-500/5 border-red-500/30"
            >
              <div className="flex items-start gap-6 mb-6">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-full bg-red-500/20 flex items-center justify-center border-2 border-red-500">
                    <Warning className="text-red-400 neon-glow-pink !w-12 !h-12" size={48} />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="text-5xl font-black text-red-500 neon-text-pink mb-4">
                    找不到工作
                  </div>
                  <h3 className="text-3xl font-bold text-red-400 mb-4">严峻现实</h3>
                  <p className="text-xl text-cyber-dark-200 leading-relaxed">
                    不会用AI的，社会上的人将逐渐面临裁员，而还在学校的学生面临的就是找不到工作
                  </p>
                </div>
              </div>
              {/* 严峻现实图片 */}
              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <div className="space-y-3">
                  <div className="relative overflow-hidden rounded-lg border border-red-500/30 bg-white h-64">
                    <img
                      src="/images/二、和AI相关的岗位薪资那么高？/严峻现实.png"
                      alt="不会AI面临的就业困境"
                      className="w-full h-full object-contain hover:scale-105 transition-transform duration-500 cursor-pointer"
                      onClick={() => setViewingImage("/images/二、和AI相关的岗位薪资那么高？/严峻现实.png")}
                    />
                  </div>
                  <p className="text-sm text-cyber-dark-200 text-center">被辞职的人</p>
                </div>
                <div className="space-y-3">
                  <div className="relative overflow-hidden rounded-lg border border-red-500/30 bg-white h-64">
                    <img
                      src="/images/二、和AI相关的岗位薪资那么高？/严峻现实2.png"
                      alt="传统岗位被AI替代的趋势"
                      className="w-full h-full object-contain hover:scale-105 transition-transform duration-500 cursor-pointer"
                      onClick={() => setViewingImage("/images/二、和AI相关的岗位薪资那么高？/严峻现实2.png")}
                    />
                  </div>
                  <p className="text-sm text-cyber-dark-200 text-center">垃圾桶内的毕业生简历</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* 总结提示 */}
          <motion.div
            variants={fadeInUp}
            className="mt-8 cyber-card p-8 rounded-2xl bg-gradient-to-r from-cyber-pink-500/10 to-neon-purple-500/10 border-cyber-pink-500/30"
          >
            <div className="flex items-center gap-6">
              <Rocket className="text-cyber-pink-500 flex-shrink-0" size={60} />
              <p className="text-2xl text-cyber-dark-100">
                AI取代了一些混吃等死的岗位，学习AI将成为<span className="font-black text-cyber-pink-400 text-3xl">生存必修课，也是成为"高薪酬人才"的最短路径。</span>
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* 4. 企业需求区 - 三段式论证 */}
      <section className="py-20 px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto"
        >
          {/* 标题 */}
          <motion.h2
            variants={fadeInUp}
            className="text-5xl md:text-6xl font-black mb-8 text-center gradient-text-reverse"
          >
            三、为什么企业疯狂招"懂AI"的人？
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-2xl text-center text-cyber-dark-200 mb-16"
          >
            企业需要AI的原因
          </motion.p>

          {/* 三个阶段卡片 */}
          <div className="space-y-8">
            {/* 阶段1：现状 */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ x: 10 }}
              className="cyber-card p-8 rounded-2xl bg-neon-blue-500/5 border-neon-blue-500/30"
            >
              <div className="flex items-start gap-6 mb-6">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-full bg-neon-blue-500/20 flex items-center justify-center border-2 border-neon-blue-500">
                    <Shield className="text-neon-blue-400 neon-glow-blue !w-12 !h-12" size={48} />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-neon-blue-400 mb-4">
                    1. 现在是勒紧裤腰带过日子的时代
                  </h3>
                  <p className="text-xl text-cyber-dark-200 leading-relaxed">
                    大环境的不确定，让企业普遍进入<span className="font-bold text-neon-cyan-400 neon-text-cyan">"降本增效"</span>的生存模式。
                    市场竞争激烈、资金回笼困难、成本持续上升——几乎所有企业都在想方设法减少支出，精简团队，用最少的人力完成最多的工作。
                  </p>
                </div>
              </div>
              {/* 配图 */}
              <div className="mt-6 flex flex-col items-center">
                <div className="w-full max-w-md">
                  <div className="relative overflow-hidden rounded-lg border border-neon-blue-500/30 bg-white h-64">
                    <img
                      src="/images/三、企业需要AI的原因/三、企业需要AI的原因_勒紧裤腰带.png"
                      alt="勒紧裤腰带过日子的时代"
                      className="w-full h-full object-contain hover:scale-105 transition-transform duration-500 cursor-pointer"
                      onClick={() => setViewingImage("/images/三、企业需要AI的原因/三、企业需要AI的原因_勒紧裤腰带.png")}
                    />
                  </div>
                  <p className="text-sm text-cyber-dark-200 text-center mt-3">勒紧裤腰带过日子的时代</p>
                </div>
              </div>
            </motion.div>

            {/* 阶段2：举措 */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ x: 10 }}
              className="cyber-card p-8 rounded-2xl bg-neon-purple-500/5 border-neon-purple-500/30"
            >
              <div className="flex items-start gap-6 mb-6">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-full bg-neon-purple-500/20 flex items-center justify-center border-2 border-neon-purple-500">
                    <Settings className="text-neon-purple-400 neon-glow-purple !w-12 !h-12" size={48} />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-neon-purple-400 mb-4">
                    2. 企业举措：要省人，也要更快
                  </h3>
                  <p className="text-xl text-cyber-dark-200 mb-6">
                    AI技术的普及，正好满足了这两大痛点：
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-6 bg-cyber-dark-900/50 rounded-xl border border-neon-purple-500/20">
                      <h4 className="text-2xl font-bold text-neon-purple-300 mb-3">节省人力成本</h4>
                      <p className="text-lg text-cyber-dark-300">
                        自动化办公、智能客服、内容生成、数据分析……AI能替代大量重复性劳动，让有限的人力做更有价值的工作。
                      </p>
                      <div className="space-y-3">
                        <div className="relative overflow-hidden rounded-lg border border-neon-purple-500/30 bg-white h-64">
                          <img
                            src="/images/三、企业需要AI的原因/三、企业需要AI的原因_节省人力成本.png"
                            alt="节省人力成本"
                            className="w-full h-full object-contain hover:scale-105 transition-transform duration-500 cursor-pointer"
                            onClick={() => setViewingImage("/images/三、企业需要AI的原因/三、企业需要AI的原因_节省人力成本.png")}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="p-6 bg-cyber-dark-900/50 rounded-xl border border-neon-cyan-500/20">
                      <h4 className="text-2xl font-bold text-neon-cyan-300 mb-3">提升工作效率</h4>
                      <p className="text-lg text-cyber-dark-300">
                        一个懂AI的员工，相当于"一个人+一台超强助理"，无论是报告撰写、方案生成，还是创意设计，都能以数倍速完成。
                      </p>
                      <div className="space-y-3">
                        <div className="relative overflow-hidden rounded-lg border border-neon-cyan-500/30 bg-white h-64">
                          <img
                            src="/images/三、企业需要AI的原因/三、企业需要AI的原因_提升工作效率.png"
                            alt="提升工作效率"
                            className="w-full h-full object-contain hover:scale-105 transition-transform duration-500 cursor-pointer"
                            onClick={() => setViewingImage("/images/三、企业需要AI的原因/三、企业需要AI的原因_提升工作效率.png")}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* 配图 */}
              
            </motion.div>

            {/* 阶段3：结果 */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ x: 10 }}
              className="cyber-card p-8 rounded-2xl bg-cyber-pink-500/5 border-cyber-pink-500/30"
            >
              <div className="flex items-start gap-6 mb-6">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-full bg-cyber-pink-500/20 flex items-center justify-center border-2 border-cyber-pink-500">
                    <Award className="text-cyber-pink-400 neon-glow-pink !w-12 !h-12" size={48} />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-cyber-pink-400 mb-4">
                    3. 结果显现：AI人才成<span className="gradient-text">"稀缺物种"</span>
                  </h3>
                  <p className="text-xl text-cyber-dark-200 leading-relaxed">
                    AI正在重塑企业的竞争力，会用AI的人成了职场"香饽饽"。招聘市场疯狂加码，"懂AI"几乎成了高薪的通行证。
                  </p>
                </div>
              </div>
              {/* 配图 */}
              <div className="mt-6 flex flex-col items-center">
                <div className="w-full max-w-md">
                  <div className="relative overflow-hidden rounded-lg border border-cyber-pink-500/30 bg-white h-64">
                    <img
                      src="/images/三、企业需要AI的原因/三、企业需要AI的原因_AI人才成稀缺物种.png"
                      alt="AI人才成稀缺物种"
                      className="w-full h-full object-contain hover:scale-105 transition-transform duration-500 cursor-pointer"
                      onClick={() => setViewingImage("/images/三、企业需要AI的原因/三、企业需要AI的原因_AI人才成稀缺物种.png")}
                    />
                  </div>
                  <p className="text-sm text-cyber-dark-200 text-center mt-3">AI人才成稀缺物种</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* 总结 */}
          <motion.div
            variants={fadeInUp}
            className="mt-16 text-center cyber-card p-8 rounded-2xl"
          >
            <p className="text-3xl md:text-4xl font-black gradient-text">
              在新的竞争格局中，会用AI的人，正在重塑企业的效率曲线，也决定着企业未来的高度。
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* 5. 行业渗透区 - 案例展示 */}
      <section className="py-20 px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto"
        >
          {/* 标题 */}
          <motion.h2
            variants={fadeInUp}
            className="text-5xl md:text-6xl font-black mb-8 text-center neon-text-cyan"
          >
            四、AI在悄无声息的改变这个世界
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-2xl text-center text-cyber-dark-200 mb-16"
          >
            AI正在渗透所有行业
          </motion.p>

          {/* 日常生活案例 */}
          <motion.div variants={fadeInUp} className="mb-16">
            <h3 className="text-3xl font-bold text-neon-purple-400 mb-8 text-center">
              日常生活中：你以为和你无关，但其实它就在你身边
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="cyber-card p-6 rounded-xl text-center">
                <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <Eye className="text-cyber-pink-500 neon-glow-pink !w-16 !h-16" size={60} />
                </div>
                <h4 className="text-xl font-bold text-cyber-dark-100 mb-2">抖音擦边视频</h4>
                <p className="text-lg text-cyber-dark-300 mb-4">AI虚拟数字人</p>
                <div className="relative overflow-hidden rounded-lg border border-cyber-pink-500/30 bg-white h-48">
                  <img
                    src="/images/四、AI正在渗透所有行业/四、日常生活_数字人.png"
                    alt="AI虚拟数字人"
                    className="w-full h-full object-contain hover:scale-105 transition-transform duration-500 cursor-pointer"
                    onClick={() => setViewingImage("/images/四、AI正在渗透所有行业/四、日常生活_数字人.png")}
                  />
                </div>
              </div>
              <div className="cyber-card p-6 rounded-xl text-center">
                <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <Package className="text-neon-cyan-500 neon-glow-cyan !w-16 !h-16" size={60} />
                </div>
                <h4 className="text-xl font-bold text-cyber-dark-100 mb-2">电商平台宣传图</h4>
                <p className="text-lg text-cyber-dark-300 mb-4">AI绘画</p>
                <div className="relative overflow-hidden rounded-lg border border-neon-cyan-500/30 bg-white h-48">
                  <img
                    src="/images/四、AI正在渗透所有行业/四、日常生活_AI绘图.png"
                    alt="AI绘画"
                    className="w-full h-full object-contain hover:scale-105 transition-transform duration-500 cursor-pointer"
                    onClick={() => setViewingImage("/images/四、AI正在渗透所有行业/四、日常生活_AI绘图.png")}
                  />
                </div>
              </div>
              <div className="cyber-card p-6 rounded-xl text-center">
                <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <MessageSquare className="text-neon-purple-500 neon-glow-purple !w-16 !h-16" size={60} />
                </div>
                <h4 className="text-xl font-bold text-cyber-dark-100 mb-2">贴吧互喷对线</h4>
                <p className="text-lg text-cyber-dark-300 mb-4">AI客服</p>
                <div className="relative overflow-hidden rounded-lg border border-neon-purple-500/30 bg-white h-48">
                  <img
                    src="/images/四、AI正在渗透所有行业/四、日常生活_AI客服.png"
                    alt="AI客服"
                    className="w-full h-full object-contain hover:scale-105 transition-transform duration-500 cursor-pointer"
                    onClick={() => setViewingImage("/images/四、AI正在渗透所有行业/四、日常生活_AI客服.png")}
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* 各行各业职位 */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-3xl font-bold text-neon-cyan-400 mb-8 text-center">
              各行各业里：AI，让每个行业都重新洗牌
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* 工业领域 */}
              <motion.div
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="glass-effect glass-effect-hover p-8 rounded-2xl"
              >
                <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <Database className="text-neon-blue-500 neon-glow-blue !w-16 !h-16" size={60} />
                </div>
                <h4 className="text-2xl font-bold text-neon-blue-400 mb-4">工业领域</h4>
                <div className="relative overflow-hidden rounded-lg border border-neon-blue-500/30 bg-white h-64">
                  <img
                    src="/images/四、AI正在渗透所有行业/四、AI正在渗透所有行业_各行各业_软件中AI分析界面.png"
                    alt="数据监测大屏AI分析界面"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 cursor-pointer"
                    onClick={() => setViewingImage("/images/四、AI正在渗透所有行业/四、AI正在渗透所有行业_各行各业_软件中AI分析界面.png")}
                  />
                </div>
                <p className="text-sm text-cyber-dark-300 text-center mt-3 mb-4">数据监测大屏AI分析界面</p>
                <p className="text-xl text-cyber-dark-200 mb-3">设备工程师（AI检测）</p>
                <div className="text-5xl font-black text-neon-yellow-500 neon-text-cyan">
                  8K~15K
                </div>
              </motion.div>

              {/* 电商领域 */}
              <motion.div
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="glass-effect glass-effect-hover p-8 rounded-2xl"
              >
                <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <Globe className="text-cyber-pink-500 neon-glow-pink !w-16 !h-16" size={60} />
                </div>
                <h4 className="text-2xl font-bold text-cyber-pink-400 mb-4">电商领域</h4>
                <div className="relative overflow-hidden rounded-lg border border-cyber-pink-500/30 bg-white h-64">
                  <img
                    src="/images/四、AI正在渗透所有行业/四、AI正在渗透所有行业_各行各业_N8N工作流节点.png"
                    alt="N8N中AI自动化运营节点"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 cursor-pointer"
                    onClick={() => setViewingImage("/images/四、AI正在渗透所有行业/四、AI正在渗透所有行业_各行各业_N8N工作流节点.png")}
                  />
                </div>
                <p className="text-sm text-cyber-dark-300 text-center mt-3 mb-4">N8N中AI自动化运营节点</p>
                <p className="text-xl text-cyber-dark-200 mb-3">AI电商运营专员</p>
                <div className="text-5xl font-black text-neon-yellow-500 neon-text-cyan">
                  12K~25K
                </div>
              </motion.div>

              {/* 设计领域 */}
              <motion.div
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="glass-effect glass-effect-hover p-8 rounded-2xl"
              >
                <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <Lightbulb className="text-neon-purple-500 neon-glow-purple !w-16 !h-16" size={60} />
                </div>
                <h4 className="text-2xl font-bold text-neon-purple-400 mb-4">设计领域</h4>
                <div className="relative overflow-hidden rounded-lg border border-neon-purple-500/30 bg-white h-64">
                  <img
                    src="/images/四、AI正在渗透所有行业/四、AI正在渗透所有行业_各行各业_AI生成图片的界面.png"
                    alt="comfyUI软件AI生成图片的界面"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 cursor-pointer"
                    onClick={() => setViewingImage("/images/四、AI正在渗透所有行业/四、AI正在渗透所有行业_各行各业_AI生成图片的界面.png")}
                  />
                </div>
                <p className="text-sm text-cyber-dark-300 text-center mt-3 mb-4">comfyUI软件AI生成图片的界面</p>
                <p className="text-xl text-cyber-dark-200 mb-3">AI平面设计师</p>
                <div className="text-5xl font-black text-neon-yellow-500 neon-text-cyan">
                  10K起
                </div>
              </motion.div>

              {/* 媒体领域 */}
              <motion.div
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="glass-effect glass-effect-hover p-8 rounded-2xl"
              >
                <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <Monitor className="text-neon-cyan-500 neon-glow-cyan !w-16 !h-16" size={60} />
                </div>
                <h4 className="text-2xl font-bold text-neon-cyan-400 mb-4">媒体领域</h4>
                <div className="relative overflow-hidden rounded-lg border border-neon-cyan-500/30 bg-white h-64">
                  <img
                    src="/images/四、AI正在渗透所有行业/四、AI正在渗透所有行业_各行各业_达芬奇视频剪辑界面.png"
                    alt="达芬奇软件中AI自动剪辑界面"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 cursor-pointer"
                    onClick={() => setViewingImage("/images/四、AI正在渗透所有行业/四、AI正在渗透所有行业_各行各业_达芬奇视频剪辑界面.png")}
                  />
                </div>
                <p className="text-sm text-cyber-dark-300 text-center mt-3 mb-4">达芬奇软件中AI自动剪辑界面</p>
                <p className="text-xl text-cyber-dark-200 mb-3">AI音视频剪辑师</p>
                <div className="text-5xl font-black text-neon-yellow-500 neon-text-cyan">
                  8K~18K
                </div>
              </motion.div>

              {/* 计算机领域 */}
              <motion.div
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="glass-effect glass-effect-hover p-8 rounded-2xl"
              >
                <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <Zap className="text-neon-yellow-500 neon-glow-cyan !w-16 !h-16" size={60} />
                </div>
                <h4 className="text-2xl font-bold text-neon-yellow-400 mb-4">计算机领域</h4>
                <div className="relative overflow-hidden rounded-lg border border-neon-yellow-500/30 bg-white h-64">
                  <img
                    src="/images/四、AI正在渗透所有行业/四、AI正在渗透所有行业_各行各业_Claude编程界面.png"
                    alt="Claude软件AI编程界面"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 cursor-pointer"
                    onClick={() => setViewingImage("/images/四、AI正在渗透所有行业/四、AI正在渗透所有行业_各行各业_Claude编程界面.png")}
                  />
                </div>
                <p className="text-sm text-cyber-dark-300 text-center mt-3 mb-4">Claude软件AI编程界面</p>
                <p className="text-xl text-cyber-dark-200 mb-3">AI前端开发工程师</p>
                <div className="text-5xl font-black text-neon-yellow-500 neon-text-cyan">
                  15K起步
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* 总结 */}
          <motion.div
            variants={fadeInUp}
            className="mt-16 text-center cyber-card p-8 rounded-2xl"
          >
            <p className="text-3xl md:text-4xl font-black gradient-text">
              AI任何人都可以学，但只要你现在开始学AI，你就能从'被替代'的人，变成'掌握未来'的人
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* 6. 痛点突破区 - 双重质疑 */}
      <section className="py-20 px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto"
        >
          {/* 标题 */}
          <motion.h2
            variants={fadeInUp}
            className="text-5xl md:text-6xl font-black mb-16 text-center gradient-text-reverse"
          >
            五、大专生学会用AI的最大问题
          </motion.h2>

          <div className="space-y-12">
            {/* 上方：认知全面性 */}
            <motion.div
              variants={fadeInUp}
              className="cyber-card p-8 rounded-2xl bg-neon-purple-500/5 border-neon-purple-500/30"
            >
              <h3 className="text-4xl font-black text-neon-purple-400 mb-6">
                （一）你对AI的了解全面吗？
              </h3>
              <p className="text-2xl text-neon-purple-300 mb-8">你所了解的AI，只是冰山一角</p>

              <div className="space-y-6">
                {/* 认知误区 */}
                <div className="p-6 bg-cyber-dark-900/50 rounded-xl">
                  <div className="flex items-center gap-4 mb-4">
                    <Hash className="text-cyber-pink-500" size={40} />
                    <h4 className="text-2xl font-bold text-cyber-pink-400">1. 认知误区：停留在表面</h4>
                  </div>
                  <p className="text-lg text-cyber-dark-200">
                    很多人对AI的理解，还停留在 ChatGPT、DeepSeek、豆包 等常见工具。
                    这只是AI世界的"入门门票"，真正的AI生态远比想象中更庞大。
                  </p>
                </div>

                {/* AI工具分类 */}
                <div className="p-6 bg-cyber-dark-900/50 rounded-xl">
                  <div className="flex items-center gap-4 mb-4">
                    <Tool className="text-neon-cyan-500 neon-glow-cyan" size={40} />
                    <h4 className="text-2xl font-bold text-neon-cyan-400">2. 多元应用：不同岗位，不同AI</h4>
                  </div>
                  <div className="space-y-3">
                    <div className="p-3 bg-cyber-dark-800/50 rounded-lg space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-bold text-cyber-dark-100">写作 / 问答类</span>
                        <span className="text-sm text-cyber-dark-300">Deep Seek、豆包、ChatGPT</span>
                      </div>
                      <div className="relative overflow-hidden rounded-lg border border-neon-cyan-500/30 bg-white">
                        <img
                          src="/images/五、大专生学会用AI的最大问题/五、大专生学会用AI的最大问题_写作问答类AI工具logo.jpg"
                          alt="写作问答类AI工具"
                          className="w-full h-auto object-contain hover:scale-105 transition-transform duration-500 cursor-pointer"
                          onClick={() => setViewingImage("/images/五、大专生学会用AI的最大问题/五、大专生学会用AI的最大问题_写作问答类AI工具logo.jpg")}
                        />
                      </div>
                    </div>
                    <div className="p-3 bg-cyber-dark-800/50 rounded-lg space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-bold text-cyber-dark-100">图像创作类</span>
                        <span className="text-sm text-cyber-dark-300">Midjourney、Stable Diffusion</span>
                      </div>
                      <div className="relative overflow-hidden rounded-lg border border-neon-cyan-500/30 bg-white">
                        <img
                          src="/images/五、大专生学会用AI的最大问题/五、大专生学会用AI的最大问题_图像创作类AI工具logo.jpg"
                          alt="图像创作类AI工具"
                          className="w-full h-auto object-contain hover:scale-105 transition-transform duration-500 cursor-pointer"
                          onClick={() => setViewingImage("/images/五、大专生学会用AI的最大问题/五、大专生学会用AI的最大问题_图像创作类AI工具logo.jpg")}
                        />
                      </div>
                    </div>
                    <div className="p-3 bg-cyber-dark-800/50 rounded-lg space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-bold text-cyber-dark-100">视频生成类</span>
                        <span className="text-sm text-cyber-dark-300">Sora、Runway、Pika、Veo</span>
                      </div>
                      <div className="relative overflow-hidden rounded-lg border border-neon-cyan-500/30 bg-white">
                        <img
                          src="/images/五、大专生学会用AI的最大问题/五、大专生学会用AI的最大问题_视频生成类AI工具logo.jpg"
                          alt="视频生成类AI工具"
                          className="w-full h-auto object-contain hover:scale-105 transition-transform duration-500 cursor-pointer"
                          onClick={() => setViewingImage("/images/五、大专生学会用AI的最大问题/五、大专生学会用AI的最大问题_视频生成类AI工具logo.jpg")}
                        />
                      </div>
                    </div>
                    <div className="p-3 bg-cyber-dark-800/50 rounded-lg space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-bold text-cyber-dark-100">编程开发类</span>
                        <span className="text-sm text-cyber-dark-300">Cursor、Copilot、Claude</span>
                      </div>
                      <div className="relative overflow-hidden rounded-lg border border-neon-cyan-500/30 bg-white">
                        <img
                          src="/images/五、大专生学会用AI的最大问题/五、大专生学会用AI的最大问题_编程开发类AI工具logo.jpg"
                          alt="编程开发类AI工具"
                          className="w-full h-auto object-contain hover:scale-105 transition-transform duration-500 cursor-pointer"
                          onClick={() => setViewingImage("/images/五、大专生学会用AI的最大问题/五、大专生学会用AI的最大问题_编程开发类AI工具logo.jpg")}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* 应用策略 */}
                <div className="p-6 bg-cyber-dark-900/50 rounded-xl">
                  <div className="flex items-center gap-4 mb-4">
                    <CheckCircle className="text-neon-yellow-500" size={40} />
                    <h4 className="text-2xl font-bold text-neon-yellow-400">3. 应用策略：不是全学，而是会用</h4>
                  </div>
                  <p className="text-lg text-cyber-dark-200">
                    关键不是掌握多少工具，而是知道哪一个最适合自己、怎么用、用到极致。
                    会选、会用、能整合，才是真正的AI应用能力。
                  </p>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-neon-purple-500/20 to-cyber-pink-500/20 rounded-xl border border-neon-purple-500/50">
                <p className="text-xl font-bold text-center gradient-text">
                  掌握AI的人，不只是更高效，而是具备了这个时代最稀缺的竞争力
                </p>
              </div>
            </motion.div>

            {/* 下方：使用方法 */}
            <motion.div
              variants={fadeInUp}
              className="cyber-card p-8 rounded-2xl bg-cyber-pink-500/5 border-cyber-pink-500/30"
            >
              <h3 className="text-4xl font-black text-cyber-pink-400 mb-6">
                （二）你真的会"用"AI吗？
              </h3>
              <p className="text-2xl text-cyber-pink-300 mb-8">用AI的人很多，真正会用的却很少</p>

              <div className="space-y-6">
                {/* 表面现象 */}
                <div className="p-6 bg-cyber-dark-900/50 rounded-xl">
                  <div className="flex items-center gap-4 mb-4">
                    <Lightbulb className="text-neon-yellow-500" size={40} />
                    <h4 className="text-2xl font-bold text-neon-yellow-400">1. 表面现象：AI在"被玩"，不是"被用"</h4>
                  </div>
                  <p className="text-lg text-cyber-dark-200">
                    生成个PPT、写个作业、修张图——看似会用AI，其实只是"玩工具"。
                    真正的AI应用，是让它成为你能力的一部分，而不是替你干点小活。
                  </p>
                </div>

                {/* 核心问题 */}
                <div className="p-6 bg-cyber-dark-900/50 rounded-xl">
                  <div className="flex items-center gap-4 mb-4">
                    <Brain className="text-neon-purple-500 neon-glow-purple" size={40} />
                    <h4 className="text-2xl font-bold text-neon-purple-400">2. 核心问题：不是AI不行，而是你不会问</h4>
                  </div>
                  <div className="space-y-3 mb-4">
                    <p className="text-lg text-cyber-dark-200">• 同一个问题，不同问法，结果天差地别</p>
                    <p className="text-lg text-cyber-dark-200">• AI听不懂人话，不是它笨，而是你没说清楚</p>
                  </div>
                  <div className="p-4 bg-gradient-to-r from-cyber-pink-500/20 to-neon-purple-500/20 rounded-lg border border-cyber-pink-500/50">
                    <p className="text-2xl font-black text-center glitch-text" data-text="Prompt（提示词）">
                      Prompt（提示词）
                    </p>
                    <p className="text-lg text-center text-cyber-dark-200 mt-2">才是用好AI的关键</p>
                  </div>
                </div>

                {/* 关键突破 */}
                <div className="p-6 bg-cyber-dark-900/50 rounded-xl">
                  <div className="flex items-center gap-4 mb-4">
                    <Rocket className="text-neon-cyan-500 neon-glow-cyan" size={40} />
                    <h4 className="text-2xl font-bold text-neon-cyan-400">3. 关键突破：从"会用"到"用好"</h4>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <ArrowRight className="text-neon-cyan-400 flex-shrink-0" size={24} />
                      <p className="text-lg text-cyber-dark-200">学会提问，才能让AI输出你想要的答案</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <ArrowRight className="text-neon-cyan-400 flex-shrink-0" size={24} />
                      <p className="text-lg text-cyber-dark-200">学会设计提示词，AI才能真正成为你的助理</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <ArrowRight className="text-neon-cyan-400 flex-shrink-0" size={24} />
                      <p className="text-lg text-cyber-dark-200">会问问题的人，才是真正会用AI的人</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 视频展示 */}
              

              <div className="mt-8 p-6 bg-gradient-to-r from-cyber-pink-500/20 to-neon-cyan-500/20 rounded-xl border border-cyber-pink-500/50">
                <p className="text-xl font-bold text-center gradient-text">
                  掌握AI的方式，不是"多玩几次"，而是"学会让AI听懂你"
                </p>
              </div>
              <div className="mt-8">
                <div className="relative overflow-hidden rounded-xl border-2 border-cyber-pink-500/50 shadow-neon-pink">
                  <video
                    controls
                    className="w-full"
                    poster=""
                  >
                    <source src="https://ddcz-1315997005.cos.ap-nanjing.myqcloud.com/static/video/web_teach/AI.mov" type="video/mp4" />
                    您的浏览器不支持视频播放。
                  </video>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* 7. 行动召唤区 CTA Section */}
      <section className="py-20 px-4 relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto"
        >
          {/* 主标题 */}
          <motion.div
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-black gradient-text mb-6">
              六、为什么大专生最有机会？
            </h2>
            <p className="text-3xl text-cyber-dark-200">
              别再妄自菲薄，大专生就是最适合，且最有机会，有潜力学习AI的一群人
            </p>
          </motion.div>

          {/* 四个理由卡片 */}
          <motion.div
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-8 mb-16"
          >
            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              className="glass-effect glass-effect-hover p-10 rounded-2xl"
            >
              <div className="text-7xl font-black text-neon-cyan-500 neon-text-cyan mb-6">01</div>
              <h3 className="text-3xl font-bold text-cyber-dark-100 mb-4">你不笨，只是没找到正确的学习方式</h3>
              <div className="flex items-center gap-3 text-xl text-cyber-dark-300">
                <ArrowRight className="text-neon-cyan-400 flex-shrink-0" size={28} />
                <p>AI学习不需要死记硬背，只需要实践，就能立马看到成果</p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              className="glass-effect glass-effect-hover p-10 rounded-2xl"
            >
              <div className="text-7xl font-black text-neon-purple-500 neon-text-purple mb-6">02</div>
              <h3 className="text-3xl font-bold text-cyber-dark-100 mb-4">你们不是不聪明，而是被应试教育束缚</h3>
              <div className="flex items-center gap-3 text-xl text-cyber-dark-300">
                <ArrowRight className="text-neon-purple-400 flex-shrink-0" size={28} />
                <p>AI不需要死记硬背，只需要你一次次的试错与改变</p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              className="glass-effect glass-effect-hover p-10 rounded-2xl"
            >
              <div className="text-7xl font-black text-cyber-pink-500 neon-text-pink mb-6">03</div>
              <h3 className="text-3xl font-bold text-cyber-dark-100 mb-4">学习AI的门槛正在不断降低</h3>
              <div className="flex items-center gap-3 text-xl text-cyber-dark-300">
                <ArrowRight className="text-cyber-pink-400 flex-shrink-0" size={28} />
                <p>只要跟随上课节奏，弄清楚逻辑与提示词，相当于０门槛，难在下定决心开始学</p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              className="glass-effect glass-effect-hover p-10 rounded-2xl"
            >
              <div className="text-7xl font-black text-neon-yellow-500 neon-text-cyan mb-6">04</div>
              <h3 className="text-3xl font-bold text-cyber-dark-100 mb-4">应用领域广泛，几乎涵盖所有专业</h3>
              <div className="flex items-center gap-3 text-xl text-cyber-dark-300">
                <ArrowRight className="text-neon-yellow-400 flex-shrink-0" size={28} />
                <p>AI 剪视频、写脚本、做海报、写简历、还能开自媒体、做电商、甚至创业变现</p>
              </div>
            </motion.div>
          </motion.div>

          {/* 最终CTA */}
          <motion.div
            variants={fadeInUp}
            className="text-center"
          >
            

            <div className="cyber-card p-8 rounded-2xl inline-block">
              <p className="text-3xl md:text-4xl font-black gradient-text">
                未来，不是属于学历最高的人<br />而是属于最会用AI的人
              </p>
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

export default HomePage;
