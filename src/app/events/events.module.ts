import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EventDetailsComponent } from './event-details/event-details.component';
import { EventSearchComponent } from './event-search/event-search.component';
import { EventsRoutingModule } from './events-routing.module';



@NgModule({
  declarations: [EventSearchComponent, EventDetailsComponent],
  imports: [
    CommonModule,
    EventsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EventsModule { }
