import {Injectable} from '@angular/core';
import {EXAMPLE_COMPONENTS} from '@angular/components-examples';

export interface AdditionalApiDoc {
  name: string;
  path: string;
}

export interface ExampleSpecs {
  prefix: string;
  exclude?: string[];
}

export interface DocItem {
  /** Id of the doc item. Used in the URL for linking to the doc. */
  id: string;
  /** Display name of the doc item. */
  name: string;
  /** Short summary of the doc item. */
  summary?: string;
  /** Package which contains the doc item. */
  packageName?: string;
  /** Specifications for which examples to be load. */
  exampleSpecs: ExampleSpecs;
  /** List of examples. */
  examples?: string[];
  /** Optional id of the API document file. */
  apiDocId?: string;
  /** Optional path to the overview file of this doc item. */
  overviewPath?: string;
  /** List of additional API docs. */
  additionalApiDocs?: AdditionalApiDoc[];
}

export interface DocSection {
  name: string;
  summary: string;
}

const exampleNames = Object.keys(EXAMPLE_COMPONENTS);
const CDK = 'cdk';
const COMPONENTS = 'components';
export const SECTIONS: { [key: string]: DocSection } = {
  [COMPONENTS]: {
    name: '组件',
    summary: `Angular Material 包含一大组基于 <a href="https://material.io/components">Material Design 规范</a>的 UI 组件。`,
  },
  [CDK]: {
    name: '组件开发包',
    summary: '组件开发工具包（CDK）是一组用来构建 UI 组件的行为原语。',
  },
};


