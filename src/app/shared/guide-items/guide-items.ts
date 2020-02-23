import {Injectable} from '@angular/core';

export interface GuideItem {
  id: string;
  name: string;
  document: string;
}

const GUIDES = [
  {
    id: 'getting-started',
    name: '快速上手',
    document: '/docs-content/guides/getting-started.html',
  },
  {
    id: 'schematics',
    name: '生成器（schematics）',
    document: '/docs-content/guides/schematics.html'
  },
  {
    id: 'theming',
    name: 'Angular Material 主题',
    document: '/docs-content/guides/theming.html',
  },
  {
    id: 'theming-your-components',
    name: '为你自己的组件设置主题',
    document: '/docs-content/guides/theming-your-components.html',
  },
  {
    id: 'typography',
    name: `使用 Angular Material 的文字风格`,
    document: '/docs-content/guides/typography.html',
  },
  {
    id: 'customizing-component-styles',
    name: '自定义组件样式',
    document: '/docs-content/guides/customizing-component-styles.html'
  },
  {
    id: 'creating-a-custom-form-field-control',
    name: '创建自定义表单控件',
    document: '/docs-content/guides/creating-a-custom-form-field-control.html'
  },
  {
    id: 'elevation',
    name: '使用 Z 轴助手',
    document: '/docs-content/guides/elevation.html'
  },
  {
    id: 'creating-a-custom-stepper-using-the-cdk-stepper',
    name: 'Creating a custom stepper using the CdkStepper',
    document: '/docs-content/guides/creating-a-custom-stepper-using-the-cdk-stepper.html'
  },
  {
    id: 'using-component-harnesses',
    name: `Using Angular Material's component harnesses in your tests`,
    document: '/docs-content/guides/using-component-harnesses.html'
  }
];

@Injectable()
export class GuideItems {

  getAllItems(): GuideItem[] {
    return GUIDES;
  }

  getItemById(id: string): GuideItem | undefined {
    return GUIDES.find(i => i.id === id);
  }
}
