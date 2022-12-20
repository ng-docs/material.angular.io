import {Injectable} from '@angular/core';

export interface GuideItem {
  id: string;
  name: string;
  nameCn: string;
  document: string;
  overview: string;
  overviewCn: string;
}

const GUIDES = [
  {
    id: 'getting-started',
    name: 'Getting started',
    nameCn: '快速上手',
    document: '/docs-content/guides/getting-started.html',
    overview: 'Add Angular Material to your project!',
    overviewCn: '把 Angular Material 添加到你的项目中！',
  },
  {
    id: 'schematics',
    name: 'Schematics',
    nameCn: '原理图',
    document: '/docs-content/guides/schematics.html',
    overview: 'Use schematics to quickly generate views with Material Design components.',
    overviewCn: '使用原理图快速生成带有 Material Design 组件的视图。',
  },
  {
    id: 'theming',
    name: 'Theming Angular Material',
    nameCn: 'Angular Material 主题',
    document: '/docs-content/guides/theming.html',
    overview: `Customize your application with Angular Material's theming system.`,
    overviewCn: '使用 Angular Material 的主题体系定制你的应用。',
  },
  {
    id: 'theming-your-components',
    name: 'Theming your own components',
    nameCn: '为你自己的组件设置主题',
    document: '/docs-content/guides/theming-your-components.html',
    overview: `Use Angular Material's theming system in your own custom components.`,
    overviewCn: '在你的自定义组件中使用 Angular Material 的主题体系。',
  },
  {
    id: 'typography',
    name: `Customizing Typography`,
    nameCn: '自定义排版',
    document: '/docs-content/guides/typography.html',
    overview: 'Configure the typography settings for Angular Material components.',
    overviewCn: '为 Angular Material 组件配置排版设置。',
  },
  {
    id: 'customizing-component-styles',
    name: 'Customizing component styles',
    nameCn: '自定义组件样式',
    document: '/docs-content/guides/customizing-component-styles.html',
    overview: 'Understand how to approach style customization with Angular Material components.',
    overviewCn: '了解如何定制 Angular Material 组件的样式。',
  },
  {
    id: 'creating-a-custom-form-field-control',
    name: 'Custom form field control',
    nameCn: '自定义表单控件',
    document: '/docs-content/guides/creating-a-custom-form-field-control.html',
    overview: 'Build a custom control that integrates with `<mat-form-field>`.',
    overviewCn: '构建一个可以和 `<mat-form-field>` 集成的自定义表单控件。',
  },
  {
    id: 'elevation',
    name: 'Elevation helpers',
    nameCn: '纵深助手',
    document: '/docs-content/guides/elevation.html',
    overview: 'Enhance your components with elevation and depth.',
    overviewCn: '利用纵深感强化你的组件。',
  },
  {
    id: 'creating-a-custom-stepper-using-the-cdk-stepper',
    name: 'Custom stepper using the CdkStepper',
    nameCn: '使用 CdkStepper 自定义步进器',
    document: '/docs-content/guides/creating-a-custom-stepper-using-the-cdk-stepper.html',
    overview: 'Create a custom stepper components using Angular CDK.',
    overviewCn: '使用 Angular CDK 创建自定义步进器组件。',
  },
  {
    id: 'using-component-harnesses',
    name: `Testing with component harnesses`,
    nameCn: '使用组件测试工具进行测试',
    document: '/docs-content/guides/using-component-harnesses.html',
    overview: 'Write tests with component harnesses for convenience and meaningful results.',
    overviewCn: '使用组件测试工具编写测试，以获得便利性，并输出更有意义的结果。',
  },
  {
    id: 'duplicate-theming-styles',
    name: 'Duplicate theming styles',
    nameCn: '消除重复主题样式',
    document: '/docs-content/guides/duplicate-theming-styles.html',
    overview: 'Learn about our new color mixins for Sass that avoid duplicating theming styles.',
    overviewCn: '学习我们的新色彩 Sass mixin，以消除重复的主题样式'
  },
  {
    id: 'mdc-migration',
    name: 'Migrating to MDC-based Components',
    nameCn: '迁移到基于 MDC 的组件',
    document: '/docs-content/guides/v15-mdc-migration.html',
    overview: 'Learn how to migrate your app to the new MDC-based components available in v15.',
    overviewCn: '学习如何把你的应用迁移到 v15 中的新的基于 MDC 的组件'
  },
  {
    id: 'deploy-to-local',
    name: `Deploy to local`,
    nameCn: '部署到本地环境（译者）',
    document: '/docs-content/guides/deploy-to-local.html',
    overview: 'Deploy this document to a local environment for use in an intranet or offline environment',
    overviewCn: '将本文档部署到局域网或本地环境，以便在企业内网或脱机等环境下使用。',
  },
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
