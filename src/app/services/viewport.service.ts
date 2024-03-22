import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ViewportModes } from '../models/viewportModes';

@Injectable({
  providedIn: 'root',
})
export class ViewportService {
  readonly xs: string = '(max-width: 576px)';
  readonly sm: string = '(min-width: 577px) and (max-width: 767px)';
  readonly md: string = '(min-width: 768px) and (max-width: 991px)';
  readonly lg: string = '(min-width: 992px) and (max-width: 1199px)';
  readonly xl: string = '(min-width: 1200px)';

  private xsMatcher: MediaQueryList = matchMedia(this.xs);
  private smMatcher: MediaQueryList = matchMedia(this.sm);
  private mdMatcher: MediaQueryList = matchMedia(this.md);
  private lgMatcher: MediaQueryList = matchMedia(this.lg);
  private xlMatcher: MediaQueryList = matchMedia(this.xl);

  private mode: ViewportModes = 'xs';

  public breakPoint$!: BehaviorSubject<ViewportModes>;

  constructor() {
    this.xsMatcher.onchange = this.onChangeHandler.bind(this);
    this.smMatcher.onchange = this.onChangeHandler.bind(this);
    this.mdMatcher.onchange = this.onChangeHandler.bind(this);
    this.lgMatcher.onchange = this.onChangeHandler.bind(this);
    this.xlMatcher.onchange = this.onChangeHandler.bind(this);
    this.breakPoint$ = new BehaviorSubject<ViewportModes>(this.initMode());
  }

  public onChangeHandler(e: MediaQueryListEvent): void {
    if (e.matches === true) {
      let newValue: ViewportModes = 'xs';
      const oldValue: ViewportModes = this.breakPoint$.value;
      if (e.media === this.xs) {
        newValue = 'xs';
        this.breakPoint$.next(newValue);
      } else if (e.media === this.sm) {
        newValue = 'sm';
        this.breakPoint$.next(newValue);
      } else if (e.media === this.md) {
        newValue = 'md';
        this.breakPoint$.next(newValue);
      } else if (e.media === this.lg) {
        newValue = 'lg';
        this.breakPoint$.next(newValue);
      } else if (e.media === this.xl) {
        newValue = 'xl';
        this.breakPoint$.next(newValue);
      } else {
        throw new Error('Not implemented!');
      }
      if (newValue === 'xl' || oldValue === 'xl') {
        this.reloadPage();
      }
    }
  }

  private initMode(): ViewportModes {
    if (this.xsMatcher.matches) {
      return 'xs';
    } else if (this.smMatcher.matches) {
      return 'sm';
    } else if (this.mdMatcher.matches) {
      return 'md';
    } else if (this.lgMatcher.matches) {
      return 'lg';
    } else if (this.xlMatcher.matches) {
      return 'xl';
    } else {
      throw new Error('Not implemented!');
    }
  }

  private reloadPage(): void {
    window.scrollTo({
      top: 0,
      behavior: 'instant',
    });
    window.location.reload();
  }
}
