import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

const intervalInSeconds: number = 55;
const headlineScrollInSecounds: number = 3;
const opacitySubtitleInSecounds: number = 1;

@Component({
  selector: 'app-block-image',
  templateUrl: './block-image.component.html',
  styleUrls: ['./block-image.component.scss'],
  animations: [
    trigger('backgroundScrollAnimation', [
      state(
        'on',
        style({
          opacity: 1,
          transform: 'translateX(15%) scale(1.35) rotate(-7deg)',
        })
      ),
      state(
        'off',
        style({
          opacity: 0.66,
          transform: 'translateX(-30%) scale(2) rotate(7deg)',
        })
      ),
      transition('on <=> off', [animate(`${intervalInSeconds}s`)]),
    ]),
    trigger('HeadlineScrollAnimation', [
      state(
        'on',
        style({
          opacity: 0,
          transform: 'translateX(0%) scale(0.96)',
        })
      ),
      state(
        'off',
        style({
          opacity: 1,
          transform: 'translateX(5%) scale(1)',
        })
      ),
      transition('on <=> off', [animate(`${headlineScrollInSecounds}s`)]),
    ]),
    trigger('SubtitleOpacityAnimation', [
      state(
        'on',
        style({
          opacity: 1,
        })
      ),
      state(
        'off',
        style({
          opacity: 0,
        })
      ),
      transition('on <=> off', [animate(`${opacitySubtitleInSecounds}s`)]),
    ]),
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
    }, intervalInSeconds * 1000 + 5000);

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
