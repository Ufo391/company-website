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
import { ViewportModes } from 'src/app/models/ViewportModes';

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
  cardStyles = [
    { background: '#daeaf0' },
    { background: '#9fb1c5' },
    { background: '#b2bccd' },
  ];
  imgUris: string[] = [
    'assets/ai/services/Expertiese3.jpg',
    'assets/ai/services/Entwicklung4.jpg',
    'assets/ai/services/Beratung4.jpg',
  ];
  imgStyles!: object[];
  isFirstElement: boolean = false;
  isLastElement: boolean = false;
  nxtElementAnimation: boolean = false;
  lstElementAnimation: boolean = false;
  fadeinAnimation = 'off';

  constructor(
    private chapterService: ChapterService,
    public lService: LanguageService,
    public vpService: ViewportService
  ) {}

  ngOnInit() {
    this.onPointerChanged();
    this.vpService.breakPointS
      .pipe(untilDestroyed(this))
      .subscribe((m) => {
        this.imgStyles = this.switchImageStyle(m);
      });
    this.imgUris.forEach((u) => {
      this.preloadImage(u);
    });
  }

  ngAfterViewInit() {
    this.chapterService.addChapter(
      this.myElement,
      this.startFadeAnimation.bind(this),
      this.resetComponent.bind(this)
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
    this.fadeinAnimation = 'on';
  }

  private resetComponent(): void {
    this.fadeinAnimation = 'off';
  }

  private switchImageStyle(mode: ViewportModes): object[] {
    if (mode === 'xs') {
      return [
        {
          width: '100%',
          height: '100%',
        },
        {
          width: '130%',
          height: '130%',
        },
        {
          width: '110%',
          height: '110%',
        },
      ];
    } else {
      return [
        {
          width: '150%',
          height: '100%',
        },
        {
          width: '150%',
          height: '110%',
        },
        {
          width: '100%',
          height: '100%',
        },
      ];
    }
  }

  private preloadImage(url: string): void {
    const img = new Image();
    img.src = url;
  }
}
