import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
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
export class BlockImageComponent implements OnInit, OnDestroy, AfterViewInit {
  animationStatusBackground = 'on';
  animationStatusHeadline = 'on';
  animationStatusSubtitle = ['off', 'off', 'off'];
  timerBackgroundId: any;

  ngOnInit() {
    this.timerBackgroundId = setInterval(() => {
      this.toggleAnimation();
    }, animationInSeconds * 1000 + 5000);

    let index: number = 0;
    const scrollTimerId = setInterval(() => {
      const opacityTimerId = setInterval(() => {
        if (index === this.animationStatusSubtitle.length) {
          clearInterval(opacityTimerId);
        } else {
          this.animationStatusSubtitle[index] = 'on';
          index += 1;
        }
      }, opacitySubtitleInSecounds * 1000);
      clearInterval(scrollTimerId);
    }, headlineScrollInSecounds * 1000);
  }

  ngOnDestroy() {
    clearInterval(this.timerBackgroundId);
  }

  constructor() {}

  ngAfterViewInit(): void {
    this.toggleAnimation();
  }

  toggleAnimation() {
    this.animationStatusBackground =
      this.animationStatusBackground === 'on' ? 'off' : 'on';
    this.animationStatusHeadline =
      this.animationStatusHeadline === 'on' ? 'off' : 'off';
  }
}
