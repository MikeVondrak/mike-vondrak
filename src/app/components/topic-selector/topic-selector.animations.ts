import { animate, keyframes, state, style, transition, trigger } from "@angular/animations";

const animationTime = '0.4s';

/**
 * Animation for blue bar indicating the element is clickable
 */
export const topicSelectAnimation =
  trigger('slideHorizontal', [
    state('Left', style({ transform: `skew(-12deg) translateX(0.5%)`, borderRadius: '0 5vw 3vw 0' })),
    state('Right', style({ transform: `skew(-12deg) translateX(-100%)`, borderRadius: '3vw 0 0 5vw' })),
    transition('Left <=> Right', animate(`${animationTime} ease-in-out`)),
  ]);

/**
 * Caret indicator for current page at bottom of topic selector
 */
const currentPageKeyframes = keyframes([
  style({ offset: 0, opacity: 1}),// height: '*'}),
  style({ offset: 0.1, opacity: 0}), //height: 0 }),
  style({ offset: 0.9, opacity: 0}), //height: 0 }),
  style({ offset: 1, opacity: 1}), //height: '*'}),
])
export const currentPageAnimation = 
  trigger('currentPageTransition', [
    state('Left', style({  })),
    state('Right', style({  })),
    transition('Left <=> Right', animate(`${animationTime} ease-in-out`, currentPageKeyframes)),
  ]);