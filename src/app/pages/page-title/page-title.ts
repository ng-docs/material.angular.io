import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

/**
 * Service responsible for setting the title that appears above the components and guide pages.
 */
@Injectable({providedIn: 'root'})
export class ComponentPageTitle {
  _title = '';
  _originalTitle = 'Angular Material UI component library';

  get title(): string {
    return this._title;
  }

  set title(title: string) {
    this._title = title;
    if (title !== '') {
      title = `${title} | Angular Material`;
    } else {
      title = this._originalTitle;
    }
    this.updateTitle();
  }

  _titleCn = '';

  get titleCn(): string {
    return this._titleCn;
  }

  set titleCn(titleCn: string) {
    this._titleCn = titleCn;
    if (titleCn !== '') {
      titleCn = `${titleCn} | `;
    }
    this.updateTitle();
  }

  private updateTitle() {
    this.bodyTitle.setTitle(`${this.titleCn} ${this.title}`);
  }

  constructor(private bodyTitle: Title) {
  }
}
