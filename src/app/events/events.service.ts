import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PagedEventResults } from './paged-event-results';
import { EventItem } from './event.model';

@Injectable()
export class EventsService {
  eventsAPIBaseUrl: string = environment.apiUrl + '/events';
  eventSearchUrl: string = this.eventsAPIBaseUrl + '/search';

  constructor(private http: HttpClient) { }

  formatDate(d: Date): string {
    return d.toISOString().split('T')[0];
  }

  searchEvents(startDate: Date, numDays: number, pageSize: number, pageNumber: number): Observable<PagedEventResults> {
    const dateString: string = this.formatDate(startDate);
    return this.http.get<PagedEventResults>(this.eventSearchUrl + `/${dateString}/${numDays}?page=${pageNumber}&pageSize=${pageSize}`);
  }

  getEventDetails(eventObjectId: string) {
    return this.http.get<EventItem>(this.eventsAPIBaseUrl + `/${eventObjectId}`);
  }
}
