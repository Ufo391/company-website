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
  fontStyles = [{ color: 'inherit' }, { color: 'white' }, { color: 'white' }];
  titleStyles = [
    { color: '#daeaf0', fontSize: '0px' },
    { color: '#9fb1c5', fontSize: '0px' },
    { color: '#b2bccd', fontSize: '0px' },
  ];
  imgUris: string[] = [
    'assets/ai/services/Expertiese3.jpg',
    'assets/ai/services/Entwicklung4.jpg',

    'assets/ai/services/Beratung4.jpg',
  ];
  imgStyles = [
    {
      width: '110%',
      height: '110%',
      transform: 'translate(-10%, 0%)',
    },
    {
      width: '133%',
      height: '133%',
    },
    {
      width: '110%',
      height: '110%',
      transform: 'translate(0%, -5%)',
    },
  ];
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

  private startFadeAnimation(): void {
    this.fadeinAnimation = 'on';
  }

  private resetComponent(): void {
    this.fadeinAnimation = 'off';
  }
}
