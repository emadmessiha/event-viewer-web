import { Component } from '@angular/core';
import { NavigationStart, Router, RouterEvent } from '@angular/router';
import { LoadingIndicatorService } from './services/loading-indicator.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Event Viewer Web';
  showLoadingIndicator = true;
  isLoading: Subject<boolean> = this.loaderService.isLoading;

  constructor(private router: Router, private loaderService: LoadingIndicatorService) {
    this.router.events.subscribe((routerEvent: RouterEvent) => {
      this.showLoadingIndicator = (routerEvent instanceof NavigationStart);
    });
  }
}
