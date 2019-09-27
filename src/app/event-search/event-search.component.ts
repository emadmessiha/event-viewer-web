import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import { EventsService } from '../services/events.service';
import { EventItem } from '../models/event.model';
import { PagedEvents } from '../models/paged-events.model';
import { HttpErrorResponse } from '@angular/common/http';
import { BaseComponent } from '../base-component';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';


@Component({
  selector: 'app-events',
  templateUrl: './event-search.component.html',
  styleUrls: ['./event-search.component.css'],
  providers: [
    EventsService
  ]
})
export class EventSearchComponent extends BaseComponent implements OnInit {
  displayedColumns: string[] = ['event_date', 'event_type', 'event_summary', 'event_size'];
  defaultStartDate = new Date(2015, 10, 18);
  defaultDuration = '30';
  startDateControl = new FormControl(this.defaultStartDate, [Validators.required]);
  durationControl = new FormControl(this.defaultDuration, [Validators.required]);
  searchForm = new FormGroup({
    startDate: this.startDateControl,
    duration: this.durationControl
  });
  events: EventItem[] = [];
  currentPageIndex = 0;
  currentPageSize = 20;
  currentTotalResults = 0;
  dataSource = new MatTableDataSource<EventItem>(this.events);
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(
    private snackBar: MatSnackBar,
    private eventsService: EventsService) {
      super(snackBar);
    }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  submitSearch() {
    if (this.searchForm.valid) {
      this.eventsService.searchEvents(
        this.startDateControl.value,
        this.durationControl.value,
        this.currentPageSize,
        this.currentPageIndex)
        .subscribe((pagedEvents: PagedEvents) => {
          this.events = pagedEvents.data;
          this.currentTotalResults = pagedEvents.totalResults;
      },
      (err: HttpErrorResponse) => {
        this.openMessageSnackBar('Server response: ' + err.status + ' - ' + err.statusText);
      });
    } else {
      this.openMessageSnackBar('Search invalid, start date must be a valid date');
    }
  }

  pageChange(pagingEvent: PageEvent) {
    this.currentPageIndex = pagingEvent.pageIndex;
    this.currentPageSize = pagingEvent.pageSize;
    this.submitSearch();
  }

  onRowClicked(row) {
    console.log(row);
  }

}
