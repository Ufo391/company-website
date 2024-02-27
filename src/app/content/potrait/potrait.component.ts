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
  selector: 'app-potrait',
  templateUrl: './potrait.component.html',
  styleUrls: ['./potrait.component.scss'],
  animations: [opacityAnimation],
})
@UntilDestroy()
export class PotraitComponent implements OnInit, AfterViewInit {
  isFoldOut: boolean = false;
  fadeinAnimation = 'off';
  text: string[] = [];

  constructor(
    private chapterService: ChapterService,
    public lService: LanguageService,
    public vpService: ViewportService
  ) {}

  @ViewChild('title') myElement!: ElementRef;

  ngOnInit() {}

  ngAfterViewInit() {
    this.chapterService.addChapter(
      this.myElement,
      this.startFadeAnimation.bind(this),
      this.leaveFadeAnimation.bind(this),
      () => {},
      () => {}
    );
    this.lService.MasterData$.pipe(untilDestroyed(this)).subscribe((c) => {
      this.chapterService.translateChapter(this.myElement, c.aboutMe.title);
      this.text = this.splitText(c.aboutMe.value, "\n");
    });
    this.vpService.breakPoint$.pipe(untilDestroyed(this)).subscribe((v) => {
      this.isFoldOut = v === 'xl';
      this.fadeinAnimation = v === 'xl' ? 'off' : 'on';
    });

  }

  toggleFoldOut(): void {
    this.isFoldOut = !this.isFoldOut;
  }

  private startFadeAnimation(): void {
    this.fadeinAnimation = 'on';
  }

  private leaveFadeAnimation(): void {
    if (this.vpService.breakPoint$.value === 'xl') {
      this.fadeinAnimation = 'off';
    }
    this.isFoldOut = this.vpService.breakPoint$.value === 'xl';
  }

  splitText(text: string, splitter: string): string[] {
    return text.split(splitter);
  }
}
