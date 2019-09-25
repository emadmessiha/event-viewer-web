import { EventItem } from './event.model';

export class PagedEventResults {
  page: number;
  pageSize: number;
  totalResults: number;
  totalPages: number;
  data: EventItem[];
}
