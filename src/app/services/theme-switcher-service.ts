import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class ThemeSwitcherService {

  constructor(@Inject(DOCUMENT) private document: Document) {}

  switchTheme() {

    let themeLink = this.document.getElementById('app-theme') as HTMLLinkElement;
    console.log(themeLink.href);
    if (themeLink) {
      themeLink.href = (themeLink.href.includes('dark') ? 'light' : 'dark') + '.css';
    }
  }

  getCurrentTheme() {
    let themeLink = this.document.getElementById('app-theme') as HTMLLinkElement;
    if (themeLink.href.includes('dark')) {
      return 'dark';
    }
    return 'light';
  }
}
