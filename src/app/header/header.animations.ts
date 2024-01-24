import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const opacityHeaderInMs: number = 1500;
export const delayHeaderInMs: number = 100;

export const opacityAnimation = trigger('opacityAnimation', [
  state(
    'on',
    style({
      opacity: 0.66,
    })
  ),
  state(
    'off',
    style({
      opacity: 0,
    })
  ),
  transition('off => on', [animate(`${opacityHeaderInMs}ms`)]),
]);

