export interface CourseChapter {
  id: string;
  path: string;
  title: string;
  description: string;
}

export const courseChapters: CourseChapter[] = [
  {
    id: 'automation-industry',
    path: '/course/automation-industry',
    title: '多Agent系统基础理论',
    description: '了解多Agent系统的基本概念与发展历程'
  },
  {
    id: 'plc-basics',
    path: '/course/plc-basics',
    title: '多Agent系统架构模式',
    description: '掌握四种主要架构模式的特点与应用'
  },
  {
    id: 'multi-agent-basics',
    path: '/course/multi-agent-basics',
    title: '多Agent系统基础架构',
    description: '深入理解多Agent系统的核心架构'
  },
  {
    id: 'agent-role-design',
    path: '/course/agent-role-design',
    title: 'Agent角色设计',
    description: '学习Agent角色的专业化分工策略'
  },
  {
    id: 'communication-mechanism',
    path: '/course/communication-mechanism',
    title: 'Agent间通信机制',
    description: '掌握Agent间的通信协议与信息交换'
  },
  {
    id: 'collaboration-management',
    path: '/course/collaboration-management',
    title: '协作管理与任务分配',
    description: '学习协作策略和任务分配机制'
  },
  {
    id: 'central-coordination',
    path: '/course/central-coordination',
    title: '中央协调与管理',
    description: '理解中央协调器的设计与实现'
  },
  {
    id: 'application-architecture',
    path: '/course/application-architecture',
    title: '实际应用架构',
    description: '掌握三大典型应用架构设计'
  },
  {
    id: 'a2a-protocol',
    path: '/course/a2a-protocol',
    title: 'A2A协议与标准化实践',
    description: '学习谷歌A2A协议的前沿实践'
  },
  {
    id: 'program-development',
    path: '/course/program-development',
    title: '关键角色职责图谱',
    description: '理解系统中各角色的职责分工'
  }
];

export const getChapterNavigation = (currentPath: string) => {
  const currentIndex = courseChapters.findIndex(chapter => chapter.path === currentPath);
  
  if (currentIndex === -1) {
    return { prev: null, next: null };
  }
  
  const prev = currentIndex > 0 ? courseChapters[currentIndex - 1] : null;
  const next = currentIndex < courseChapters.length - 1 ? courseChapters[currentIndex + 1] : null;
  
  return { prev, next };
};

export const getNextChapter = (currentPath: string): CourseChapter | null => {
  const { next } = getChapterNavigation(currentPath);
  return next;
};

export const getPrevChapter = (currentPath: string): CourseChapter | null => {
  const { prev } = getChapterNavigation(currentPath);
  return prev;
};