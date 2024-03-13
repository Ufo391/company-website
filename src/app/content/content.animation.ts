import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const opacityHeaderInMs: number = 1000;
export const attentionAnimationInMs: number = 1500;

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

export const attentionRotateAnimation = trigger('attentionRotateAnimation', [
  state(
    'on',
    style({
      transform: 'scale(1.25) rotate(-25deg)'
    })
  ),
  state(
    'off',
    style({
      transform: 'scale(0.75) rotate(-25deg)'
    })
  ),
  transition('off <=> on', [animate(`${attentionAnimationInMs}ms`)]),
]);

export const attentionAnimation = trigger('attentionAnimation', [
  state(
    'on',
    style({
      transform: 'scale(1.1)',
    })
  ),
  state(
    'off',
    style({
      transform: 'scale(0.95)',
    })
  ),
  transition('off <=> on', [animate(`${attentionAnimationInMs}ms`)]),
]);
