import { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Bubble, BubbleList } from '@ve-design/react/bubble';
import { Markdown } from '@ve-design/react/markdown';
import { Select, SelectItem } from '@ve-design/react/select';
import { Thinking } from '@ve-design/react/thinking';
import '@ve-design/react/css/default.css';

const selectConfigs = {
  'studio-font-cn': {
    value: 'pingfang',
    label: '中文默认字体',
    options: [
      ['pingfang', '苹方 PingFang SC'],
      ['noto', '思源黑体 Noto Sans SC'],
      ['yahei', '微软雅黑'],
      ['system', '系统默认'],
    ],
  },
  'studio-font-en': {
    value: 'inter',
    label: '英文默认字体',
    options: [
      ['inter', 'Inter'],
      ['roboto', 'Roboto'],
      ['sfpro', 'SF Pro'],
      ['arial', 'Arial'],
    ],
  },
  'studio-sidebar-position': {
    value: 'left',
    label: '侧边栏位置',
    options: [['left', '左侧'], ['right', '右侧']],
  },
  'studio-composer-style': {
    value: 'outlined',
    label: 'Composer 风格',
    options: [['outlined', '描边卡片'], ['floating', '悬浮胶囊']],
  },
  'studio-content-density': {
    value: 'comfortable',
    label: '内容密度',
    options: [['comfortable', '舒适'], ['compact', '紧凑']],
  },
  'studio-content-width': {
    value: 'default',
    label: '对话内容宽度',
    options: [['default', '标准'], ['wide', '宽屏']],
  },
  'studio-artifact-layout': {
    value: 'split',
    label: '结果布局',
    options: [['split', '对话 + 产物双栏'], ['canvas', '产物画布'], ['tabs', '分页切换']],
  },
  'studio-artifact-view': {
    value: 'preview',
    label: '默认视图',
    options: [['preview', '预览'], ['code', '代码']],
  },
};

function StudioSelect({ mount, config }) {
  const [value, setValue] = useState(config.value);

  useEffect(() => {
    const syncValue = (event) => {
      if (event.detail?.id !== mount.id) return;
      setValue(String(event.detail.value));
    };
    window.addEventListener('studio-select-sync', syncValue);
    return () => window.removeEventListener('studio-select-sync', syncValue);
  }, [mount]);

  return (
    <Select
      value={value}
      size="small"
      aria-label={config.label}
      style={{ width: '100%' }}
      onChange={(event) => {
        const nextValue = String(event.detail.value);
        setValue(nextValue);
        mount.dispatchEvent(new CustomEvent('studio-select-change', {
          bubbles: true,
          detail: { value: nextValue },
        }));
      }}
    >
      {config.options.map(([optionValue, optionLabel]) => (
        <SelectItem key={optionValue} value={optionValue}>{optionLabel}</SelectItem>
      ))}
    </Select>
  );
}

Object.entries(selectConfigs).forEach(([id, config]) => {
  const mount = document.getElementById(id);
  if (mount) createRoot(mount).render(<StudioSelect mount={mount} config={config} />);
});

const thinkingRoots = new WeakMap();

window.mountStudioThinking = (mount, options = {}) => {
  if (!mount) return;
  const root = thinkingRoots.get(mount) ?? createRoot(mount);
  thinkingRoots.set(mount, root);
  root.render(
    <Thinking
      title={options.title ?? '正在思考'}
      loading={options.loading ?? true}
      expanded={options.expanded ?? true}
      maxHeight={options.maxHeight}
    >
      <div>{options.content ?? ''}</div>
    </Thinking>,
  );
};

window.unmountStudioThinking = (mount) => {
  const root = thinkingRoots.get(mount);
  if (!root) return;
  root.unmount();
  thinkingRoots.delete(mount);
};

const bubbleRoots = new WeakMap();

window.mountStudioBubble = (mount, options = {}) => {
  if (!mount) return;
  const root = bubbleRoots.get(mount) ?? createRoot(mount);
  const role = options.role === 'user' ? 'user' : 'assistant';
  const bubbleStyle = role === 'user' ? {
    '--ve-bubble-content-filled-bg': 'var(--color-bg-inverse, #18181b)',
    '--ve-bubble-content-text-color': 'var(--color-text-foreground, #fff)',
    '--ve-bubble-content-radius-default': 'var(--radius-xl, 16px)',
    '--ve-bubble-content-padding-block': 'var(--space-xxs, 8px)',
    '--ve-bubble-content-padding-inline': 'var(--space-s, 16px)',
  } : {
    '--ve-bubble-content-max-width': '100%',
  };
  bubbleRoots.set(mount, root);
  mount.dataset.component = 've-bubble';
  root.render(
    <BubbleList gap="0" style={{ width: '100%' }}>
      <Bubble
        placement={role === 'user' ? 'end' : 'start'}
        variant={role === 'user' ? 'filled' : 'text'}
        style={bubbleStyle}
      >
        {role === 'assistant' ? (
          <Markdown
            content={String(options.content ?? '')}
            size="small"
            wrap
            escapeRawHtml
            openLinksInNewTab
          />
        ) : String(options.content ?? '')}
      </Bubble>
    </BubbleList>,
  );
};

window.unmountStudioBubble = (mount) => {
  const root = bubbleRoots.get(mount);
  if (!root) return;
  root.unmount();
  bubbleRoots.delete(mount);
};

window.dispatchEvent(new CustomEvent('studio-react-ready'));
