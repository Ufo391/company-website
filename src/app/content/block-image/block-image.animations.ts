import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const animationInSeconds: number = 55;
export const headlineScrollInSecounds: number = 3;
export const opacitySubtitleInSecounds: number = 1;

export const backgroundScrollAnimation = trigger('backgroundScrollAnimation', [
  state(
    'on',
    style({
      opacity: 1,
      transform: 'translateX(15%) scale(1.5) rotate(-7deg)',
    })
  ),
  state(
    'off',
    style({
      opacity: 0.66,
      transform: 'translateX(-30%) scale(2) rotate(7deg)',
    })
  ),
  transition('on <=> off', [animate(`${animationInSeconds}s`)]),
]);

export const headlineScrollAnimation= trigger('headlineScrollAnimation', [
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
]);

export const subtitleOpacityAnimation = trigger('subtitleOpacityAnimation', [
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
]);
