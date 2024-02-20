import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { ChapterService } from 'src/app/services/chapter.service';
import { LanguageService } from 'src/app/services/language.service';
import { opacityAnimation } from '../content.animation';
import { ViewportService } from 'src/app/services/viewport.service';
import { ScrollPanel } from 'primeng/scrollpanel';

@UntilDestroy()
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  animations: [opacityAnimation],
})
export class ProjectsComponent implements OnInit, AfterViewInit {
  @ViewChild('title') myElement!: ElementRef;
  @ViewChild('scroll') scroll!: ScrollPanel;
  pointer!: number;
  fadeinContentAnimationStatus: boolean = false;
  fadeinAnimation = 'off';
  cardStyle = { background: '#f7f7f7' };
  scrollPanelStyle = {};

  constructor(
    public chapterService: ChapterService,
    public lService: LanguageService,
    public vpService: ViewportService
  ) {}

  ngOnInit() {
    this.pointer = 0;
  }

  ngAfterViewInit() {
    this.chapterService.addChapter(
      this.myElement,
      this.startFadeAnimation.bind(this),
      this.leaveFadeAnimation.bind(this)
    );
    this.lService.MasterData$.pipe(untilDestroyed(this)).subscribe((c) => {
      this.chapterService.translateChapter(this.myElement, c.projects.title);
    });
    this.vpService.breakPoint$.pipe(untilDestroyed(this)).subscribe((v) => {
      if (v === 'xl') {
        this.scrollPanelStyle = { height: '33vh' };
      } else {
        this.scrollPanelStyle = { height: '66vh' };
      }
    });
  }

  clickNextItemHandler(): void {
    if (this.pointer !== undefined) {
      this.pointer =
        this.pointer ===
        this.lService.MasterData$.value.projects.values.length - 1
          ? 0
          : this.pointer + 1;
    }
    this.fadeinContent();
    this.scroll.scrollTop(0);
  }

  clickLastItemHandler(): void {
    if (this.pointer !== undefined) {
      this.pointer =
        this.pointer === 0
          ? this.lService.MasterData$.value.projects.values.length - 1
          : this.pointer - 1;
    }
    this.fadeinContent();
    this.scroll.scrollTop(0);
  }

  private fadeinContent(): void {
    this.fadeinContentAnimationStatus = true;
    setTimeout(() => {
      this.fadeinContentAnimationStatus = false;
    }, 500);
  }

  private startFadeAnimation(): void {
    this.fadeinAnimation = 'on';
  }

  private leaveFadeAnimation(): void {
    this.fadeinAnimation = 'off';
    this.scroll.scrollTop(0);
  }
}
