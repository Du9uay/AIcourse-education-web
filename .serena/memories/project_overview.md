# 项目概述

## 项目目的
这是一个多Agent协作系统的教学网站项目，原本是PLC教学网站，现已转换为专注于IT运维风格的多Agent系统课程教学平台。

## 技术栈
- **前端框架**: React 18.2.0 + TypeScript 4.9.5
- **路由**: React Router DOM 6.20.1 
- **动画库**: Framer Motion 12.19.2
- **拖拽库**: @dnd-kit/core 6.3.1, react-beautiful-dnd 13.1.1
- **样式**: Tailwind CSS 3.3.6 + 自定义CSS
- **构建工具**: React Scripts 5.0.1

## 项目结构
- `src/`
  - `components/` - 可复用组件
  - `pages/` - 页面组件
    - `course/` - 课程相关页面
  - `assets/` - 静态资源
- `public/` - 公共静态资源
- `tailwind.config.js` - Tailwind配置
- `tsconfig.json` - TypeScript配置

## 课程内容
基于课程讲义.md，包含7大模块：
1. 多Agent系统基础
2. Agent角色设计  
3. Agent间通信机制
4. 协作与任务管理
5. 中央协调与管理
6. 实际应用架构
7. A2A协议案例讲解

## 设计风格
- IT运维风格（IT风）
- 深蓝主色调 (#0f172a)
- 青色辅助色 (#0891b2) 
- 绿色强调色 (#10b981)
- 玻璃拟态效果
- 流畅动画交互