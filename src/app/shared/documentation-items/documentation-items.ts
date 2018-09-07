import {Injectable} from '@angular/core';

export interface DocItem {
  id: string;
  name: string;
  summary?: string;
  packageName?: string;
  examples?: string[];
}

export interface DocCategory {
  id: string;
  name: string;
  items: DocItem[];
  summary?: string;
}

export interface DocSection {
  name: string;
  summary: string;
}

const CDK = 'cdk';
const COMPONENTS = 'components';
export const SECTIONS: {[key: string]: DocSection} = {
  [COMPONENTS]: {
    name: '组件',
    summary: 'Angular Material 包含一组控件，这些控件都基于 Material Design 规范实现了一些共同的交互模式。'
  },
  [CDK]: {
    name: 'CDK',
    summary: '组件开发工具包（CDK）是一组工具库，它们实现了共同的交互模式，同时对其外观不做任何假设。' +
      '它代表了 Angular Material 库中一些核心功能的抽象，没有使用任何专属于 Material Design 的样式。' +
      '你可以将 CDK 看做经过充分测试的空白库，并基于它来开发你的自定义组件。'
  },
};


const DOCS: {[key: string]: DocCategory[]} = {
  [COMPONENTS]: [
    {
      id: 'forms',
      name: '表单控件',
      summary: '一些用于收集和验证用户输入的控件',
      items: [
        {
          id: 'autocomplete',
          name: '自动完成 (Auto complete)',
          summary: '提供与用户输入有关联的选项。',
          examples: [
            'autocomplete-overview',
            'autocomplete-simple',
            'autocomplete-display',
            'autocomplete-filter',
            'autocomplete-optgroup',
            'autocomplete-auto-active-first-option',
          ]
        },
        {
          id: 'checkbox',
          name: '检查框 (Check box)',
          summary: '获取用户输入的布尔值，且支持未决状态。',
          examples: ['checkbox-configurable']
        },
        {
          id: 'datepicker',
          name: '日期选择器 (Date picker)',
          summary: '捕获日期，不关心其内部表示方式。',
          examples: [
            'datepicker-overview',
            'datepicker-start-view',
            'datepicker-value',
            'datepicker-min-max',
            'datepicker-filter',
            'datepicker-events',
            'datepicker-disabled',
            'datepicker-touch',
            'datepicker-api',
            'datepicker-locale',
            'datepicker-moment',
            'datepicker-formats',

          ]
        },
        {
          id: 'form-field',
          name: '表单字段 (Form field)',
          summary: '包装表单字段，以便可以让它们的显示保持一致。',
          examples: [
            'form-field-overview',
            'form-field-label',
            'form-field-hint',
            'form-field-error',
            'form-field-prefix-suffix',
            'form-field-theming',
            'form-field-custom-control',
          ]
        },
        {
          id: 'input',
          name: '输入框 (Input)',
          summary: 'Enables native inputs to be used within a Form field.',
          examples: [
            'input-overview',
            'input-error-state-matcher',
            'text-field-autosize-textarea',
            'input-clearable',
            'input-errors',
            'input-form',
            'input-hint',
            'input-prefix-suffix',
          ]
        },
        {
          id: 'radio',
          name: '单选按钮 (Radio Button)',
          summary: 'Allows the user to select one option from a group.',
          examples: ['radio-ng-model']
        },
        {
          id: 'select',
          name: '选择框 (Select)',
          summary: 'Allows the user to select one or more options using a dropdown.',
          examples: [
            'select-overview',
            'select-value-binding',
            'select-form',
            'select-hint-error',
            'select-disabled',
            'select-reset',
            'select-optgroup',
            'select-multiple',
            'select-custom-trigger',
            'select-no-ripple',
            'select-panel-class',
            'select-error-state-matcher',
          ]
        },
        {
          id: 'slider',
          name: '滑块 (Slider)',
          summary: 'Allows the user to input a value by dragging along a slider.',
          examples: ['slider-configurable']
        },
        {
          id: 'slide-toggle',
          name: '滑块开关 (Slide toggle)',
          summary: 'Captures boolean values as a clickable and draggable switch.',
          examples: ['slide-toggle-configurable']
        },
      ]
    },
    {
      id: 'nav',
      name: '导航',
      summary: '菜单、侧边栏、工具条，用于组织你的内容',
      items: [
        {
          id: 'menu',
          name: '菜单 (Menu)',
          summary: 'A floating panel of nestable options.',
          examples: [
            'menu-overview',
            'menu-icons',
            'nested-menu'
          ]
        },
        {
          id: 'sidenav',
          name: '侧边导航 (Side nav)',
          summary: 'A container for content that is fixed to one side of the screen.',
          examples: [
            'sidenav-overview',
            'sidenav-drawer-overview',
            'sidenav-position',
            'sidenav-open-close',
            'sidenav-mode',
            'sidenav-disable-close',
            'sidenav-autosize',
            'sidenav-fixed',
            'sidenav-responsive'
          ]
        },
        {
          id: 'toolbar',
          name: '工具条 (Toolbar)',
          summary: 'A container for top-level titles and controls.',
          examples: ['toolbar-multirow']
        },
      ]
    },
    {
      id: 'layout',
      name: '布局',
      summary: '用于表示内容的基本构造块',
      items: [
        {
          id: 'card',
          name: '卡片 (Card)',
          summary: 'A styled container for pieces of itemized content.',
          examples: ['card-fancy']
        },
        {
          id: 'divider',
          name: '分隔器 (Divider)',
          summary: 'A vertical or horizontal visual divider.',
          examples: ['divider-overview']
        },
        {
          id: 'expansion',
          name: '可展开面板 (Expansion Panel)',
          summary: 'A container which can be expanded to reveal more content.',
          examples: ['expansion-overview', 'expansion-steps']
        },
        {
          id: 'grid-list',
          name: '网格列表 (Grid list)',
          summary: 'A flexible structure for presenting content items in a grid.',
          examples: ['grid-list-dynamic']
        },
        {
          id: 'list',
          name: '列表 (List)',
          summary: 'Presents conventional lists of items.',
          examples: ['list-sections']
        },
        {
          id: 'stepper',
          name: '步进器 (Stepper)',
          summary: 'Presents content as steps through which to progress.',
          examples: ['stepper-overview']
        },
        {
          id: 'tabs',
          name: '分页标签 (Tabs)',
          summary: 'Only presents one view at a time from a provided set of views.',
          examples: [
            'tab-group-basic',
            'tab-group-custom-label',
            'tab-group-dynamic-height',
            'tab-group-dynamic',
            'tab-group-header-below',
            'tab-group-lazy-loaded',
            'tab-group-stretched',
            'tab-group-theme',
            'tab-group-async',
            'tab-nav-bar-basic',
          ]},
        {
          id: 'tree',
          name: '树 (Tree)',
          summary: 'Presents hierarchical content as an expandable tree.',
          examples: [
          'tree-dynamic',
          'tree-flat-overview',
          'tree-checklist',
          'tree-nested-overview',
          'tree-loadmore',
        ]},
      ]
    },
    {
      id: 'buttons',
      name: '按钮与指示器',
      summary: '按钮、开关、状态指示器、进度指示器',
      items: [
        {
          id: 'button',
          name: '按钮 (Button)',
          summary: 'An interactive button with a range of presentation options.',
          examples: ['button-types']},
        {
          id: 'button-toggle',
          name: '开关按钮 (Button toggle)',
          summary: 'A groupable on/off toggle for enabling and disabling options.',
          examples: ['button-toggle-exclusive']
        },
        {
          id: 'badge',
          name: '徽章 (Badge)',
          summary: 'A small value indicator that can be overlaid on another object.',
          examples: ['badge-overview']
        },
        {
          id: 'chips',
          name: '活页夹 (Chips)',
          summary: 'Presents a list of items as a set of small, tactile entities.',
          examples: ['chips-stacked']
        },
        {
          id: 'icon',
          name: '图标 (Icon)',
          summary: 'Renders a specified icon.',
          examples: ['icon-svg']
        },
        {
          id: 'progress-spinner',
          name: '进度圈 (Progress spinner)',
          summary: 'A circular progress indicator.',
          examples: ['progress-spinner-configurable']
        },
        {
          id: 'progress-bar',
          name: '进度条 (Progress bar)',
          summary: 'A linear progress indicator.',
          examples: ['progress-bar-configurable']
        },
      ]
    },
    {
      id: 'modals',
      name: '弹框与模态框',
      summary: '可以动态显示和隐藏的浮层组件',
      items: [
        {
          id: 'bottom-sheet',
          name: '底部操作表 (Bottom sheet)',
          summary: 'A large interactive panel primarily for mobile devices.',
          examples: ['bottom-sheet-overview']
        },
        {
          id: 'dialog',
          name: '对话框 (Dialog)',
          summary: 'A configurable modal that displays dynamic content.',
          examples: ['dialog-overview']
        },
        {
          id: 'snack-bar',
          name: '快餐条 (Snack bar)',
          summary: 'Displays short actionable messages as an uninvasive alert.',
          examples: ['snack-bar-component']
        },
        {
          id: 'tooltip',
          name: '提示框 (Tooltip)',
          summary: 'Displays floating content when an object is hovered.',
          examples: [
            'tooltip-overview',
            'tooltip-position',
            'tooltip-custom-class',
            'tooltip-delay',
            'tooltip-disabled',
            'tooltip-manual',
            'tooltip-message',
            'tooltip-modified-defaults',
            'tooltip-auto-hide',
          ]
        },
      ]
    },
    {
      id: 'tables',
      name: '数据表',
      summary: '用于显示表格型数据并与之交互的工具',
      items: [
        {
          id: 'paginator',
          name: '分页器 (Paginator)',
          summary: 'Controls for displaying paged data.',
          examples: ['paginator-configurable']
        },
        {
          id: 'sort',
          name: '排序头 (Sort Header)',
          summary: 'Allows the user to configure how tabular data is sorted.',
          examples: ['sort-overview']
        },
        {
          id: 'table',
          name: '表格 (Table)',
          summary: 'A configurable component for displaying tabular data.',
          examples: [
            'table-basic',
            'table-basic-flex',
            'table-dynamic-columns',
            'table-expandable-rows',
            'table-filtering',
            'table-footer-row',
            'table-http',
            'table-multiple-header-footer',
            'table-overview',
            'table-pagination',
            'table-row-context',
            'table-selection',
            'table-sorting',

            // Expose these examples with 6.3.0 release (sticky table)
            // 'table-sticky-column',
            // 'table-sticky-footer',
            // 'table-sticky-header',
        ]},
      ]
    }
  ],
  [CDK] : [
    {
      id: 'component-composition',
      name: '常用行为',
      summary: '用于实现应用中常用功能的工具',
      items: [
        {
          id: 'a11y',
          name: '可访问性 (A11y)',
          summary: 'Utilities for screen readers, focus and more.',
          examples: []
        },
        {
          id: 'bidi',
          name: '文字方向 (Bidirectionality)',
          summary: 'Utilities to respond to changes in LTR/RTL layout direction.',
          examples: []
        },
        {
          id: 'layout',
          name: '布局 (Layout)',
          summary: 'Utilities to respond to changes in viewport size.',
          examples: []
        },
        {
          id: 'observers',
          name: '观察者 (Observers)',
          summary: 'Utilities to respond to changes to element properties.',
          examples: []
        },
        {
          id: 'overlay',
          name: '浮层 (Overlay)',
          summary: 'Utilities for dynamically displaying floating content.',
          examples: []
        },
        {
          id: 'platform',
          name: '平台 (Platform)',
          summary: 'Provides information about the user\'s platform.',
          examples: []
        },
        {
          id: 'portal',
          name: '门户 (Portal)',
          summary: 'Utilities for dynamically displaying content into a target.',
          examples: []
        },
        {
          id: 'scrolling',
          name: '滚动 (Scrolling)',
          summary: 'Directives for managing scroll events.',
          examples: []
        },
        {
          id: 'text-field',
          name: '文本字段 (Text field)',
          summary: 'Utilities for working with text input fields.',
          examples: []
        },
      ]
    },
    {
      id: 'components',
      name: '组件',
      summary: '不带样式的组件，具有一些实用功能。',
      items: [
        {id: 'stepper',
          name: '步进器 (Stepper)',
          summary: 'Presents content as steps through which to progress.',
          examples: []
        },
        {
          id: 'table',
          name: '表格 (Table)',
          summary: 'A configurable component for displaying tabular data.',
          examples: []
        },
        {
          id: 'tree',
          name: '树 (Tree)',
          summary: 'Presents hierarchical content as an expandable tree.',
          examples: []
        },
      ]
    },
    // TODO(jelbourn): re-add utilities and a11y as top-level categories once we can generate
    // their API docs with dgeni. Currently our setup doesn't generate API docs for constants
    // and standalone functions (much of the utilities) and we have no way of generating API
    // docs more granularly than directory-level (within a11y) (same for viewport).
  ]
};

