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

@UntilDestroy()
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  animations: [opacityAnimation],
})
export class ProjectsComponent implements OnInit, AfterViewInit {
  @ViewChild('title') myElement!: ElementRef;
  pointer!: number;
  fadeinContentAnimationStatus: boolean = false;
  fadeinAnimation = 'off';

  constructor(
    private chapterService: ChapterService,
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
  }

  clickLastItemHandler(): void {
    if (this.pointer !== undefined) {
      this.pointer =
        this.pointer === 0
          ? this.lService.MasterData$.value.projects.values.length - 1
          : this.pointer - 1;
    }
    this.fadeinContent();
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
  }
}
