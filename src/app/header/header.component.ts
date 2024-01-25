import { Component, HostListener, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { LanguageCode } from '../models/language/ICompany';
import { ChapterService } from '../services/chapter.service';
import { LanguageService } from '../services/language.service';
import { delayHeaderInMs, opacityAnimation } from './header.animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [opacityAnimation],
})
@UntilDestroy()
export class HeaderComponent implements OnInit {
  navbarfixed: boolean = false;
  sidebarVisible: boolean = false;
  currentYear: string = '';
  animationStatus = 'off';
  iconSize: string = '1.5rem';
  flagSize: string = '2rem';
  logoSize: string = '2.5rem';

  constructor(
    public chapterService: ChapterService,
    public lService: LanguageService
  ) {
    this.chapterService.currentChapter$
      .pipe(untilDestroyed(this))
      .subscribe((c) => {
        this.animationStatus = 'off';
        const id = setTimeout(() => {
          this.animationStatus = 'on';
        }, delayHeaderInMs);
      });
  }

  ngOnInit() {
    let d: Date = new Date(Date.now());
    this.currentYear = d.getFullYear().toString();
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

  changeLanguage(code: LanguageCode): void {
    this.lService.changeLanguage(code);
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