for (let category of DOCS[COMPONENTS]) {
  for (let doc of category.items) {
    doc.packageName = 'material';
  }
}

for (let category of DOCS[CDK]) {
  for (let doc of category.items) {
    doc.packageName = 'cdk';
  }
}

const ALL_COMPONENTS = DOCS[COMPONENTS].reduce(
  (result, category) => result.concat(category.items), []);
const ALL_CDK = DOCS[CDK].reduce((result, cdk) => result.concat(cdk.items), []);
const ALL_DOCS = ALL_COMPONENTS.concat(ALL_CDK);
const ALL_CATEGORIES = DOCS[COMPONENTS].concat(DOCS[CDK]);

@Injectable()
export class DocumentationItems {
  getCategories(section: string): DocCategory[] {
    return DOCS[section];
  }

  getItems(section: string): DocItem[] {
    if (section === COMPONENTS) {
      return ALL_COMPONENTS;
    }
    if (section === CDK) {
      return ALL_CDK;
    }
    return [];
  }

  getItemById(id: string, section: string): DocItem {
    const sectionLookup = section == 'cdk' ? 'cdk' : 'material';
    return ALL_DOCS.find(doc => doc.id === id && doc.packageName == sectionLookup);
  }

  getCategoryById(id: string): DocCategory {
    return ALL_CATEGORIES.find(c => c.id == id);
  }
}
