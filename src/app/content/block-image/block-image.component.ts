import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnDestroy,
} from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';
import {
  animationInSeconds,
  backgroundScrollAnimation,
  headlineScrollAnimation,
  headlineScrollInSecounds,
  opacitySubtitleInSecounds,
  subtitleOpacityAnimation,
} from './block-image.animations';

@Component({
  selector: 'app-block-image',
  templateUrl: './block-image.component.html',
  styleUrls: ['./block-image.component.scss'],
  animations: [
    backgroundScrollAnimation,
    headlineScrollAnimation,
    subtitleOpacityAnimation,
  ],
})
export class BlockImageComponent implements OnDestroy, AfterViewInit {
  animationStatusBackground = 'on';
  animationStatusHeadline = 'on';
  animationStatusSubtitle = ['off', 'off', 'off'];
  timerBackgroundId: any;

  ngOnDestroy(): void {
    clearInterval(this.timerBackgroundId);
  }

  constructor(
    private cdRef: ChangeDetectorRef,
    public lService: LanguageService
  ) {}

  ngAfterViewInit(): void {
    this.timerBackgroundId = setInterval(() => {
      this.toggleAnimation();
    }, animationInSeconds * 1000 + 5000);

    let index: number = 0;
    setTimeout(() => {
      const opacityTimerId = setInterval(() => {
        if (index === this.animationStatusSubtitle.length) {
          clearInterval(opacityTimerId);
        } else {
          this.animationStatusSubtitle[index] = 'on';
          index += 1;
        }
      }, opacitySubtitleInSecounds * 1000);
    }, headlineScrollInSecounds * 1000);
    this.toggleAnimation();
    this.cdRef.detectChanges();
  }

  toggleAnimation() {
    this.animationStatusBackground =
      this.animationStatusBackground === 'on' ? 'off' : 'on';
    this.animationStatusHeadline =
      this.animationStatusHeadline === 'on' ? 'off' : 'off';
  }
}
