import { ElementRef, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IChapterData } from '../models/IChapterData';

@Injectable({
  providedIn: 'root',
})
export class ChapterService {
  private chapters: IChapterData[] = [];
  public currentChapter$!: BehaviorSubject<string>;
  public chapters$!: BehaviorSubject<string[]>;
  private index: number = 0;
  private offsetHeight: number = 0;

  constructor() {
    this.currentChapter$ = new BehaviorSubject<string>('Kloß IT-Solutions');
    this.chapters$ = new BehaviorSubject<string[]>([]);
    this.offsetHeight = window.innerHeight * 0.1;
  }

  addChapter(e: ElementRef): void {
    const element: HTMLElement = e.nativeElement;
    const c: IChapterData = {
      element: element.parentElement !== null ? element.parentElement : element,
      title: element.innerText,
    };
    this.chapters.push(c);
    this.chapters.sort((a, b) => a.element.offsetTop - b.element.offsetTop);
    this.chapters$.next(this.chapters.map((c) => c.title));
  }

  scrollToChapter(index: number): void {
    const c: IChapterData = this.chapters[index];
    const pos: number =
      c.element.parentElement !== null
        ? c.element.parentElement.offsetTop - this.offsetHeight + 3
        : c.element.offsetTop - this.offsetHeight + 3;
    window.scrollTo({
      top: pos,
      behavior: 'smooth',
    });
  }

  onScrollPositionChanged(w: Window): void {
    const y: number = w.scrollY + this.offsetHeight;
    const curChapter: IChapterData = this.chapters[this.index];
    const nxtChapter: IChapterData = this.chapters[this.index + 1];
    const lstChapter: IChapterData = this.chapters[this.index - 1];
    const isCurChapter: boolean =
      y > curChapter.element.offsetTop && y < nxtChapter?.element.offsetTop;

    if (isCurChapter == false) {
      const isLstChapter: boolean =
        y < curChapter.element.offsetTop && y > lstChapter?.element.offsetTop;
      const isNxtChapter: boolean =
        y > curChapter.element.offsetTop && y > nxtChapter?.element.offsetTop;

      if (isNxtChapter) {
        this.index += 1;
      } else if (isLstChapter) {
        this.index -= 1;
      }
      this.currentChapter$.next(this.chapters[this.index].title);
    }
  }
}
