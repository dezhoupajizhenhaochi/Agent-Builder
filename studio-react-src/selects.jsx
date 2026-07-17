import { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Bubble, BubbleList } from '@ve-design/react/bubble';
import { Markdown } from '@ve-design/react/markdown';
import { Select, SelectItem } from '@ve-design/react/select';
import { Thinking } from '@ve-design/react/thinking';
import { ThoughtChain, ThoughtChainItem } from '@ve-design/react/thought-chain';
import { ArtifactCard } from '@ve-design/react/artifact-card';
import { Button } from '@ve-design/react/button';
import { Checkbox } from '@ve-design/react/checkbox';
import {
  IconAtom,
  IconSearch,
  IconTool,
  IconFileCheck,
  IconDownload,
  IconOpenNewWindow,
} from '@ve-design/react/icons';
import '@ve-design/react/css/default.css';
import '@ve-design/web/ve-chat-input';

const THOUGHT_KIND_ICONS = {
  think: IconAtom,
  search: IconSearch,
  tool: IconTool,
  result: IconFileCheck,
};

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

const checkboxConfigs = {
  'studio-sidebar-visible': { checked: true, label: '显示' },
  'studio-welcome-capabilities': { checked: true, label: '显示' },
  'studio-welcome-suggestions': { checked: true, label: '显示' },
  'studio-welcome-tasks': { checked: true, label: '显示' },
  'studio-data-mock': { checked: true, label: 'Mock 演示数据' },
  'studio-reasoning': { checked: true, label: '思考链' },
  'studio-sources': { checked: true, label: '来源与引用' },
  'studio-message-actions': { checked: true, label: '复制与重试' },
  'studio-artifact-code': { checked: true, label: '允许切换' },
  'studio-artifact-actions': { checked: true, label: '复制与下载' },
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

function StudioCheckbox({ mount, config }) {
  const initialChecked = typeof mount.checked === 'boolean'
    ? mount.checked
    : mount.dataset.checked === 'false'
      ? false
      : config.checked;
  const [checked, setChecked] = useState(initialChecked);

  useEffect(() => {
    mount.checked = checked;
    mount.dataset.checked = String(checked);
    mount.setAttribute('aria-checked', String(checked));
  }, [mount, checked]);

  return (
    <Checkbox
      checked={checked}
      aria-label={config.label}
      onChange={(event) => {
        const nextChecked = Boolean(event.detail.checked);
        setChecked(nextChecked);
        mount.checked = nextChecked;
        mount.dispatchEvent(new Event('change', { bubbles: true }));
      }}
    >
      {config.label}
    </Checkbox>
  );
}

Object.entries(selectConfigs).forEach(([id, config]) => {
  const mount = document.getElementById(id);
  if (mount) createRoot(mount).render(<StudioSelect mount={mount} config={config} />);
});

Object.entries(checkboxConfigs).forEach(([id, config]) => {
  const mount = document.getElementById(id);
  if (mount) createRoot(mount).render(<StudioCheckbox mount={mount} config={config} />);
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

// ===== ThoughtChain（工具调用 / 推理 / 结果的多阶段执行摘要）=====
const thoughtChainRoots = new WeakMap();

function StudioThoughtChain({ mount, initial }) {
  const [state, setState] = useState(initial);

  useEffect(() => {
    const sync = (event) => {
      if (event.detail?.id !== mount.id) return;
      setState({ ...event.detail.data });
    };
    window.addEventListener('studio-thought-chain-sync', sync);
    return () => window.removeEventListener('studio-thought-chain-sync', sync);
  }, [mount]);

  const steps = Array.isArray(state?.steps) ? state.steps : [];
  return (
    <ThoughtChain title={state?.title || 'Agent 执行过程'}>
      {steps.map((step) => {
        const Icon = THOUGHT_KIND_ICONS[step.kind];
        return (
          <ThoughtChainItem
            key={step.id}
            itemKey={step.id}
            title={step.title}
            status={step.status || 'default'}
            icon={Icon ? <Icon /> : undefined}
            maxHeight={step.maxHeight}
            overflow={step.maxHeight ? 'scroll' : undefined}
          >
            <Markdown content={String(step.content ?? '')} size="small" wrap openLinksInNewTab />
          </ThoughtChainItem>
        );
      })}
    </ThoughtChain>
  );
}

window.mountStudioThoughtChain = (mount, data = {}) => {
  if (!mount) return;
  const root = thoughtChainRoots.get(mount) ?? createRoot(mount);
  thoughtChainRoots.set(mount, root);
  mount.dataset.component = 've-thought-chain';
  root.render(<StudioThoughtChain mount={mount} initial={data} />);
};

window.updateStudioThoughtChain = (mount, data = {}) => {
  if (!mount) return;
  window.dispatchEvent(new CustomEvent('studio-thought-chain-sync', {
    detail: { id: mount.id, data },
  }));
};

window.unmountStudioThoughtChain = (mount) => {
  const root = thoughtChainRoots.get(mount);
  if (!root) return;
  root.unmount();
  thoughtChainRoots.delete(mount);
};

// ===== ArtifactCard（生成产物：HTML / 代码 / 文档等）=====
const artifactRoots = new WeakMap();

window.mountStudioArtifact = (mount, options = {}) => {
  if (!mount) return;
  const root = artifactRoots.get(mount) ?? createRoot(mount);
  artifactRoots.set(mount, root);
  mount.dataset.component = 've-artifact-card';
  const emit = (action) => mount.dispatchEvent(new CustomEvent('studio-artifact-action', {
    bubbles: true,
    detail: { action, id: options.id },
  }));
  root.render(
    <ArtifactCard
      type={options.type || 'html'}
      title={options.title || '产物'}
      description={options.description}
      byte={typeof options.byte === 'number' ? options.byte : undefined}
      src={options.src}
      onCardClick={() => emit('open')}
      actions={(
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
          <Button type="text" aria-label="新窗口打开" onClick={() => emit('open')}>
            <IconOpenNewWindow size={16} />
          </Button>
          <Button type="text" aria-label="下载" onClick={() => emit('download')}>
            <IconDownload size={16} />
          </Button>
        </span>
      )}
    />,
  );
};

window.unmountStudioArtifact = (mount) => {
  const root = artifactRoots.get(mount);
  if (!root) return;
  root.unmount();
  artifactRoots.delete(mount);
};

// ===== Markdown（产物预览抽屉的「预览」tab 渲染）=====
const markdownRoots = new WeakMap();

window.mountStudioMarkdown = (mount, options = {}) => {
  if (!mount) return;
  const root = markdownRoots.get(mount) ?? createRoot(mount);
  markdownRoots.set(mount, root);
  mount.dataset.component = 've-markdown';
  root.render(
    <Markdown
      content={String(options.content ?? '')}
      size={options.size || 'medium'}
      wrap
      escapeRawHtml
      openLinksInNewTab
    />,
  );
};

window.unmountStudioMarkdown = (mount) => {
  const root = markdownRoots.get(mount);
  if (!root) return;
  root.unmount();
  markdownRoots.delete(mount);
};

window.dispatchEvent(new CustomEvent('studio-react-ready'));
