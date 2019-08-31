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

function collapse(dir) {
  return [
    query(':enter', style({ height: 0 })),
    query(':leave', animate('1s', style({ height: 0 }))),
    style({ flexDirection: dir }),
    query(':enter', animate('1s', style({ height: '300px' })))
  ];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('animCtrl', [  //  <--- ADDED
      transition('* <=> *', [
        query('@*', animateChild())
      ])
    ]),
    trigger('reversableLayout', [
      state('A', style({ flexDirection: 'column' })),
      state('B', style({ flexDirection: 'column-reverse' })),
      transition('A => B', collapse('column-reverse')),
      transition('B => A', collapse('column'))
    ])
  ]
})
export class AppComponent {
  title = 'angular-test';

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation']
  }
}
