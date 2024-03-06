import { animate, animateChild, keyframes, query, state, style, transition, trigger } from "@angular/animations";

const animationTime = '0.8s';

const enterKeyframes = [
  style({
    offset: 0,
    height: 0,
    opacity: 0,
    transform: 'translateX(-10%)'
  }),
  style({ 
    offset: 0.25,
    height: '*',
    opacity: 0,
    transform: 'translateX(-10%)'
  }),
  style({
    offset: 0.5,
    height: '*',
    opacity: 0,
    transform: 'translateX(-10%)'
  }),
  style({
    offset: 1,
    height: '*',
    opacity: 1,
    transform: 'translateX(0%)'
  }),
];

const leaveKeyframes = [
  style({
    offset: 0,
    height: '*',
    opacity: 1,
    transform: 'translateY(0%) scale(1)'
  }),
  style({
    offset: 0.33,
    height: '50vh',
    opacity: 0.25,
    transform: 'translateY(-10%) scale(0.75)'
  }),
  style({
    offset: 0.66,
    height: '25vh',
    opacity: 0,
    transform: 'translateY(-20%) scale(0.5)'
  }),
  style({
    offset: 1,
    height: '0vh',
    opacity: 0,
    transform: 'translateX(0%) scale(1)'
  }),
];


export const sitePageAnimation =
  trigger('slideHorizontal', [
    transition('Left <=> Right', [
      animateChild(),
      query(':leave, :enter', [style({ opacity: 0, height: 0 })]),
      query(':leave', [
        style({ transform: 'translateX(0%)', opacity: 1, height: '*' }),
        animate(
          `${animationTime} ease-in-out`,
          keyframes(leaveKeyframes)
        )
      ], { optional: true }),
      query(':enter', [
        style({ transform: 'translateX(-10%)', opacity: 0, height: 0 }),
        animate(
          `${animationTime} ease-in-out`,
          keyframes(enterKeyframes)
        )
      ], { optional: true })
    ])
  ]);