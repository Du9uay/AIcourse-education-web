# 代码风格与约定

## TypeScript风格
- 使用TypeScript严格模式
- 接口和类型定义使用PascalCase
- 变量和函数使用camelCase
- 常量使用UPPER_SNAKE_CASE

## React约定
- 组件使用PascalCase命名
- Props接口以Props结尾 (如: HomePageProps)
- 使用函数式组件和Hooks
- 导出组件使用export default

## 文件命名
- 组件文件: PascalCase.tsx (如: HomePage.tsx)
- 工具文件: camelCase.ts
- 样式文件: kebab-case.css

## CSS/Tailwind约定
- 优先使用Tailwind CSS类
- 自定义CSS使用CSS变量
- 颜色变量遵循命名模式: --bg-*, --surf-*, --accent-*
- 响应式设计: mobile-first

## 项目特定约定
- 课程相关页面放在 pages/course/ 目录
- 图片资源放在 src/assets/images/ 
- 组件props解构使用
- 动画使用Framer Motion库

## 导入顺序
1. React相关导入
2. 第三方库导入  
3. 本地组件导入
4. 类型导入
5. 样式导入

## 组件结构
```tsx
import React from 'react';
import { motion } from 'framer-motion';

interface ComponentProps {
  // props定义
}

const Component: React.FC<ComponentProps> = ({ prop1, prop2 }) => {
  // hooks
  // 事件处理函数
  // 渲染逻辑
  return (
    <motion.div>
      {/* JSX */}
    </motion.div>
  );
};

export default Component;
```