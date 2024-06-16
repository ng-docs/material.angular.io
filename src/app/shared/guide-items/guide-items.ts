import {Injectable} from '@angular/core';

export interface GuideItem {
  id: string;
  name: string;
  document: string;
  overview: string;
}

const GUIDES = [
  {
    id: 'getting-started',
    name: '快速上手',
    document: '/docs-content/guides/getting-started.html',
    overview: '把 Angular Material 添加到你的项目中！',
  },
  {
    id: 'schematics',
    name: '原理图',
    document: '/docs-content/guides/schematics.html',
    overview: '使用原理图快速生成带有 Material Design 组件的视图。',
  },
  {
    id: 'theming',
    name: 'Angular Material 主题',
    document: '/docs-content/guides/theming.html',
    overview: '使用 Angular Material 的主题体系定制你的应用。',
  },
  {
    id: 'theming-your-components',
    name: '为你自己的组件设置主题',
    document: '/docs-content/guides/theming-your-components.html',
    overview: '在你的自定义组件中使用 Angular Material 的主题体系。',
  },
  {
    id: 'typography',
    name: '自定义排版',
    document: '/docs-content/guides/typography.html',
    overview: '为 Angular Material 组件配置排版设置。',
  },
  {
    id: 'customizing-component-styles',
    name: '自定义组件样式',
    document: '/docs-content/guides/customizing-component-styles.html',
    overview: '了解如何定制 Angular Material 组件的样式。',
  },
  {
    id: 'creating-a-custom-form-field-control',
    name: '自定义表单控件',
    document: '/docs-content/guides/creating-a-custom-form-field-control.html',
    overview: '构建一个可以和 `<mat-form-field>` 集成的自定义表单控件。',
  },
  {
    id: 'elevation',
    name: '纵深助手',
    document: '/docs-content/guides/elevation.html',
    overview: '利用纵深感强化你的组件。',
  },
  {
    id: 'creating-a-custom-stepper-using-the-cdk-stepper',
    name: '使用 CdkStepper 自定义步进器',
    document: '/docs-content/guides/creating-a-custom-stepper-using-the-cdk-stepper.html',
    overview: '使用 Angular CDK 创建自定义步进器组件。',
  },
  {
    id: 'using-component-harnesses',
    name: '使用组件测试工具进行测试',
    document: '/docs-content/guides/using-component-harnesses.html',
    overview: '使用组件测试工具编写测试，以获得便利性，并输出更有意义的结果。',
  },
  {
    id: 'duplicate-theming-styles',
    name: '消除重复主题样式',
    document: '/docs-content/guides/duplicate-theming-styles.html',
    overview: '学习我们的新色彩 Sass mixin，以消除重复的主题样式'
  },
  {
    id: 'material-2-theming',
    name: '使用 Material 2 的主题',
    document: '/docs-content/guides/material-2.html',
    overview: '使用 Angular Material 的主题系统自定义你的应用'
  },
];

@Injectable({providedIn: 'root'})
export class GuideItems {

  getAllItems(): GuideItem[] {
    return GUIDES;
  }

  getItemById(id: string): GuideItem | undefined {
    return GUIDES.find(i => i.id === id);
  }
}
