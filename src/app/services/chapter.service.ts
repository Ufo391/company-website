import { ElementRef, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IChapterData } from '../models/IChapterData';
import { ChapterChangeType } from '../models/chapterChangeType';
import { SCROLL_STATE } from '../models/scrollStates';
import { ViewportService } from './viewport.service';

@Injectable({
  providedIn: 'root',
})
export class ChapterService {
  private chapters: IChapterData[] = [];
  public currentChapter$!: BehaviorSubject<string>;
  public chapters$!: BehaviorSubject<string[]>;
  private pointer: number = 0;
  private pointerSkipscroll: number = 0;
  private offsetHeight: number = 0;
  private skipScrollIsDisabled: boolean = false;
  private tsSkipScroll: Date = new Date(Date.now());
  private readonly skipScrollDelayInMs: number = 550;
  private readonly deltaYTreshold: number = 45;
  private scrollState: SCROLL_STATE = 'Default';

  constructor(private vpService: ViewportService) {
    this.currentChapter$ = new BehaviorSubject<string>('Kloss IT-Solutions');
    this.chapters$ = new BehaviorSubject<string[]>([]);
    this.offsetHeight = window.innerHeight * -0.1;
    this.addEventListener();
  }

  addChapter(
    e: ElementRef,
    startCallback: () => void,
    resetCallback: () => void,
    leftCallback: () => void,
    rightCallback: () => void
  ): void {
    const element: HTMLElement = e.nativeElement;
    if (this.chapters.some((c) => c.title === element.innerText)) {
      this.chapters = this.chapters.filter(
        (c) => c.title !== element.innerText
      );
    }
    const c: IChapterData = {
      element: element.parentElement !== null ? element.parentElement : element,
      title: element.innerText,
      animationStartCallback: startCallback,
      componentResetCallback: resetCallback,
      keypressLeftCallback: leftCallback,
      keypressRightCallback: rightCallback,
    };
    this.chapters.push(c);
    this.chapters.sort((a, b) => a.element.offsetTop - b.element.offsetTop);
    this.chapters$.next(this.chapters.map((c) => c.title));
    if (window.innerHeight !== 0) {
      this.scrollToChapter(0);
    }
  }

  clear(): void {
    this.chapters = [];
  }

  translateChapter(e: ElementRef, value: string): void {
    const h: HTMLElement = e.nativeElement as HTMLElement;
    const c: IChapterData = this.chapters.find((c) => c.title === h.innerText)!;
    c.title = value;
    this.chapters$.next(this.chapters.map((c) => c.title));
    this.currentChapter$.next(this.chapters[this.pointer].title);
  }

  scrollToChapter(index: number, mode: ScrollBehavior = 'smooth'): void {
    let pos: number = 0;
    if (
      index >= this.chapters.length - 1 &&
      this.vpService.breakPoint$.value === 'xl'
    ) {
      pos = document.body.scrollHeight;
    } else {
      const c: IChapterData = this.chapters[index];
      const target: HTMLElement = c.element.parentElement
        ? c.element.parentElement
        : c.element;
      pos =
        index > 0
          ? target.offsetTop -
            (window.innerHeight - this.offsetHeight - target.offsetHeight) / 2
          : 0;
    }

    window.scrollTo({
      top: pos,
      behavior: mode,
    });

    this.pointerSkipscroll = index;
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

  disableSkipScroll(v: boolean): void {
    this.skipScrollIsDisabled = v;
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

  private skipScroll(jumpToNext: boolean): void {
    if (
      this.scrollState === 'SkipScroll' &&
      this.isSkipScrollReady(this.tsSkipScroll)
    ) {
      this.tsSkipScroll = new Date(Date.now());
      if (jumpToNext) {
        // Scroll down
        this.pointerSkipscroll =
          this.pointerSkipscroll >= this.chapters.length
            ? this.chapters.length - 1
            : this.pointerSkipscroll + 1;
      } else {
        // Scroll up
        this.pointerSkipscroll =
          this.pointerSkipscroll === 0 ? 0 : this.pointerSkipscroll - 1;
      }
      this.scrollToChapter(this.pointerSkipscroll);
    }
  }

  private isSkipScrollReady(ts: Date): boolean {
    const now: Date = new Date(Date.now());
    return now.getTime() - ts.getTime() >= this.skipScrollDelayInMs;
  }

  private addEventListener(): void {
    window.addEventListener('wheel', (event) => {
      this.debounceTouchpadSkipScroll(event);
    });

    window.addEventListener('keyup', (event) => {
      if (event.key === 'ArrowUp') {
        this.skipScroll(false);
      } else if (event.key === 'ArrowDown') {
        this.skipScroll(true);
      } else if (event.key === 'ArrowLeft') {
        this.chapters[this.pointer].keypressLeftCallback();
      } else if (event.key === 'ArrowRight') {
        this.chapters[this.pointer].keypressRightCallback();
      }
    });

    this.vpService.breakPoint$.subscribe((v) => {
      if (v === 'xl') {
        this.scrollState = 'SkipScroll';
      } else {
        this.scrollState = 'Default';
      }
    });
  }

  private debounceTouchpadSkipScroll(event: WheelEvent): void {
    if (
      this.skipScrollIsDisabled === false &&
      Math.abs(event.deltaY) >= this.deltaYTreshold
    ) {
      this.skipScroll(event.deltaY > 0);
    }
  }
}
