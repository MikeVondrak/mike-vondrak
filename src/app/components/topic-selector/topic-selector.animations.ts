import { animate, keyframes, state, style, transition, trigger } from "@angular/animations";

const animationTime = '0.4s';

export const topicSelectAnimation =
  trigger('slideHorizontal', [
    state('Left', style({ transform: `skew(-12deg) translateX(0.5%)` })),
    state('Right', style({ transform: `skew(-12deg) translateX(-100%)` })),
    transition('Left <=> Right', animate(`${animationTime} ease-in-out`)),
  ]);