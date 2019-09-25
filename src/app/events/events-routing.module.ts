import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventSearchComponent } from './event-search/event-search.component';
import { EventDetailsComponent } from './event-details/event-details.component';

const routes: Routes = [
  { path: '', component: EventSearchComponent },
  { path: '/:id', component: EventDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule { }
