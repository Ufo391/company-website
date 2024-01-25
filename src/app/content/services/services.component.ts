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

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
})
@UntilDestroy()
export class ServicesComponent implements OnInit, AfterViewInit {
  @ViewChild('title') myElement!: ElementRef;
  readonly cardHeight: string = '90vh';
  readonly flipSpeedInMs: number = 1000;
  pointer: number = 0;
  currentStyle: object = {};
  cardStyles = [
    { background: '#daeaf0' },
    { background: '#9fb1c5' },
    { background: '#b2bccd' },
  ];
  isFirstElement: boolean = false;
  isLastElement: boolean = false;
  nxtElementAnimation: boolean = false;
  lstElementAnimation: boolean = false;

  constructor(
    private chapterService: ChapterService,
    public lService: LanguageService
  ) {}

  ngOnInit() {
    this.onPointerChanged();
  }

  ngAfterViewInit() {
    this.chapterService.addChapter(this.myElement);
    this.lService.MasterData$.pipe(untilDestroyed(this)).subscribe((c) => {
      this.chapterService.translateChapter(this.myElement, c.services.title);
    });
  }

  clickNextItemHandler(): void {
    this.pointer = this.pointer + 1;
    if (this.pointer >= this.cardStyles.length) {
      this.pointer = 0;
    }
    this.flipNext();
    this.onPointerChanged();
  }

  clickLastItemHandler(): void {
    this.pointer = this.pointer - 1;
    if (this.pointer < 0) {
      this.pointer = this.cardStyles.length - 1;
    }
    this.flipLast();
    this.onPointerChanged();
  }

  private onPointerChanged(): void {
    this.currentStyle = this.cardStyles[this.pointer];
    this.isFirstElement = this.pointer === 0;
    this.isLastElement =
      this.pointer ===
      this.lService.MasterData$.value.services.values.length - 1;
  }

  private flipNext(): void {
    this.nxtElementAnimation = true;
    setTimeout(() => {
      this.nxtElementAnimation = false;
    }, this.flipSpeedInMs);
  }

  private flipLast(): void {
    this.lstElementAnimation = true;
    setTimeout(() => {
      this.lstElementAnimation = false;
    }, this.flipSpeedInMs);
  }
}
