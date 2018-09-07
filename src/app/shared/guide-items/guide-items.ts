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
    document: '/assets/documents/guides/material-getting-started.html',
  },
  {
    id: 'schematics',
    name: '生成器（schematics）',
    document: '/assets/documents/guides/material-schematics.html'
  },
  {
    id: 'theming',
    name: 'Angular Material 主题',
    document: '/assets/documents/guides/material-theming.html',
  },
  {
    id: 'theming-your-components',
    name: '为你自己的组件设置主题',
    document: '/assets/documents/guides/material-theming-your-components.html',
  },
  {
    id: 'typography',
    name: `使用 Angular Material 的文字风格`,
    document: '/assets/documents/guides/material-typography.html',
  },
  {
    id: 'customizing-component-styles',
    name: '自定义组件样式',
    document: '/assets/documents/guides/material-customizing-component-styles.html'
  },
  {
    id: 'creating-a-custom-form-field-control',
    name: '创建自定义表单控件',
    document: '/assets/documents/guides/material-creating-a-custom-form-field-control.html'
  },
  {
    id: 'elevation',
    name: '使用 Z 轴助手',
    document: '/assets/documents/guides/material-elevation.html'
  },
];

@Injectable()
export class GuideItems {

  getAllItems(): GuideItem[] {
    return GUIDES;
  }

  getItemById(id: string): GuideItem {
    return GUIDES.find(i => i.id === id);
  }
}
