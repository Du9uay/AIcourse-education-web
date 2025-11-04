# 建议命令

## 开发相关命令

### 启动开发服务器
```bash
npm start
```

### 构建生产版本
```bash
npm run build
```

### 运行测试
```bash
npm run test
```

### 安装依赖
```bash
npm install
```

## Git操作
```bash
git status
git add .
git commit -m "提交信息"
git push
```

## 文件查看
```bash
ls -la                  # 查看目录内容
find . -name "*.tsx"    # 查找TypeScript文件
grep -r "搜索内容" src/  # 在src目录搜索内容
```

## 系统工具 (Darwin)
```bash
open .                  # 在Finder中打开当前目录
which node             # 查看node路径
ps aux | grep node     # 查看node进程
kill -9 <PID>          # 结束进程
```

## 开发工具
- VS Code: 推荐的IDE
- Chrome DevTools: 调试工具
- React DevTools: React调试扩展

## 注意事项
- 系统为Darwin (macOS)
- 使用npm作为包管理器
- TypeScript配置严格模式
- 支持ES6+语法