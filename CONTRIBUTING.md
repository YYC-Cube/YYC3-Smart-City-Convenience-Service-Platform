# 贡献指南

感谢您对"言语·智慧同城"项目的关注！我们欢迎所有形式的贡献。

## 行为准则

- 尊重所有贡献者
- 保持友好和专业的交流
- 接受建设性的批评
- 关注对社区最有利的事情

## 如何贡献

### 报告问题

如果您发现了bug或有功能建议：

1. 检查 [Issues](https://github.com/your-repo/issues) 确保问题未被报告
2. 创建新的 Issue，使用清晰的标题和详细描述
3. 包含复现步骤、预期行为和实际行为
4. 如果可能，提供截图或错误日志

### 提交代码

1. **Fork 项目**
   \`\`\`bash
   git clone https://github.com/your-username/yanyu-smart-city.git
   cd yanyu-smart-city
   \`\`\`

2. **创建分支**
   \`\`\`bash
   git checkout -b feature/your-feature-name
   # 或
   git checkout -b fix/your-bug-fix
   \`\`\`

3. **开发和测试**
   - 遵循项目的代码规范
   - 编写清晰的提交信息
   - 确保代码通过所有测试
   - 添加必要的测试用例

4. **提交更改**
   \`\`\`bash
   git add .
   git commit -m "功能: 添加用户认证功能"
   \`\`\`

5. **推送到 GitHub**
   \`\`\`bash
   git push origin feature/your-feature-name
   \`\`\`

6. **创建 Pull Request**
   - 提供清晰的PR描述
   - 关联相关的 Issue
   - 等待代码审查

## 代码规范

### TypeScript/JavaScript

- 使用 TypeScript 进行类型安全开发
- 遵循 ESLint 配置
- 使用 Prettier 格式化代码
- 组件使用 PascalCase 命名
- 函数和变量使用 camelCase 命名
- 常量使用 UPPER_SNAKE_CASE 命名

### 文件命名

- 组件文件：`PascalCase.tsx`
- 工具文件：`kebab-case.ts`
- 页面文件：`page.tsx`
- 布局文件：`layout.tsx`

### 提交信息格式

\`\`\`
类型: 简短描述

详细描述（可选）

关联 Issue: #123
\`\`\`

**提交类型：**
- `功能`: 新功能
- `修复`: Bug修复
- `文档`: 文档更新
- `样式`: 代码格式调整
- `重构`: 代码重构
- `性能`: 性能优化
- `测试`: 测试相关
- `构建`: 构建系统更新
- `CI`: CI配置更新

### 代码审查清单

- [ ] 代码符合项目规范
- [ ] 添加了必要的注释
- [ ] 更新了相关文档
- [ ] 添加了测试用例
- [ ] 所有测试通过
- [ ] 没有引入新的警告
- [ ] 性能影响可接受

## 开发环境设置

\`\`\`bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 运行类型检查
npm run type-check

# 运行代码检查
npm run lint

# 格式化代码
npm run format
\`\`\`

## 项目结构

\`\`\`
yanyu-smart-city/
├── app/              # Next.js App Router
├── components/       # React组件
├── lib/             # 工具函数
├── types/           # TypeScript类型
├── public/          # 静态资源
└── docs/            # 文档
\`\`\`

## 需要帮助？

- 查看 [文档](./README.md)
- 加入 [讨论区](https://github.com/your-repo/discussions)
- 联系维护者

## 许可证

通过贡献代码，您同意您的贡献将在 MIT 许可证下发布。
\`\`\`

创建性能监控工具：
