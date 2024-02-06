import { ElementRef, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IChapterData } from '../models/IChapterData';
import { ViewportService } from './viewport.service';

type ChapterChangeType = 'cur' | 'nxt' | 'lst';

@Injectable({
  providedIn: 'root',
})
export class ChapterService {
  private chapters: IChapterData[] = [];
  public currentChapter$!: BehaviorSubject<string>;
  public chapters$!: BehaviorSubject<string[]>;
  private pointer: number = 0;
  private offsetHeight: number = 0;

  constructor(private vpService: ViewportService) {
    this.currentChapter$ = new BehaviorSubject<string>('Kloss IT-Solutions');
    this.chapters$ = new BehaviorSubject<string[]>([]);
    this.offsetHeight = window.innerHeight * -0.1;
  }

  addChapter(
    e: ElementRef,
    startCallback: () => void,
    resetCallback: () => void
  ): void {
    const element: HTMLElement = e.nativeElement;
    const c: IChapterData = {
      element: element.parentElement !== null ? element.parentElement : element,
      title: element.innerText,
      animationStartCallback: startCallback,
      componentResetCallback: resetCallback,
    };
    this.chapters.push(c);
    this.chapters.sort((a, b) => a.element.offsetTop - b.element.offsetTop);
    this.chapters$.next(this.chapters.map((c) => c.title));
  }

  translateChapter(e: ElementRef, value: string): void {
    const h: HTMLElement = e.nativeElement as HTMLElement;
    const c: IChapterData = this.chapters.find((c) => c.title === h.innerText)!;
    c.title = value;
    this.chapters$.next(this.chapters.map((c) => c.title));
    this.currentChapter$.next(this.chapters[this.pointer].title);
  }

  scrollToChapter(index: number): void {
    const c: IChapterData = this.chapters[index];
    const target: HTMLElement = c.element.parentElement
      ? c.element.parentElement
      : c.element;
    let pos: number =
      index > 0
        ? target.offsetTop -
          (window.innerHeight - this.offsetHeight - target.offsetHeight) / 2
        : 0;

    window.scrollTo({
      top: pos,
      behavior: 'smooth',
    });
  }

  onScrollPositionChanged(w: Window): void {
    const y: number = w.scrollY;
    const curChapter: IChapterData = this.chapters[this.pointer];
    const nxtChapter: IChapterData = this.chapters[this.pointer + 1];
    const lstChapter: IChapterData = this.chapters[this.pointer - 1];

    const cChangeHeader: ChapterChangeType = this.detectChapterChange(
      y,
      curChapter,
      nxtChapter,
      lstChapter,
      this.offsetHeight
    );
    const cChangeAnimation: ChapterChangeType = this.detectChapterChange(
      y,
      curChapter,
      nxtChapter,
      lstChapter,
      this.offsetHeight + window.innerHeight * 0.66
    );

    this.changeResultAction(
      cChangeHeader,
      this.nxtHeader.bind(this),
      this.lstHeader.bind(this)
    );

    this.changeResultAction(
      cChangeAnimation,
      () => {
        nxtChapter.animationStartCallback();
      },
      () => {}
    );

    if (y <= 0) {
      this.chapters.forEach((c) => {
        c.componentResetCallback();
      });
    }
  }

  private detectChapterChange(
    y: number,
    curC: IChapterData,
    nxtC: IChapterData,
    lstC: IChapterData,
    yOffset: number = 0
  ): ChapterChangeType {
    yOffset = Math.abs(yOffset);
    yOffset += y;
    yOffset +=
      this.vpService.breakPoint$.value === 'xl'
        ? window.innerHeight * 0.5
        : window.innerHeight * 0.33;
    const isCurChapter: boolean =
      y === 0 ||
      (yOffset > curC.element.offsetTop && yOffset < nxtC?.element.offsetTop);

    if (isCurChapter == false) {
      const isLstChapter: boolean =
        yOffset < curC.element.offsetTop && yOffset > lstC?.element.offsetTop;
      const isNxtChapter: boolean =
        yOffset > curC.element.offsetTop && yOffset > nxtC?.element.offsetTop;
      const isLstElement: boolean =
        curC !== undefined && nxtC === undefined && lstC !== undefined;
      const isFstElement: boolean =
        curC !== undefined && nxtC !== undefined && lstC === undefined;
      if (isLstChapter == true) {
        return 'lst';
      } else if (isNxtChapter == true) {
        return 'nxt';
      } else if (isLstElement == true) {
        return 'cur';
      } else if (isFstElement == true) {
        return 'cur';
      } else {
        throw new Error('Not implemented error!');
      }
    } else {
      return 'cur';
    }
  }

  private changeResultAction(
    cStatus: ChapterChangeType,
    nxtAction: () => void,
    lstAction: () => void
  ): void {
    if (cStatus === 'nxt') {
      nxtAction();
    }

    switch (cStatus) {
      case 'cur': {
        break;
      }
      case 'lst': {
        lstAction();
        break;
      }
      case 'nxt': {
        nxtAction();
        break;
      }
      default: {
        throw new Error('Not implemented error!');
      }
    }
  }

  private nxtHeader(): void {
    this.pointer =
      this.pointer >= this.chapters.length - 1
        ? this.chapters.length - 1
        : this.pointer + 1;
    this.currentChapter$.next(this.chapters[this.pointer].title);
  }

  private lstHeader(): void {
    this.pointer = this.pointer <= 0 ? 0 : this.pointer - 1;
    this.currentChapter$.next(this.chapters[this.pointer].title);
  }
}
