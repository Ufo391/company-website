import { ElementRef, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IChapterData } from '../models/IChapterData';

@Injectable({
  providedIn: 'root',
})
export class ChapterService {
  private chapters: IChapterData[] = [{ position: 0, title: 'Kloß IT-Solutions' }];
  public currentChapter$!: BehaviorSubject<string>;
  private index: number = 0;

  constructor() {
    this.currentChapter$ = new BehaviorSubject<string>(
      this.chapters[this.index].title
    );
  }

  addChapter(e: ElementRef): void {
    const element: HTMLElement = e.nativeElement;
    const rect: DOMRect = element.getBoundingClientRect();
    const pos = rect.y + rect.height;
    const c: IChapterData = { position: pos, title: element.innerText };
    this.chapters.push(c);
    this.chapters.sort((a, b) => a.position - b.position);
  }

  onScrollPositionChanged(w: Window): void {
    const y: number = w.scrollY;
    const curChapter: IChapterData = this.chapters[this.index];
    const nxtChapter: IChapterData = this.chapters[this.index + 1];
    const lstChapter: IChapterData = this.chapters[this.index - 1];
    const isCurChapter: boolean =
      y > curChapter.position && y < nxtChapter?.position;

    if (isCurChapter == false) {
      const isLstChapter: boolean =
        y < curChapter.position && y > lstChapter?.position;
      const isNxtChapter: boolean =
        y > curChapter.position && y > nxtChapter?.position;

      if (isNxtChapter) {
        this.index += 1;
      } else if (isLstChapter) {
        this.index -= 1;
      }
      this.currentChapter$.next(this.chapters[this.index].title);
    }
  }
}
