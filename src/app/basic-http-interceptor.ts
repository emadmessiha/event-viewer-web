import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { LoadingIndicatorService } from './services/loading-indicator.service';

@Injectable()
export class BasicHttpInterceptor implements HttpInterceptor {
    constructor(public loaderService: LoadingIndicatorService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      this.loaderService.show();
      return next.handle(request).pipe(
          finalize(() => this.loaderService.hide())
      );
    }
}
