import { EventItem } from './event.model';

export class PagedEvents {
  page: number;
  pageSize: number;
  totalResults: number;
  totalPages: number;
  data: EventItem[];
}
