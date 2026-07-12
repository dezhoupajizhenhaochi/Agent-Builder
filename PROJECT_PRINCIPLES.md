# Vedesign Themes 项目原则

## 1. 唯一组件库基线

本项目的 Agent 页面以 **Volcengine Agent Design / `@ve-design/react`** 为唯一组件库基线。

- React 项目必须先引入 `@ve-design/react/css/default.css`。
- Agent 交互优先使用 `@ve-design/react` 提供的 Agent 组件。
- 图标必须优先使用 `@ve-design/react/icons`。
- 不引入另一套 Button、Input、Modal、Tabs、Sidebar 或 Chat 组件库混用。
- 不复制官方组件的 DOM 和 CSS 重新实现同类组件。

官方规范：<https://arco-agent-kit.gf-tjdt.bytedance.net/components/#volcengine-agent-design>

## 2. Agent 链路优先使用官方 Agent 组件

Agent 页面应围绕“对话 · 过程 · 证据 · 产物 · 操作”组织：

| 交互职责 | 必须优先使用 |
| --- | --- |
| 消息输入 | `ChatInput` / `ChatInputAction` |
| 消息流 | `Bubble` / `BubbleList` |
| 生成中状态 | `Thinking` |
| 过程步骤 | `ThoughtChain` / `ThoughtChainItem` |
| Markdown 回答 | `Markdown` |
| 来源与证据 | `Citation` |
| 结果产物 | `ArtifactCard` / `ResourcePreview` |
| 快捷操作 | `Actions` |
| 应用级导航 | `Sidebar` / `SidebarGroup` / `SidebarItem` |
| 需求确认 | `Clarify` |
| 高风险确认 | `Authorization` |

只有当官方组件没有覆盖业务职责时，才允许组合基础组件扩展。

## 3. Token 是视觉实现的唯一来源

- 主题必须通过覆盖官方 CSS 自定义属性实现。
- 不在 Agent 组件内写死 HEX、RGB、间距、圆角、阴影或动效时长。
- 生成的主题必须完整保留官方 Token 名称、语义和 Light/Dark 层级。
- Primitive Token 不得直接代替 Semantic Token 承担业务语义。
- 组件应优先消费 `--color-bg-*`、`--color-text-*`、`--color-border-*`、`--space-*`、`--radius-*`、`--shadow-*`、`--motion-*` 等语义 Token。
- `.dark` 是官方暗色切换入口，不另建一套暗色类名。

### 当前一致性基线

- `src/themes/vedesign-Agent-Theme.css` 与 `@ve-design/react/css/default.css` 均包含 439 个 Token。
- Token 名称差集为 0：无缺失、无额外伪造的官方 Token。
- 主题 CSS 加载顺序正确：官方默认主题在前，项目生成主题在后覆盖。

## 4. 自定义能力不得污染官方命名空间

主题工作台的背景、渐变、iframe 通信和预览控制属于 Studio 扩展能力：

- 自定义 CSS 变量统一使用 `--studio-*`。
- 禁止新造 `--color-bg-*`、`--color-text-*` 等看起来像官方的 Token。
- Studio 渐变可以读取官方 Primitive Token，但不改变官方 Token 原意。
- iframe 只通过明确的 `postMessage` 契约传入主题和预览配置。
- Shadow DOM 的 `::part` 仅用于嵌入环境适配，不修改组件内部交互和结构。

## 5. 组件优先，组合其次，原生实现最后

每次新增界面能力按以下顺序决策：

1. 检查 `@ve-design/react` 是否已有对应组件。
2. 检查官方组件的 Props、Events、Slots 和 CSS Parts 是否可扩展。
3. 用官方 Agent 组件 + 基础组件组合。
4. 只有前三步无法实现时，才写项目级容器或原生 HTML。

项目级容器可以负责布局，但不得重新实现 ChatInput、Bubble、Thinking、Citation、ArtifactCard 等已有交互语义。

## 6. 交互必须覆盖完整 Agent 状态

每个 Agent 页面至少验收：

- 空态、可输入态、禁用态。
- 生成中、停止生成、成功、失败、取消。
- 思考摘要和思维链的展开/收起。
- 来源引用、产物预览和后续操作。
- 加载、禁用、错误、无数据和权限确认。
- 键盘导航、焦点可见性、ARIA 语义和色彩对比度。

## 7. 最佳实践的分层边界

### Agent Runtime

- 使用 React + `@ve-design/react`。
- 承载真实页面、组件与交互。
- 只消费官方 Token 和明确的 Studio 配置。

### Theme Studio

- 负责 OKLCH 生成、主题配置、预览编排和导出。
- 可以使用原生 HTML 作为工具壳，但不将其伪装成 Agent Runtime 组件。
- 不得在 Studio 内再手写一套简化 Agent 页面代替 Runtime。

### Theme Package

- 导出物只覆盖官方 Token，不带入预览页面的局部类名。
- 自定义渐变等扩展资产放入独立 `--studio-*` 或明确的 extension 区域。
- 导出前必须校验官方 Token 完整性。

## 8. 每次改动的必做检查

1. 检查是否优先使用官方组件。
2. 检查是否新增了非 `--studio-*` 的自定义 Token。
3. 比对生成主题与官方默认主题的 Token 名称集合。
4. 执行 Agent Runtime `npm run build`。
5. 执行 Theme Studio `npm run check` 与 `npm run sync:dist`。
6. 在 Light/Dark、欢迎页、对话页、Skill/MCP、文件库、设置页和产物页回归主题。
7. 验证 iframe 与 Shadow DOM 适配没有破坏组件默认行为。

