import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import { EventsService } from '../services/events.service';
import { EventItem } from '../models/event.model';
import { PagedEvents } from '../models/paged-events.model';
import { HttpErrorResponse } from '@angular/common/http';
import { BaseComponent } from '../base-component';


@Component({
  selector: 'app-events',
  templateUrl: './event-search.component.html',
  styleUrls: ['./event-search.component.css'],
  providers: [
    EventsService
  ]
})
export class EventSearchComponent extends BaseComponent implements OnInit {
  defaultStartDate = new Date(2015, 10, 18);
  defaultDuration = '30';
  startDateControl = new FormControl(this.defaultStartDate, [Validators.required]);
  durationControl = new FormControl(this.defaultDuration, [Validators.required]);
  searchForm = new FormGroup({
    startDate: this.startDateControl,
    duration: this.durationControl
  });
  events: EventItem[] = [];

  constructor(
    private snackBar: MatSnackBar,
    private eventsService: EventsService) {
      super(snackBar);
    }

  ngOnInit() {
  }

  submitSearch() {
    if (this.searchForm.valid) {
      this.eventsService.searchEvents(this.startDateControl.value, this.durationControl.value).subscribe((pagedEvents: PagedEvents) => {
        console.log(pagedEvents);
      },
      (err: HttpErrorResponse) => {
        this.openMessageSnackBar('Server response: ' + err.status + ' - ' + err.statusText);
      });
    } else {
      this.openMessageSnackBar('Search invalid, start date must be a valid date');
    }
  }

}
