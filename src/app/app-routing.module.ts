import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventSearchComponent } from './event-search/event-search.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { EventsService } from './services/events.service';


const routes: Routes = [
  { path: '', component: EventSearchComponent },
  { path: ':id', component: EventDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [EventsService]
})
export class AppRoutingModule { }
