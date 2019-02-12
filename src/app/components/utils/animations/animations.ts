import { animate, query, style, transition, trigger, state, keyframes, group, stagger } from '@angular/animations';

export const fadeIn =
  trigger('routeAnimations', [
    transition('* <=> *', [
      query(':enter, :leave', [
        style({
          position: 'absolute',
          left: 0,
          width: '100%',
          opacity: 0,
          transform: 'scale(0) translateY(100%)',
        }),
      ]),
      query(':enter', [
        animate('600ms ease', style({ opacity: 1, transform: 'scale(1) translateY(0)' })),
      ])
    ]),
]);

export function enterComponent(name: string) {
  return trigger(name, [
    state('void', style({ opacity: 0 })),
    transition(':enter', animate('1000ms ease-out')),
    ]);
}

export function enterLeft(name: string, time: number) {
  return trigger(name, [
    transition('void => *', [
      query(':enter', style({ opacity: 0, transform: 'translateX(-100px)' })),
      query(
        ':enter',
        stagger(time, [
          animate(
            1000,
            keyframes([
              style({
                transform: 'translateX(-100px)',
                opacity: 0,
                offset: 0,
              }),
              style({
                transform: 'translateX(-50px)',
                opacity: 0.5,
                offset: 0.3,
              }),
              style({
                transform: 'translateX(-20px)',
                opacity: 1,
                offset: 0.8,
              }),
              style({
                transform: 'translateX(0px)',
                opacity: 1,
                offset: 1,
              }),
            ]),
          ),
        ]),
      ),
    ]),
    transition('* => void', [
      group([
        animate(
          300,
          style({
            color: 'red',
          }),
        ),
        animate(
          800,
          style({
            transform: 'translateX(100px)',
            opacity: 0,
          }),
        ),
      ]),
    ]),
  ]);
}
