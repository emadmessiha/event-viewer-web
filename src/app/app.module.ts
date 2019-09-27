import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicHttpInterceptor } from './basic-http-interceptor';
import { EventDetailsComponent } from './event-details/event-details.component';
import { EventSearchComponent } from './event-search/event-search.component';
import { MaterialModule } from './material.module';
import { LoadingIndicatorService } from './services/loading-indicator.service';

@NgModule({
  declarations: [
    AppComponent,
    EventDetailsComponent,
    EventSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [
    LoadingIndicatorService,
    { provide: HTTP_INTERCEPTORS, useClass: BasicHttpInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
