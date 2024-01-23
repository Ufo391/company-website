import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, HostListener, OnInit } from '@angular/core';
import { ChapterService } from '../services/chapter.service';

const opacityHeaderInMs: number = 1500;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],

  animations: [
    trigger('opacityAnimation', [
      state(
        'on',
        style({
          opacity: 1,
        })
      ),
      state(
        'off',
        style({
          opacity: 0,
        })
      ),
      transition('off => on', [animate(`${opacityHeaderInMs}ms`)]),
    ]),
  ],
})
export class HeaderComponent implements OnInit {
  navbarfixed: boolean = false;
  sidebarVisible: boolean = false;
  isLanguageGerman: boolean = true;
  currentYear: string = '';
  animationStatus = 'off';

  constructor(public chapterService: ChapterService) {
    this.chapterService.currentChapter$.subscribe((c) => {
      this.animationStatus = 'off';
      const id = setTimeout(() => {
        this.animationStatus = 'on';
      }, 100);

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

  changeLanguage(): void {
    this.isLanguageGerman = !this.isLanguageGerman;
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
