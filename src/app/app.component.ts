import { Component } from '@angular/core';
import { NavigationStart, Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Event Viewer Web';
  showLoadingIndicator = true;
  constructor(private router: Router) {
    this.router.events.subscribe((routerEvent: RouterEvent) => {
      this.showLoadingIndicator = (routerEvent instanceof NavigationStart);
    });
  }
}
