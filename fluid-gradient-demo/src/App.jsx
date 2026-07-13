import { useMemo, useState } from 'react'
import { ShaderGradient, ShaderGradientCanvas } from '@shadergradient/react'

const palettes = {
  analogous: { label: '邻近色', colors: ['#cdebd8', '#edf7e8', '#d9efeb'] },
  monochrome: { label: '同色系', colors: ['#bfe4cc', '#e0f1e3', '#f7faf5'] },
  complementary: { label: '互补色', colors: ['#c7ead5', '#f2f5cf', '#f3d9e7'] },
  triadic: { label: '三角配色', colors: ['#c8e9d3', '#d9e9f8', '#f7ded8'] },
}

const controls = [
  ['speed', '动画速度'],
  ['strength', '流动强度'],
  ['density', '纹理密度'],
  ['grain', '颗粒效果'],
  ['reflection', '镜面反射'],
]

const grainTexture = "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.82' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='.7'/%3E%3C/svg%3E\")"

function Slider({ id, label, value, disabled, onChange }) {
  return (
    <label className="slider">
      <span className="slider-head"><span>{label}</span><output>{value}%</output></span>
      <input type="range" min="0" max="100" value={value} disabled={disabled} onChange={(event) => onChange(id, Number(event.target.value))} />
    </label>
  )
}

function App() {
  const [motion, setMotion] = useState('dynamic')
  const [palette, setPalette] = useState('analogous')
  const [values, setValues] = useState({ speed: 55, strength: 52, density: 40, grain: 8, reflection: 28 })
  const colors = palettes[palette].colors
  const shaderProps = useMemo(() => ({
    animate: motion === 'dynamic' && values.speed > 0 ? 'on' : 'off',
    type: 'plane',
    shader: 'defaults',
    color1: colors[0],
    color2: colors[1],
    color3: colors[2],
    uSpeed: 0.08 + values.speed / 100 * 0.72,
    uStrength: 1.2 + values.strength / 100 * 5.8,
    uDensity: 0.7 + values.density / 100 * 2.1,
    uFrequency: 2.4 + values.density / 100 * 4.8,
    reflection: 0.06 + values.reflection / 100 * 0.24,
    grain: 'off',
    brightness: 1.8,
    lightType: '3d',
    cDistance: 3.6,
    cPolarAngle: 90,
    cAzimuthAngle: 180,
    cameraZoom: 1,
    positionY: 0,
    rotationX: 0,
    rotationZ: 0,
  }), [colors, motion, values])

  const updateValue = (key, value) => setValues((current) => ({ ...current, [key]: value }))

  return (
    <main className="app">
      <aside className="controls">
        <p className="eyebrow">Official React Integration</p>
        <h1>ShaderGradient Background</h1>
        <p className="intro">使用 @shadergradient/react 渲染，将动态渐变放在 Agent 容器底层，Sidebar 透明，内容区保持白色。</p>

        <section className="section mode-row">
          <strong>播放模式</strong>
          <div className="segment">
            {['static', 'dynamic'].map((item) => <button key={item} className={motion === item ? 'active' : ''} onClick={() => setMotion(item)}>{item === 'static' ? '静态' : '动态'}</button>)}
          </div>
        </section>

        <section className="section">
          <strong>渐变配色</strong>
          <div className="palettes">
            {Object.entries(palettes).map(([key, item]) => (
              <button key={key} className={`palette ${palette === key ? 'active' : ''}`} onClick={() => setPalette(key)}>
                <span className="palette-preview" style={{ background: `linear-gradient(135deg,${item.colors.join(',')})` }} />
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        </section>

        <section className="section sliders">
          {controls.map(([id, label]) => <Slider key={id} id={id} label={label} value={values[id]} disabled={motion === 'static' && id === 'speed'} onChange={updateValue} />)}
          <p className="note">动画、流动、纹理和反射映射为 ShaderGradient 属性；颗粒使用低强度单色覆层，避免原生彩色噪点过强。</p>
        </section>
      </aside>

      <section className="stage">
        <header className="stage-bar"><strong>Agent 背景实时预览</strong><span><i />@shadergradient/react</span></header>
        <div className="agent-shell">
          <div className="shader-layer" aria-hidden="true">
            <ShaderGradientCanvas style={{ position: 'absolute', inset: 0 }} pixelDensity={1.5} fov={45}>
              <ShaderGradient {...shaderProps} />
            </ShaderGradientCanvas>
            <span style={{ position: 'absolute', inset: 0, pointerEvents: 'none', opacity: values.grain / 100 * 0.08, backgroundImage: grainTexture, backgroundSize: '180px 180px', mixBlendMode: 'soft-light' }} />
          </div>
          <aside className="sidebar">
            <div className="brand"><span className="brand-mark" /><b>Agent</b></div>
            <nav>{[['⌂', '新对话'], ['⌕', '搜索'], ['✣', '发现'], ['□', '文件库']].map(([icon, label], index) => <button key={label} className={index === 0 ? 'active' : ''}><span>{icon}</span>{label}</button>)}</nav>
            <small>项目</small><p>◉　通用 Agent 控制台</p>
            <small>历史会话</small><p>通用 Agent 工作台设计</p><p>整理市场活动复盘</p><p>生成周会结论摘要</p>
            <footer><i>设</i>ByteDance 设计师</footer>
          </aside>
          <section className="workspace">
            <div className="welcome">
              <h2>今天想设计点什么？</h2>
              <div className="composer">有问题，尽管问<div><span>＋</span><span>Doubao Pro⌄</span><span>深度思考</span><b>↑</b></div></div>
              <div className="chips">{['AI 办公', '生成 PPT', '创建网页', '生成视频', '灵感图片'].map((item) => <span key={item}>{item}</span>)}</div>
              <h3>推荐任务模板</h3><div className="cards"><i /><i /><i /></div>
            </div>
          </section>
        </div>
      </section>
    </main>
  )
}

export default App
