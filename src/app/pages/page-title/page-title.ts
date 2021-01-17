import {Injectable} from '@angular/core';
import {Title} from '@angular/platform-browser';

/**
 * Service responsible for setting the title that appears above the components and guide pages.
 */
@Injectable({providedIn: 'root'})
export class ComponentPageTitle {
  _originalTitle = 'Angular Material UI 组件库';

  constructor(private bodyTitle: Title) {
  }

  _title = '';

  get title(): string {
    return this._title;
  }

  set title(title: string) {
    this._title = title || '';
    this.updateTitle();
  }

  _titleCn = '';

  get titleCn(): string {
    return this._titleCn;
  }

  set titleCn(titleCn: string) {
    this._titleCn = titleCn || '首页';
    this.updateTitle();
  }

  private updateTitle() {
    this.bodyTitle.setTitle(`${this.titleCn} ${this.title} - Angular Material 组件库`);
  }
}
