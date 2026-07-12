# Vedesign Themes

Vedesign Themes 是一个静态单页的设计系统色彩主题生成器。它支持 OKLCH 调色、语义主题生成、网站取色、Figma 颜色变量提取、CSS 导出和 `.skill.zip` 打包导出。

## 本地运行

```bash
npm run dev
```

然后打开：

```text
http://127.0.0.1:4173/index.html
```

这个项目没有运行时构建依赖，核心入口是 `index.html`。

## 校验

```bash
npm run check
```

校验会检查：

- `index.html` 可被 HTML parser 读取
- 主内联 JavaScript 能通过 `node --check`
- `dist/index.html` 是否和源文件漂移

## 部署

先配置 Vercel Token：

```bash
export VERCEL_TOKEN=vcp_xxx
```

然后运行：

```bash
./deploy.sh
```

部署脚本会先执行项目校验，再把根目录 `index.html` 同步到 `dist/index.html`，最后通过 Vercel API 发布到生产环境。

## 主要文件

- `index.html`：主应用源码
- `deploy.sh`：Vercel REST API 部署脚本
- `SKILL.md`：打开线上工具的 Codex/Agent Skill 描述
- `theme-ve-o-design.css`：VE/O Design 主题 token 参考
- `vedesign-Agent-Theme.css`：生成主题 CSS 资产
- `dist/index.html`：部署前同步出的产物，不建议手动编辑

## 后续优化方向

- 将 `index.html` 拆分为 `src/` 模块，逐步引入 Vite 或类似轻量构建
- 将网站取色 CORS 代理迁移到自有后端或 Vercel Function
- 给色彩算法、Skill schema 和 AI action envelope 增加单元测试

