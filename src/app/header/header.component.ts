import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { LanguageCode } from '../models/language/ICompany';
import { ChapterService } from '../services/chapter.service';
import { LanguageService } from '../services/language.service';
import { delayHeaderInMs, opacityAnimation } from './header.animations';
import { ViewportService } from '../services/viewport.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [opacityAnimation],
})
@UntilDestroy()
export class HeaderComponent {
  public navbarfixed: boolean = false;
  public sidebarVisible: boolean = false;
  public animationStatus = 'off';
  public iconSize: string = '1.5rem';
  public flagSize: string = '1rem';
  public logoSize: string = '2.5rem';
  private languagePointer: number = 0;

  constructor(
    public chapterService: ChapterService,
    public lService: LanguageService,
    public vpService: ViewportService
  ) {
    this.chapterService.currentChapter$
      .pipe(untilDestroyed(this))
      .subscribe((c) => {
        this.animationStatus = 'off';
        setTimeout(() => {
          this.animationStatus = 'on';
        }, delayHeaderInMs);
      });
  }

  toggleSidebar() {
    this.sidebarVisible = !this.sidebarVisible;
  }

  changeCurrentChapter(e: MouseEvent) {
    const target: HTMLElement = e.target as HTMLElement;
    const txt: string = target.innerText;
    this.chapterService.scrollToChapter(
      this.chapterService.chapters$.value.indexOf(txt)
    );
    this.sidebarVisible = false;
  }

  changeLanguage(): void {
    const lCodes: LanguageCode[] = this.lService.LanguageCodes;
    const increment: number = this.languagePointer + 1;
    this.languagePointer = increment === lCodes.length ? 0 : increment;
    this.lService.changeLanguage(lCodes[this.languagePointer]);
  }

  scrollToStart(): void {
    this.chapterService.scrollToChapter(0);
  }

  @HostListener('window:scroll', ['$event']) onscroll() {
    let height: number = window.innerHeight * 0.1;
    const lastState: boolean = this.navbarfixed;
    const newState: boolean = window.scrollY > height;
    if (lastState && !newState) {
      this.navbarfixed = window.scrollY > 0;
    } else {
      this.navbarfixed = newState;
    }
    this.chapterService.onScrollPositionChanged(window);
  }
}
