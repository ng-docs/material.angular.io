import {Injectable} from '@angular/core';

export interface DocItem {
  id: string;
  name: string;
  nameCn?: string;
  summary?: string;
  summaryCn?: string;
  packageName?: string;
  examples?: string[];
}

export interface DocCategory {
  id: string;
  name: string;
  nameCn?: string;
  items: DocItem[];
  summary?: string;
  summaryCn?: string;
}

export interface DocSection {
  name: string;
  nameCn?: string;
  summary: string;
  summaryCn?: string;
}

const CDK = 'cdk';
const COMPONENTS = 'components';
export const SECTIONS: {[key: string]: DocSection} = {
  [COMPONENTS]: {
    name: 'Components',
    nameCn: '组件',
    summaryCn: 'Angular Material 包含一组控件，这些控件都基于 Material Design 规范实现了一些共同的交互模式。',
    summary: 'Angular Material comprises a range of components which implement common ' +
    'interaction patterns according to the Material Design specification.'
  },
  [CDK]: {
    name: 'CDK',
    summaryCn: '组件开发工具包（CDK）是一组工具库，它们实现了共同的交互模式，同时对其外观不做任何假设。' +
      '它代表了 Angular Material 库中一些核心功能的抽象，没有使用任何专属于 Material Design 的样式。' +
      '你可以将 CDK 看做经过充分测试的空白库，并基于它来开发你的自定义组件。',
    summary: 'The Component Dev Kit (CDK) is a set of tools that implement common interaction ' +
    'patterns whilst being unopinionated about their presentation. It represents an abstraction ' +
    'of the core functionalities found in the Angular Material library, without any styling ' +
    'specific to Material Design. Think of the CDK as a blank state of well-tested functionality ' +
    'upon which you can develop your own bespoke components.'
  },
};


