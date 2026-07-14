(() => {
  const themeState = {
    primaryHex: '#1664ff',
    background: 'gradient',
    bgToken: 'surface',
    gradientMode: 'complementary',
    gradientStrength: 50,
    gradientNoise: 50,
    backgroundBlur: 18,
    imageDataUrl: '',
    radius: 1,
    density: 1,
    fontCn: 'pingfang',
    fontEn: 'inter'
  };

  const labels = {
    gradientMode: {
      analogous: '邻近色',
      monochrome: '同色系',
      complementary: '互补色',
      triadic: '三角配色'
    },
    bgToken: {
      surface: '页面底色',
      base: '白色底色',
      soft: '品牌柔光',
      neutral: '中性衬底'
    },
    fontCn: {
      pingfang: '苹方',
      noto: '思源黑体',
      yahei: '微软雅黑',
      system: '系统默认'
    },
    fontEn: {
      inter: 'Inter',
      roboto: 'Roboto',
      sfpro: 'SF Pro',
      arial: 'Arial'
    }
  };

  const imagePresets = [
    { value: './asset/bg1.png', label: '柔彩渐变', image: '../asset/bg1.png' },
    { value: './asset/bg2.jpg', label: '极光山谷', image: '../asset/bg2.jpg' },
    { value: './asset/42d56d9a4bd2a7fb4936e42101d61081.jpg', label: '浅雾柔光', image: '../asset/42d56d9a4bd2a7fb4936e42101d61081.jpg' },
    { value: './asset/174b6ee2398798918afb6b21d1c60441.jpg', label: '青雾柔影', image: '../asset/174b6ee2398798918afb6b21d1c60441.jpg' }
  ];

  const postUpdate = (key, value) => {
    window.parent?.postMessage({ type: 'vedesign-studio-theme-update', key, value }, '*');
  };

  const optionButtons = (group, options, previewClass = '') => Object.entries(options).map(([value, label]) => (
    `<button class="theme-mirror-option ${previewClass}" type="button" data-theme-key="${group}" data-theme-value="${value}"><span>${label}</span></button>`
  )).join('');

  function markup() {
    return `
      <h3>主题风格</h3>
      <div class="theme-mirror-card" data-studio-theme-mirror>
        <section class="theme-mirror-section">
          <div class="theme-mirror-heading"><strong>选择主色</strong><small>与左侧主色锚点实时同步</small></div>
          <div class="theme-mirror-color-row">
            <label class="theme-mirror-color" title="选择主色"><input type="color" data-theme-color></label>
            <label class="theme-mirror-hex"><span>主色锚点 primary-600</span><input type="text" maxlength="7" spellcheck="false" data-theme-hex></label>
          </div>
        </section>

        <section class="theme-mirror-section">
          <div class="theme-mirror-heading"><strong>背景色</strong><small>复用背景类型与配色策略</small></div>
          <div class="theme-mirror-segmented">
            <button type="button" data-theme-key="background" data-theme-value="solid">纯色背景</button>
            <button type="button" data-theme-key="background" data-theme-value="gradient">渐变背景</button>
            <button type="button" data-theme-key="background" data-theme-value="image">图片背景</button>
          </div>

          <div class="theme-mirror-context" data-background-panel="solid">
            <div class="theme-mirror-options theme-mirror-options-four">${optionButtons('bgToken', labels.bgToken, 'theme-mirror-solid')}</div>
          </div>

          <div class="theme-mirror-context" data-background-panel="gradient">
            <div class="theme-mirror-options theme-mirror-options-four">${optionButtons('gradientMode', labels.gradientMode, 'theme-mirror-gradient')}</div>
            <label class="theme-mirror-range"><span><b>渐变强度</b><output data-output="gradientStrength">50%</output></span><input type="range" min="0" max="100" step="1" data-theme-range="gradientStrength"></label>
            <label class="theme-mirror-range"><span><b>噪点效果</b><output data-output="gradientNoise">50%</output></span><input type="range" min="0" max="100" step="1" data-theme-range="gradientNoise"></label>
          </div>

          <div class="theme-mirror-context" data-background-panel="image">
            <div class="theme-mirror-images">
              ${imagePresets.map(item => `<button type="button" data-theme-key="imagePreset" data-theme-value="${item.value}"><span style="background-image:url('${item.image}')"></span><b>${item.label}</b></button>`).join('')}
            </div>
            <label class="theme-mirror-range"><span><b>背景模糊</b><output data-output="backgroundBlur">18px</output></span><input type="range" min="0" max="48" step="1" data-theme-range="backgroundBlur"></label>
          </div>
        </section>

        <section class="theme-mirror-section">
          <div class="theme-mirror-heading"><strong>圆角大小</strong><small>同步全局组件圆角比例</small></div>
          <label class="theme-mirror-range"><span><b>圆角比例</b><output data-output="radius">1.00×</output></span><input type="range" min="0" max="2" step="0.05" data-theme-range="radius"></label>
        </section>

        <section class="theme-mirror-section">
          <div class="theme-mirror-heading"><strong>系统字体</strong><small>复用中英文字体栈</small></div>
          <div class="theme-mirror-font-row"><span>中文默认字体</span><div class="theme-mirror-choice">${optionButtons('fontCn', labels.fontCn)}</div></div>
          <div class="theme-mirror-font-row"><span>英文默认字体</span><div class="theme-mirror-choice">${optionButtons('fontEn', labels.fontEn)}</div></div>
        </section>

        <section class="theme-mirror-section">
          <div class="theme-mirror-heading"><strong>字体间距</strong><small>同步页面整体密度</small></div>
          <label class="theme-mirror-range"><span><b>间距密度</b><output data-output="density">1.00×</output></span><input type="range" min="0.5" max="1.6" step="0.05" data-theme-range="density"></label>
        </section>
      </div>`;
  }

  function findPersonalizationSection() {
    return [...document.querySelectorAll('.settings-block')].find(section => section.querySelector(':scope > h3')?.textContent?.trim() === '个性化');
  }

  function bindMirror(root) {
    root.querySelectorAll('[data-theme-key]').forEach(button => {
      button.addEventListener('click', () => postUpdate(button.dataset.themeKey, button.dataset.themeValue));
    });
    root.querySelectorAll('[data-theme-range]').forEach(input => {
      input.addEventListener('input', () => postUpdate(input.dataset.themeRange, Number(input.value)));
    });

    const picker = root.querySelector('[data-theme-color]');
    const hex = root.querySelector('[data-theme-hex]');
    picker.addEventListener('input', () => postUpdate('primaryHex', picker.value));
    const commitHex = () => {
      const value = hex.value.trim();
      if (/^#[0-9a-f]{6}$/i.test(value)) postUpdate('primaryHex', value);
    };
    hex.addEventListener('change', commitHex);
    hex.addEventListener('keydown', event => {
      if (event.key === 'Enter') commitHex();
    });
  }

  function updateMirror(root) {
    const color = /^#[0-9a-f]{6}$/i.test(themeState.primaryHex) ? themeState.primaryHex : '#1664ff';
    const picker = root.querySelector('[data-theme-color]');
    const hex = root.querySelector('[data-theme-hex]');
    if (document.activeElement !== picker) picker.value = color;
    if (document.activeElement !== hex) hex.value = color;
    root.style.setProperty('--theme-mirror-primary', color);

    root.querySelectorAll('[data-theme-key]').forEach(button => {
      const key = button.dataset.themeKey;
      const activeValue = key === 'imagePreset' ? themeState.imageDataUrl : themeState[key];
      const comparableValue = key === 'imagePreset' ? button.dataset.themeValue.replace(/^\./, '') : button.dataset.themeValue;
      button.classList.toggle('active', String(activeValue || '').includes(comparableValue));
    });
    root.querySelectorAll('[data-background-panel]').forEach(panel => {
      panel.hidden = panel.dataset.backgroundPanel !== themeState.background;
    });
    root.querySelectorAll('[data-theme-range]').forEach(input => {
      const value = Number(themeState[input.dataset.themeRange]);
      if (Number.isFinite(value) && document.activeElement !== input) input.value = String(value);
    });

    const values = {
      gradientStrength: `${Math.round(themeState.gradientStrength)}%`,
      gradientNoise: `${Math.round(themeState.gradientNoise)}%`,
      backgroundBlur: `${Math.round(themeState.backgroundBlur)}px`,
      radius: `${Number(themeState.radius).toFixed(2)}×`,
      density: `${Number(themeState.density).toFixed(2)}×`
    };
    Object.entries(values).forEach(([key, value]) => {
      const output = root.querySelector(`[data-output="${key}"]`);
      if (output) output.textContent = value;
    });
  }

  function mountMirror() {
    const section = findPersonalizationSection();
    if (!section) return;
    let root = section.querySelector('[data-studio-theme-mirror]');
    if (!root) {
      section.innerHTML = markup();
      root = section.querySelector('[data-studio-theme-mirror]');
      bindMirror(root);
    }
    updateMirror(root);
  }

  window.addEventListener('message', event => {
    if (event.data?.type !== 'vedesign-studio-theme') return;
    const nextTheme = event.data.themeConfig || {};
    const appearance = event.data.appearance || {};
    Object.assign(themeState, {
      primaryHex: nextTheme.primaryHex || themeState.primaryHex,
      background: appearance.background || themeState.background,
      bgToken: appearance.bgToken || themeState.bgToken,
      gradientMode: appearance.gradientMode || themeState.gradientMode,
      gradientStrength: Number.isFinite(appearance.gradientStrength) ? appearance.gradientStrength : themeState.gradientStrength,
      gradientNoise: Number.isFinite(appearance.gradientNoise) ? appearance.gradientNoise : themeState.gradientNoise,
      backgroundBlur: Number.isFinite(appearance.backgroundBlur) ? appearance.backgroundBlur : themeState.backgroundBlur,
      imageDataUrl: appearance.imageDataUrl || themeState.imageDataUrl,
      radius: Number.isFinite(appearance.radius) ? appearance.radius : themeState.radius,
      density: Number.isFinite(appearance.density) ? appearance.density : themeState.density,
      fontCn: appearance.fontCn || themeState.fontCn,
      fontEn: appearance.fontEn || themeState.fontEn
    });
    mountMirror();
  });

  const observer = new MutationObserver(mountMirror);
  const start = () => {
    observer.observe(document.getElementById('root') || document.body, { childList: true, subtree: true });
    mountMirror();
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start, { once: true });
  else start();
  window.parent?.postMessage({ type: 'vedesign-studio-theme-mirror-ready' }, '*');
})();
