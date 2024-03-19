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
import { ViewportService } from 'src/app/services/viewport.service';
import { opacityAnimation } from '../content.animation';
import { ViewportModes } from 'src/app/models/viewportModes';
import { STYLES_SERVICES } from './services.styles';
import { HtmlFormatterService } from 'src/app/services/html-formatter.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
  animations: [opacityAnimation],
})
@UntilDestroy()
export class ServicesComponent implements OnInit, AfterViewInit {
  @ViewChild('title') myElement!: ElementRef;
  readonly cardHeight: string = '90vh';
  readonly flipSpeedInMs: number = 1000;
  pointer: number = 0;
  currentStyle: object = {};
  anzahl = 3;
  STYLES = STYLES_SERVICES;
  cardStyles = [this.STYLES.CARD_0, this.STYLES.CARD_1, this.STYLES.CARD_2];
  imgUris: string[] = [
    'assets/ai/services/Expertiese3.jpg',
    'assets/free/code-angular.jpg',
    'assets/ai/services/Beratung4.jpg',
  ];
  imgStyles!: object[];
  isFirstElement: boolean = false;
  isLastElement: boolean = false;
  nxtElementAnimation: boolean = false;
  lstElementAnimation: boolean = false;
  fadeinAnimationState = 'off';
  cardsDescription: string[] = [];

  constructor(
    private chapterService: ChapterService,
    public lService: LanguageService,
    public vpService: ViewportService,
    private htmlF: HtmlFormatterService
  ) {}

  ngOnInit() {
    this.onPointerChanged();
    this.vpService.breakPoint$.pipe(untilDestroyed(this)).subscribe((m) => {
      this.imgStyles = this.switchImageStyle(m);
    });
    this.imgUris.forEach((u) => {
      this.preloadImage(u);
    });
    this.lService.MasterData$.pipe(untilDestroyed(this)).subscribe((m) => {
      const styleClasses: string[] = ['font-bold'];
      this.cardsDescription = m.services.values.map((s) =>
        this.htmlF.formatTextToHtml(s.value, styleClasses)
      );
    });
  }

  ngAfterViewInit() {
    this.chapterService.addChapter(
      this.myElement,
      this.startFadeAnimation.bind(this),
      this.resetComponent.bind(this),
      this.clickLastItemHandler.bind(this),
      this.clickNextItemHandler.bind(this)
    );
    this.lService.MasterData$.pipe(untilDestroyed(this)).subscribe((c) => {
      this.chapterService.translateChapter(this.myElement, c.services.title);
    });
  }

  clickNextItemHandler(): void {
    if (!(this.nxtElementAnimation || this.lstElementAnimation)) {
      this.pointer = this.pointer + 1;
      if (this.pointer >= this.cardStyles.length) {
        this.pointer = 0;
      }
      this.flipNext();
      this.onPointerChanged();
    }
  }

  clickLastItemHandler(): void {
    if (!(this.nxtElementAnimation || this.lstElementAnimation)) {
      this.pointer = this.pointer - 1;
      if (this.pointer < 0) {
        this.pointer = this.cardStyles.length - 1;
      }
      this.flipLast();
      this.onPointerChanged();
    }
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

  private startFadeAnimation(): void {
    this.fadeinAnimationState = 'on';
  }

  private resetComponent(): void {
    this.fadeinAnimationState = 'off';
  }

  private switchImageStyle(mode: ViewportModes): object[] {
    if (mode === 'xs') {
      return this.STYLES.IMG_SIZE_XS;
    } else {
      return this.STYLES.IMG_SIZE_nXS;
    }
  }

  private preloadImage(url: string): void {
    const img = new Image();
    img.src = url;
  }
}