const DOCS: {[key: string]: DocCategory[]} = {
  [COMPONENTS]: [
    {
      id: 'forms',
      name: 'Form Controls',
      nameCn: '表单控件',
      summaryCn: '一些用于收集和验证用户输入的控件',
      summary: 'Controls that collect and validate user input.',
      items: [
        {
          id: 'autocomplete',
          name: 'Autocomplete',
          nameCn: '自动完成',
          summaryCn: '提供与用户输入有关联的选项。',
          summary: 'Suggests relevant options as the user types.',
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
          name: 'Checkbox',
          nameCn: '检查框',
          summaryCn: '获取用户输入的布尔值，且支持未决状态。',
          summary: 'Captures boolean input with an optional indeterminate mode.',
          examples: ['checkbox-configurable']
        },
        {
          id: 'datepicker',
          name: 'Datepicker',
          nameCn: '日期选择器',
          summaryCn: '捕获日期，和其内部表示形式无关。',
          summary: 'Captures dates, agnostic about their internal representation.',
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
          name: 'Form field',
          nameCn: '表单字段',
          summaryCn: '包装表单字段，来让它们的显示保持一致。',
          summary: 'Wraps input fields so they are displayed consistently.',
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
          name: 'Input',
          nameCn: '输入框',
          summaryCn: '让原生输入框可用于表单字段中。',
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
          name: 'Radio button',
          nameCn: '单选按钮',
          summaryCn: '允许用户从组中显示一个选项。',
          summary: 'Allows the user to select one option from a group.',
          examples: ['radio-ng-model']
        },
        {
          id: 'select',
          name: 'Select',
          nameCn: '选择框',
          summaryCn: '允许用户从下拉框中选择一个或多个选项。',
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
          name: 'Slider',
          nameCn: '滑竿',
          summaryCn: '允许用户以拖曳滑竿的方式输入一个值。',
          summary: 'Allows the user to input a value by dragging along a slider.',
          examples: ['slider-configurable']
        },
        {
          id: 'slide-toggle',
          name: 'Slide toggle',
          nameCn: '滑块开关',
          summaryCn: '以可点击、可拖曳开关的形式捕获一个 boolean 值。',
          summary: 'Captures boolean values as a clickable and draggable switch.',
          examples: ['slide-toggle-configurable']
        },
      ]
    },
    {
      id: 'nav',
      name: 'Navigation',
      nameCn: '导航',
      summaryCn: '菜单、侧边栏、工具栏，用于组织你的内容',
      summary: 'Menus, sidenavs and toolbars that organise your content.',
      items: [
        {
          id: 'menu',
          name: 'Menu',
          nameCn: '菜单',
          summary: 'A floating panel of nestable options.',
          examples: [
            'menu-overview',
            'menu-icons',
            'nested-menu'
          ]
        },
        {
          id: 'sidenav',
          name: 'Sidenav',
          nameCn: '侧边栏',
          summaryCn: '一个固定在屏幕一侧的内容容器。',
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
          name: 'Toolbar',
          nameCn: '工具栏',
          summaryCn: '一个顶级标题和控件的容器。',
          summary: 'A container for top-level titles and controls.',
          examples: ['toolbar-multirow']
        },
      ]
    },
    {
      id: 'layout',
      name: 'Layout',
      nameCn: '布局',
      summaryCn: '用于表示内容的基本构造块',
      summary: 'Essential building blocks for presenting your content.',
      items: [
        {
          id: 'card',
          name: 'Card',
          nameCn: '卡片',
          summaryCn: '用于存放逐项内容的样式化容器。',
          summary: 'A styled container for pieces of itemized content.',
          examples: ['card-fancy']
        },
        {
          id: 'divider',
          name: 'Divider',
          nameCn: '分隔器',
          summaryCn: '垂直或水平的视觉分割器。',
          summary: 'A vertical or horizontal visual divider.',
          examples: ['divider-overview']
        },
        {
          id: 'expansion',
          name: 'Expansion Panel',
          nameCn: '可展开面板',
          summaryCn: '可以展开，以揭示更多内容的容器。',
          summary: 'A container which can be expanded to reveal more content.',
          examples: ['expansion-overview', 'expansion-steps']
        },
        {
          id: 'grid-list',
          name: 'Grid list',
          nameCn: '网格列表',
          summaryCn: '一种在网格中展示逐项内容的灵活结构。',
          summary: 'A flexible structure for presenting content items in a grid.',
          examples: ['grid-list-dynamic']
        },
        {
          id: 'list',
          name: 'List',
          nameCn: '列表',
          summaryCn: '提供传统的条目清单。',
          summary: 'Presents conventional lists of items.',
          examples: ['list-sections']
        },
        {
          id: 'stepper',
          name: 'Stepper',
          nameCn: '步进器',
          summaryCn: '以分步进展的方式呈现内容。',
          summary: 'Presents content as steps through which to progress.',
          examples: ['stepper-overview']
        },
        {
          id: 'tabs',
          name: 'Tabs',
          nameCn: '选项卡',
          summaryCn: '在指定的一组视图中，只同时呈现一个视图',
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
          name: 'Tree',
          nameCn: '树',
          summaryCn: '把一些层次化的内容呈现为一棵可展开的树。',
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
      name: 'Buttons & Indicators',
      nameCn: '按钮与指示器',
      summaryCn: '按钮、开关、状态指示器、进度指示器',
      summary: 'Buttons, toggles, status and progress indicators.',
      items: [
        {
          id: 'button',
          name: 'Button',
          nameCn: '按钮',
          summaryCn: '带有一系列候选项的交互式按钮。',
          summary: 'An interactive button with a range of presentation options.',
          examples: ['button-types']},
        {
          id: 'button-toggle',
          name: 'Button toggle',
          nameCn: '开关按钮',
          summaryCn: '用来启用或禁用候选项的可分组开关。',
          summary: 'A groupable on/off toggle for enabling and disabling options.',
          examples: ['button-toggle-exclusive']
        },
        {
          id: 'badge',
          name: 'Badge',
          nameCn: '徽章',
          summaryCn: '可以挂在其它对象上方的小型数值指示器。',
          summary: 'A small value indicator that can be overlaid on another object.',
          examples: ['badge-overview']
        },
        {
          id: 'chips',
          name: 'Chips',
          nameCn: '芯片',
          summaryCn: '将列表中的条目呈现为一组小的触觉实体。',
          summary: 'Presents a list of items as a set of small, tactile entities.',
          examples: ['chips-stacked']
        },
        {
          id: 'icon',
          name: 'Icon',
          nameCn: '图标',
          summaryCn: '渲染一个指定的图标。',
          summary: 'Renders a specified icon.',
          examples: ['icon-svg']
        },
        {
          id: 'progress-spinner',
          name: 'Progress spinner',
          nameCn: '进度圈',
          summaryCn: '圆形进度指示器。',
          summary: 'A circular progress indicator.',
          examples: ['progress-spinner-configurable']
        },
        {
          id: 'progress-bar',
          name: 'Progress bar',
          nameCn: '进度条',
          summaryCn: '线性进度指示器。',
          summary: 'A linear progress indicator.',
          examples: ['progress-bar-configurable']
        },
      ]
    },
    {
      id: 'modals',
      name: 'Popups & Modals',
      nameCn: '弹框与模态框',
      summaryCn: '可以动态显示和隐藏的浮层组件',
      summary: 'Floating components that can be dynamically shown or hidden.',
      items: [
        {
          id: 'bottom-sheet',
          name: 'Bottom Sheet',
          nameCn: '底部操作表',
          summaryCn: '主要用于移动设备的大型交互面板。',
          summary: 'A large interactive panel primarily for mobile devices.',
          examples: ['bottom-sheet-overview']
        },
        {
          id: 'dialog',
          name: 'Dialog',
          nameCn: '对话框',
          summaryCn: '一个用于显示动态内容的可配置的模态框。',
          summary: 'A configurable modal that displays dynamic content.',
          examples: ['dialog-overview']
        },
        {
          id: 'snack-bar',
          name: 'Snackbar',
          nameCn: '快餐栏',
          summaryCn: '将简短的可操作消息显示为一个无打扰警报。',
          summary: 'Displays short actionable messages as an uninvasive alert.',
          examples: ['snack-bar-component']
        },
        {
          id: 'tooltip',
          name: 'Tooltip',
          nameCn: '提示框',
          summaryCn: '当鼠标移到某个对象之上时显示浮动内容。',
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
      name: 'Data table',
      nameCn: '数据表',
      summaryCn: '用于显示表格型数据并与之交互的工具',
      summary: 'Tools for displaying and interacting with tabular data.',
      items: [
        {
          id: 'paginator',
          name: 'Paginator',
          nameCn: '分页器',
          summaryCn: '用于显示分页信息的控件。',
          summary: 'Controls for displaying paged data.',
          examples: ['paginator-configurable']
        },
        {
          id: 'sort',
          name: 'Sort header',
          nameCn: '排序头',
          summaryCn: '让用户可以指定表格型数据该如何排序。',
          summary: 'Allows the user to configure how tabular data is sorted.',
          examples: ['sort-overview']
        },
        {
          id: 'table',
          name: 'Table',
          nameCn: '表格',
          summaryCn: '用于显示表格型数据的可配置组件。',
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
      name: 'Common Behaviors',
      nameCn: '常用行为',
      summaryCn: '用于实现应用中常用功能的工具',
      summary: 'Tools for implementing common application features.',
      items: [
        {
          id: 'a11y',
          name: 'Accessibility',
          nameCn: '可访问性',
          summaryCn: '供屏幕阅读器使用的工具，如焦点控制等。',
          summary: 'Utilities for screen readers, focus and more.',
          examples: []
        },
        {
          id: 'bidi',
          name: 'Bidirectionality',
          nameCn: '文字方向',
          summaryCn: '用于响应 LTR/RTL 布局方向变化的工具。',
          summary: 'Utilities to respond to changes in LTR/RTL layout direction.',
          examples: []
        },
        {
          id: 'layout',
          name: 'Layout',
          nameCn: '布局',
          summaryCn: '用于响应视口尺寸变化的工具。',
          summary: 'Utilities to respond to changes in viewport size.',
          examples: []
        },
        {
          id: 'observers',
          name: 'Observers',
          nameCn: '观察者',
          summary: 'Utilities to respond to changes to element properties.',
          examples: []
        },
        {
          id: 'overlay',
          name: 'Overlay',
          nameCn: '浮层',
          summaryCn: '用于动态显示浮动内容的工具。',
          summary: 'Utilities for dynamically displaying floating content.',
          examples: []
        },
        {
          id: 'platform',
          name: 'Platform',
          nameCn: '平台',
          summaryCn: '提供关于用户所用平台的信息。',
          summary: 'Provides information about the user\'s platform.',
          examples: []
        },
        {
          id: 'portal',
          name: 'Portal',
          nameCn: '门户',
          summaryCn: '用于把内容动态显示到目标中的工具。',
          summary: 'Utilities for dynamically displaying content into a target.',
          examples: []
        },
        {
          id: 'scrolling',
          name: 'Scrolling',
          nameCn: '滚动',
          summaryCn: '用于管理滚动事件的指令。',
          summary: 'Directives for managing scroll events.',
          examples: []
        },
        {
          id: 'text-field',
          name: 'Text field',
          nameCn: '文本字段',
          summaryCn: '用来和文本输入框协同工作的工具。',
          summary: 'Utilities for working with text input fields.',
          examples: []
        },
      ]
    },
    {
      id: 'components',
      name: 'Components',
      nameCn: '组件',
      summaryCn: '不带样式的组件，具有一些实用功能。',
      summary: 'Unstyled components with useful functionality.',
      items: [
        {id: 'stepper',
          name: 'Stepper',
          nameCn: '步进器',
          summaryCn: '以分步进展的方式呈现内容。',
          summary: 'Presents content as steps through which to progress.',
          examples: []
        },
        {
          id: 'table',
          name: 'Table',
          nameCn: '表格',
          summaryCn: '显示表格型数据的可配置组件。',
          summary: 'A configurable component for displaying tabular data.',
          examples: []
        },
        {
          id: 'tree',
          name: 'Tree',
          nameCn: '树',
          summaryCn: '把一些层次化的内容呈现为一棵可展开的树。',
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
