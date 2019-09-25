import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-events',
  templateUrl: './event-search.component.html',
  styleUrls: ['./event-search.component.css']
})
export class EventSearchComponent implements OnInit {
  searchForm = new FormGroup({
    startDate: new FormControl('2015-11-18'),
    numberOfDays: new FormControl(30)
  });

  constructor() { }

  ngOnInit() {
  }

}
