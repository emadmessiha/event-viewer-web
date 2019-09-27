import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PagedEvents } from './models/paged-events.model';
import { EventItem } from './models/event.model';

@Injectable()
export class EventsService {
  eventsAPIBaseUrl: string = environment.apiUrl + '/events';
  eventSearchUrl: string = this.eventsAPIBaseUrl + '/search';

  constructor(private http: HttpClient) { }

  formatDate(d: Date): string {
    return d.toISOString().split('T')[0];
  }

  searchEvents(startDate: Date, numDays: number, pageSize: number = 20, pageNumber: number = 1): Observable<PagedEvents> {
    const dateString: string = this.formatDate(startDate);
    return this.http.get<PagedEvents>(this.eventSearchUrl + `/${dateString}/${numDays}?page=${pageNumber}&pageSize=${pageSize}`);
  }

  getEventDetails(eventObjectId: string) {
    return this.http.get<EventItem>(this.eventsAPIBaseUrl + `/${eventObjectId}`);
  }
}
