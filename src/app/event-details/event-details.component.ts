import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BaseComponent } from '../base-component';
import { EventItem } from '../models/event.model';
import { EventsService } from '../services/events.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent extends BaseComponent implements OnInit {
  @Input() eventId: string;
  event: EventItem = new EventItem();

  constructor(
    private eventsService: EventsService,
    private snackBar: MatSnackBar) {
      super(snackBar);
      this.eventsService.selectedEventChanged.subscribe((eventId: string) => {
        this.eventId = eventId;
        this.populateDetails();
      });
  }

  ngOnInit() {
  }

  populateDetails() {
    if (this.eventId) {
      this.eventsService.getEventDetails(this.eventId)
        .subscribe((eventItem: EventItem) => {
          this.event = eventItem;
      },
      (err: HttpErrorResponse) => {
        this.openMessageSnackBar('Server response: ' + err.status + ' - ' + err.statusText);
      });
    }
  }

}
