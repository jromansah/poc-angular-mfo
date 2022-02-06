import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Report } from '../models/report.model';

@Injectable({
  providedIn: 'root',
})
export class ReportService {
  constructor() {}

  // IRL we get data here from httpClient
  get(): Observable<Report[]> {
    return of([
      {
        id: 1,
        name: 'report 1',
        type: 'a',
      },
      {
        id: 2,
        name: 'report 2',
        type: 'b',
      },
      {
        id: 3,
        name: 'report 3',
        type: 'c',
      },
    ]);
  }
}
