import { Component, Input, OnInit } from '@angular/core';
import { EventItem } from '../models/event.model';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  @Input() eventId: string;
  event: EventItem;

  constructor() {}

  ngOnInit() {}

}
