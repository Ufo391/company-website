import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ChapterService } from '../services/chapter.service';
import { LanguageService } from '../services/language.service';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
@UntilDestroy()
export class ContentComponent implements OnInit, AfterViewInit {
  @ViewChild('invisible') myElement!: ElementRef;

  touchStartX: number = 0;
  touchStartY: number = 0;
  private readonly touchTreshold: number = 100;

  constructor(
    private chapterService: ChapterService,
    public lService: LanguageService
  ) {}

  ngOnInit() {
    this.chapterService.reset();
  }

  ngAfterViewInit() {
    this.chapterService.addChapter(
      this.myElement,
      () => {},
      () => {},
      () => {},
      () => {}
    );
    this.lService.MasterData$.pipe(untilDestroyed(this)).subscribe((c) => {
      this.chapterService.translateChapter(this.myElement, c.companyName);
    });
  }

  onTouchStart(event: TouchEvent) {
    this.touchStartX = event.touches[0].clientX;
    this.touchStartY = event.touches[0].clientY;
  }

  onTouchEnd(event: TouchEvent) {
    const touchEndX = event.changedTouches[0].clientX;
    const touchEndY = event.changedTouches[0].clientY;

    const deltaX = touchEndX - this.touchStartX;
    const deltaY = touchEndY - this.touchStartY;

    const forceX = Math.abs(deltaX);
    const forceY = Math.abs(deltaY);

    if (forceX > forceY && forceX > this.touchTreshold) {
      this.chapterService.onTouchMove(deltaX > 0);
    }
  }
}
