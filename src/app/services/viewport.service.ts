import { HostListener, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ViewportService {
  private mediaMatcher: MediaQueryList = matchMedia(`(max-width: 576px)`);
  public isSmallViewStream: BehaviorSubject<boolean>; // Contrary to convention, do not append $ to the name --> otherwise always initialises undefined!

  constructor() {
    this.isSmallViewStream = new BehaviorSubject<boolean>(
      this.mediaMatcher.matches
    );
    this.mediaMatcher.onchange = this.onChangeHandler.bind(this);
  }

  public onChangeHandler(e: MediaQueryListEvent): void {
    this.isSmallViewStream.next(e.matches);
    // Workaround for missing refresh on ngif blocks
    window.scrollTo({
      top: window.scrollY + 1,
      behavior: 'smooth',
    });
  }
}
