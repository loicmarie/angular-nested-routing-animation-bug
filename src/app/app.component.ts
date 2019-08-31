import { Component, HostBinding } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
  animateChild
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('reversableLayout', [
      state('A', style({ flexDirection: 'column' })),
      state('B', style({ flexDirection: 'column-reverse' })),
      transition('A => B', [
        query(':enter', style({ height: 0 })),

        query(':leave', [
          animate('1s', style({ height: 0 })),
          style({ height: 0 })
        ]),
        style({ flexDirection: 'column-reverse' }),
        query(':enter', [
          style({ height: '300px', opacity: 0 }),
          animate('1s', style({ opacity: 1 }))
        ])
      ]),
      transition('B => A', [
        query(':enter', style({ height: 0 })),

        query(':leave', [
          animate('1s', style({ opacity: 0 })),
          style({ height: 0 })
        ]),
        style({ flexDirection: 'column' }),
        query(':enter', [
          animate('1s', style({ height: '300px' }))
        ])
      ])
    ])
  ]
})
export class AppComponent {
  title = 'angular-test';

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation']
  }
}
