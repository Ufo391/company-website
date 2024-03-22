import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HtmlFormatterService {

  constructor() { }

  formatTextToHtml(inputText: string, classes: string[]): string {
    const parts: string[] = inputText.split(/(\|F-([^-]*?)-\|)/);
    let result: string = '';

    for (let x = 0; x < parts.length; x++) {
      const p: string = parts[x];
      if (p.startsWith('|F-') && p.endsWith('-|')) {
        const token = p.substring(3, p.length - 2);
        result += `<span class="${classes.join(' ')}">${token}</span>`;
        x++;
      } else {
        result += p;
      }
    }

    return result;
  }
}
