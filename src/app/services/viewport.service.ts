import { Injectable } from '@angular/core';
import { UntilDestroy } from '@ngneat/until-destroy';
import { BehaviorSubject } from 'rxjs';
import { ViewportModes } from '../models/ViewportModes';

@UntilDestroy()
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
      if (e.media === this.xs) {
        this.breakPoint$.next('xs');
      } else if (e.media === this.sm) {
        this.breakPoint$.next('sm');
      } else if (e.media === this.md) {
        this.breakPoint$.next('md');
      } else if (e.media === this.lg) {
        this.breakPoint$.next('lg');
      } else if (e.media === this.xl) {
        this.breakPoint$.next('xl');
      } else {
        throw new Error('Not implemented!');
      }
      this.reloadPage();
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