const DOCS: { [key: string]: DocItem[] } = {
  [COMPONENTS]: [
    {
      id: 'autocomplete',
      name: '自动完成',
      summary: '提供与用户输入有关联的选项。',
      exampleSpecs: {
        prefix: 'autocomplete-',
      },
      additionalApiDocs: [{name: 'Testing', path: 'material-autocomplete-testing.html'}],
    },
    {
      id: 'badge',
      name: '徽章',
      summary: '可以挂在其它对象上方的小型数值指示器。',
      exampleSpecs: {
        prefix: 'badge-',
      },
      additionalApiDocs: [{name: 'Testing', path: 'material-badge-testing.html'}],
    },
    {
      id: 'bottom-sheet',
      name: '底部操作表',
      summary: '主要用于移动设备的大型交互面板。',
      exampleSpecs: {
        prefix: 'bottom-sheet-',
      },
      additionalApiDocs: [{name: 'Testing', path: 'material-bottom-sheet-testing.html'}],
    },
    {
      id: 'button',
      name: '按钮',
      summary: '带有一系列候选项的交互式按钮。',
      exampleSpecs: {
        prefix: 'button-',
        exclude: ['button-toggle-']
      },
      additionalApiDocs: [{name: 'Testing', path: 'material-button-testing.html'}],
    },
    {
      id: 'button-toggle',
      name: '开关按钮',
      summary: '用来启用或禁用候选项的可分组开关。',
      exampleSpecs: {
        prefix: 'button-toggle-',
      },
      additionalApiDocs: [{name: 'Testing', path: 'material-button-toggle-testing.html'}],
    },
    {
      id: 'card',
      name: '卡片',
      summary: '用于存放逐项内容的样式化容器。',
      exampleSpecs: {
        prefix: 'card-',
      },
      additionalApiDocs: [{name: 'Testing', path: 'material-card-testing.html'}],
    },
    {
      id: 'checkbox',
      name: '检查框',
      summary: '获取用户输入的布尔值，且支持未决状态。',
      exampleSpecs: {
        prefix: 'checkbox-',
      },
      additionalApiDocs: [{name: 'Testing', path: 'material-checkbox-testing.html'}],
    },
    {
      id: 'chips',
      name: '纸片',
      summary: '将列表中的条目呈现为一组小的触觉实体。',
      exampleSpecs: {
        prefix: 'chips-',
      },
      additionalApiDocs: [{name: 'Testing', path: 'material-chips-testing.html'}],
    },
    {
      id: 'core',
      name: '核心',
      summary: '供库中其它组件使用的可复用部分。',
      exampleSpecs: {
        prefix: 'core-',
      },
      additionalApiDocs: [{name: 'Testing', path: 'material-core-testing.html'}],
    },
    {
      id: 'datepicker',
      name: '日期选择器',
      summary: '捕获日期，和其内部表示形式无关。',
      exampleSpecs: {
        prefix: 'date',
      },
      additionalApiDocs: [{name: 'Testing', path: 'material-datepicker-testing.html'}],
    },
    {
      id: 'dialog',
      name: '对话框',
      summary: '一个用于显示动态内容的可配置的模态框。',
      exampleSpecs: {
        prefix: 'dialog-',
      },
      additionalApiDocs: [{name: 'Testing', path: 'material-dialog-testing.html'}],
    },
    {
      id: 'divider',
      name: '分割器',
      summary: '垂直或水平的视觉分割器。',
      exampleSpecs: {
        prefix: 'divider-',
      },
      additionalApiDocs: [{name: 'Testing', path: 'material-divider-testing.html'}],
    },
    {
      id: 'expansion',
      name: '可展开面板',
      summary: '可以展开，以揭示更多内容的容器。',
      exampleSpecs: {
        prefix: 'expansion-',
      },
      additionalApiDocs: [{name: 'Testing', path: 'material-expansion-testing.html'}],
    },
    {
      id: 'form-field',
      name: '表单字段',
      summary: '包装表单字段，来让它们的显示保持一致。',
      exampleSpecs: {
        prefix: 'form-field-',
      },
      additionalApiDocs: [{name: 'Testing', path: 'material-form-field-testing.html'}],
    },
    {
      id: 'grid-list',
      name: '网格列表',
      summary: '一种在网格中展示逐项内容的灵活结构。',
      exampleSpecs: {
        prefix: 'grid-list-',
      },
      additionalApiDocs: [{name: 'Testing', path: 'material-grid-list-testing.html'}],
    },
    {
      id: 'icon',
      name: '图标',
      summary: '渲染一个指定的图标。',
      exampleSpecs: {
        prefix: 'icon-',
      },
      additionalApiDocs: [{name: 'Testing', path: 'material-icon-testing.html'}],
    },
    {
      id: 'input',
      name: '输入框',
      summary: '让原生输入框可用于表单字段中。',
      exampleSpecs: {
        prefix: 'input-',
      },
      additionalApiDocs: [{name: 'Testing', path: 'material-input-testing.html'}],
    },
    {
      id: 'list',
      name: '列表',
      summary: '提供传统的条目清单。',
      exampleSpecs: {
        prefix: 'list-',
      },
      additionalApiDocs: [{name: 'Testing', path: 'material-list-testing.html'}],
    },
    {
      id: 'menu',
      name: '菜单',
      summary: '一些嵌套选项的浮动面板。',
      exampleSpecs: {
        prefix: 'menu-',
      },
      additionalApiDocs: [{name: 'Testing', path: 'material-menu-testing.html'}],
    },
    {
      id: 'paginator',
      name: '分页器',
      summary: '用于显示分页信息的控件。',
      exampleSpecs: {
        prefix: 'paginator-',
      },
      additionalApiDocs: [{name: 'Testing', path: 'material-paginator-testing.html'}],
    },
    {
      id: 'progress-bar',
      name: '进度条',
      summary: '线性进度指示器。',
      exampleSpecs: {
        prefix: 'progress-bar-',
      },
      additionalApiDocs: [{name: 'Testing', path: 'material-progress-bar-testing.html'}],
    },
    {
      id: 'progress-spinner',
      name: '进度圈',
      summary: '圆形进度指示器。',
      exampleSpecs: {
        prefix: 'progress-spinner-',
      },
      additionalApiDocs: [{name: 'Testing', path: 'material-progress-spinner-testing.html'}],
    },
    {
      id: 'radio',
      name: '单选按钮',
      summary: '允许用户从组中显示一个选项。',
      exampleSpecs: {
        prefix: 'radio-',

      },
      additionalApiDocs: [{name: 'Testing', path: 'material-radio-testing.html'}],
    },
    {
      id: 'ripple',
      overviewPath: 'material/core/ripple/ripple.html',
      name: '涟漪',
      summary: '用于添加 Material Design 涟漪效果的指令',
      exampleSpecs: {
        prefix: 'ripple-',
      },
    },
    {
      id: 'select',
      name: '选择框',
      summary: '允许用户从下拉框中选择一个或多个选项。',
      exampleSpecs: {
        prefix: 'select-',
      },
      additionalApiDocs: [{name: 'Testing', path: 'material-select-testing.html'}],
    },
    {
      id: 'sidenav',
      name: '侧边栏',
      summary: '一个固定在屏幕一侧的内容容器。',
      exampleSpecs: {
        prefix: 'sidenav-',
      },
      additionalApiDocs: [{name: 'Testing', path: 'material-sidenav-testing.html'}],
    },
    {
      id: 'slide-toggle',
      name: '滑块开关',
      summary: '以可点击、可拖曳开关的形式捕获一个 boolean 值。',
      exampleSpecs: {
        prefix: 'slide-toggle-',
      },
      additionalApiDocs: [{name: 'Testing', path: 'material-slide-toggle-testing.html'}],
    },
    {
      id: 'slider',
      name: '滑杆',
      summary: '允许用户以拖曳滑杆的方式输入一个值。',
      exampleSpecs: {
        prefix: 'slider-',
      },
      additionalApiDocs: [{name: 'Testing', path: 'material-slider-testing.html'}],
    },
    {
      id: 'snack-bar',
      name: '快餐栏',
      summary: '将简短的可操作消息显示为一个无打扰警报。',
      exampleSpecs: {
        prefix: 'snack-bar-',
      },
      additionalApiDocs: [{name: 'Testing', path: 'material-snack-bar-testing.html'}],
    },
    {
      id: 'sort',
      name: '排序头',
      summary: '让用户可以指定表格型数据该如何排序。',
      exampleSpecs: {
        prefix: 'sort-',
      },
      additionalApiDocs: [{name: 'Testing', path: 'material-sort-testing.html'}],
    },
    {
      id: 'stepper',
      name: '步进器',
      summary: '以分步进展的方式呈现内容。',
      exampleSpecs: {
        prefix: 'stepper-',
      },
      additionalApiDocs: [{name: 'Testing', path: 'material-stepper-testing.html'}],
    },
    {
      id: 'table',
      name: '表格',
      summary: '用于显示表格型数据的可配置组件。',
      exampleSpecs: {
        prefix: 'table-',
      },
      additionalApiDocs: [{name: 'Testing', path: 'material-table-testing.html'}],
    },
    {
      id: 'tabs',
      name: '选项卡',
      summary: '在指定的一组视图中，只同时呈现一个视图',
      exampleSpecs: {
        prefix: 'tab-',
      },
      additionalApiDocs: [{name: 'Testing', path: 'material-tabs-testing.html'}],
    },
    {
      id: 'toolbar',
      name: '工具栏',
      summary: '一个顶级标题和控件的容器。',
      exampleSpecs: {
        prefix: 'toolbar-',
      },
      additionalApiDocs: [{name: 'Testing', path: 'material-toolbar-testing.html'}],
    },
    {
      id: 'tooltip',
      name: '工具提示',
      summary: '当鼠标移到某个对象之上时显示浮动内容。',
      exampleSpecs: {
        prefix: 'tooltip-',
      },
      additionalApiDocs: [{name: 'Testing', path: 'material-tooltip-testing.html'}],
    },
    {
      id: 'tree',
      name: '树',
      summary: '把一些层次化的内容呈现为一棵可展开的树。',
      exampleSpecs: {
        prefix: 'tree-',
      },
    },
  ],
  [CDK]: [
    {
      id: 'a11y',
      name: '无障碍性',
      summary: '供屏幕阅读器使用的工具，如焦点控制等。',
      exampleSpecs: {
        prefix: 'focus-monitor-',
      },
    },
    {
      id: 'accordion',
      name: '手风琴',
      summary: '带有一个或多个可展开区段的组件',
      exampleSpecs: {
        prefix: 'cdk-accordion-',
      },
    },
    {
      id: 'bidi',
      name: '文字方向',
      summary: '用于响应 LTR/RTL 布局方向变化的工具。',
      exampleSpecs: {
        prefix: 'cdk-bidi-',
      },
    },
    {
      id: 'clipboard',
      name: '剪贴板',
      summary: '帮你使用系统剪贴板的工具。',
      exampleSpecs: {
        prefix: 'cdk-clipboard-',
      },
    },
    {
      id: 'coercion',
      name: '强制类型转换',
      summary: '用于把 @Input 转换成特定类型的工具函数。',
      exampleSpecs: {
        prefix: 'cdk-coercion-',
      },
    },
    {
      id: 'collections',
      name: '集合',
      summary: '用于管理集合的实用工具。',
      exampleSpecs: {
        prefix: 'cdk-collections-',
      },
    },
    {
      id: 'dialog',
      name: '对话框',
      summary: '用于构建无障碍化对话框的指令。',
      exampleSpecs: {
        prefix: 'cdk-dialog-',
      },
    },
    {
      id: 'drag-drop',
      name: '拖放',
      summary: '一些支持拖放型交互方式的指令',
      exampleSpecs: {
        prefix: 'cdk-drag-drop-',
      },
    },
    {
      id: 'layout',
      name: '布局',
      summary: '用于响应视口尺寸变化的工具。',
      exampleSpecs: {
        prefix: 'cdk-layout-',
      },
    },
    {
      id: 'listbox',
      name: '列表框',
      summary: '用于构建无障碍化列表框的指令。',
      exampleSpecs: {
        prefix: 'cdk-listbox-',
      },
    },
    {
      id: 'menu',
      name: '菜单',
      summary: '用于构建无障碍化菜单的指令',
      exampleSpecs: {
        prefix: 'cdk-menu-',
      },
    },
    {
      id: 'observers',
      name: '观察者',
      summary: '用来响应元素属性变化的实用工具。',
      exampleSpecs: {
        prefix: 'cdk-observers-',
      },
    },
    {
      id: 'overlay',
      name: '浮层',
      summary: '用于动态显示浮动内容的工具。',
      exampleSpecs: {
        prefix: 'cdk-overlay-',
      },
    },
    {
      id: 'platform',
      name: '平台',
      summary: '提供关于用户所用平台的信息。',
      exampleSpecs: {
        prefix: 'cdk-platform-',
      },
    },
    {
      id: 'portal',
      name: '传送点',
      summary: '用于把内容动态显示到目标中的工具。',
      exampleSpecs: {
        prefix: 'cdk-portal-',
      },
    },
    {
      id: 'scrolling',
      name: '滚动',
      summary: '用于管理滚动事件的指令。',
      exampleSpecs: {
        prefix: 'cdk-virtual-scroll-',
      },
    },
    {
      id: 'stepper',
      name: '步进器',
      summary: '以分步进展的方式呈现内容。',
      exampleSpecs: {
        prefix: 'cdk-custom-stepper-',
      },
    },
    {
      id: 'table',
      name: '表格',
      summary: '显示表格型数据的可配置组件。',
      exampleSpecs: {
        prefix: 'cdk-table-',
      },
    },
    {
      id: 'test-harnesses',
      name: '组件测试工具',
      summary: '组件测试工具的基石。',
      exampleSpecs: {
        prefix: 'cdk-test-harnesses-',
      },
      overviewPath: 'cdk/testing/test-harnesses.html',
      apiDocId: 'cdk-testing',
      additionalApiDocs: [
        {
          name: 'Testbed',
          path: 'cdk-testing-testbed.html'
        },
        {
          name: 'Protractor',
          path: 'cdk-testing-protractor.html'
        }
      ],
    },
    {
      id: 'text-field',
      name: '文本字段',
      summary: '用来和文本输入框协同工作的工具。',
      exampleSpecs: {
        prefix: 'text-field-',
      },
    },
    {
      id: 'tree',
      name: '树',
      summary: '把一些层次化的内容呈现为一棵可展开的树。',
      exampleSpecs: {
        prefix: 'cdk-tree-',
      },
    },
  ]
  // TODO(jelbourn): re-add utilities and a11y as top-level categories once we can generate
  // their API docs with dgeni. Currently our setup doesn't generate API docs for constants
  // and standalone functions (much of the utilities) and we have no way of generating API
  // docs more granularly than directory-level (within a11y) (same for viewport).
};

const ALL_COMPONENTS = processDocs('material', DOCS[COMPONENTS]);
const ALL_CDK = processDocs('cdk', DOCS[CDK]);
const ALL_DOCS = [...ALL_COMPONENTS, ...ALL_CDK];

@Injectable({providedIn: 'root'})
export class DocumentationItems {

  getItems(section: string): DocItem[] {
    if (section === COMPONENTS) {
      return ALL_COMPONENTS;
    }
    if (section === CDK) {
      return ALL_CDK;
    }
    return [];
  }

  getItemById(id: string, section: string): DocItem | undefined {
    const sectionLookup = section === 'cdk' ? 'cdk' : 'material';
    return ALL_DOCS.find(doc => doc.id === id && doc.packageName === sectionLookup);
  }
}

function processDocs(packageName: string, docs: DocItem[]): DocItem[] {
  for (const doc of docs) {
    doc.packageName = packageName;
    doc.examples = exampleNames.filter(key =>
      key.match(RegExp(`^${doc.exampleSpecs.prefix}`)) &&
      !doc.exampleSpecs.exclude?.some(excludeName => key.indexOf(excludeName) === 0));
  }

  return docs.sort((a, b) => a.name.localeCompare(b.name, 'en'));
}
