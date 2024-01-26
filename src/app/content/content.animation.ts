import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const opacityHeaderInMs: number = 1000;

export const opacityAnimation = trigger('opacityAnimation', [
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
  transition('off <=> on', [animate(`${opacityHeaderInMs}ms`)]),
]);
