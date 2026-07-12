---
name: vedesign-agent-theme
description: |
  打开 Vedesign 色彩主题生成器。当用户需要生成设计系统配色、CSS 色彩 Token、
  设计主题、色板，或提到 design token / 主题色 / 品牌色 / 配色方案时触发。
user-invocable: true
disable-model-invocation: false
---

直接在浏览器中打开色彩生成工具供用户交互使用：

```bash
open "https://vedesign-themes.vercel.app"
```

工具支持：
- **语义生成**：输入文字描述（如"温暖的电商主题"），AI 一键生成完整主题
- **手动调色**：拖动 L/C/H 滑杆实时预览色板
- **网站提取**：粘贴网站 URL，自动抓取品牌色
- **Figma 导入**：粘贴 Figma 文件 URL + Token，从设计稿提取色彩变量
- **导出**：下载完整 CSS 或打包为 `.skill.zip`
