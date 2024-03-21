import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { ViewportModes } from 'src/app/models/viewportModes';
import { ChapterService } from 'src/app/services/chapter.service';
import { HtmlFormatterService } from 'src/app/services/html-formatter.service';
import { LanguageService } from 'src/app/services/language.service';
import { ViewportService } from 'src/app/services/viewport.service';
import {
  flyInOutAnimation,
  flyInOutAnimationInMs,
  opacityAnimation,
} from '../content.animation';
import { STYLES_SERVICES } from './services.styles';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
  animations: [opacityAnimation, flyInOutAnimation],
})
@UntilDestroy()
export class ServicesComponent implements OnInit, AfterViewInit {
  @ViewChild('title') myElement!: ElementRef;
  readonly cardHeight: string = '90vh';
  readonly flipSpeedInMs: number = 1000;
  pointer: number = 0;
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
  isFlying: boolean = false;
  isTouchHelpShowed: boolean = false;
  isTouchHelpVisible: boolean = false;

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
      this.showTouchHelp();
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
      this.showTouchHelp();
    }
  }

  private onPointerChanged(): void {
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

  showTouchHelp(): void {
    if (this.isTouchHelpShowed === false) {
      this.isTouchHelpShowed = true;
      let counter: number = 0;
      const id = setInterval(() => {
        this.isTouchHelpVisible = true;
        this.isFlying = !this.isFlying;
        counter += 1;
        if (counter > 3) {
          clearInterval(id);
          this.isTouchHelpVisible = false;
        }
      }, flyInOutAnimationInMs);
    }
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
