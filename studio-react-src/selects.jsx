import { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Select, SelectItem } from '@ve-design/react';
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
