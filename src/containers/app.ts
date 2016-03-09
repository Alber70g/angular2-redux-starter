import { Component, ViewEncapsulation, Inject } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';
import AboutPage from '../containers/about-page';
import CounterPage from '../containers/counter-page';
import { Navigator, NavigatorItem, Logo } from '../components';

@Component({
  selector: 'root',
  directives: [ROUTER_DIRECTIVES, Navigator, NavigatorItem, Logo],
  encapsulation: ViewEncapsulation.None,
  styles: [require('../styles/index.css')],
  template: `
    <navigator>
      <navigator-item class="p1">
        <logo></logo>
      </navigator-item>
      <navigator-item class="p1">
        <a [routerLink]="['Counter']"
          class="text-decoration-none">Counter</a>
      </navigator-item>
      <navigator-item class="p1">
        <a [routerLink]="['About']"
          class="text-decoration-none">About Us</a>
      </navigator-item>
    </navigator>
    <div class="mt3 p1">
      <router-outlet></router-outlet>
    </div>
  `
})
@RouteConfig([
  {
    path: '/counter',
    name: 'Counter',
    component: CounterPage,
    useAsDefault: true
  },
  {
    path: '/about',
    name: 'About',
    component: AboutPage
  }
])
export default class App {
  constructor(@Inject('test') t, @Inject('x') x) {
    console.log(t);
    console.log(x);
  }
};
