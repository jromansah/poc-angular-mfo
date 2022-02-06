import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Journal } from '../models/journal.model';

@Injectable({
  providedIn: 'root',
})
export class JournalService {
  private journals: Journal[] = [
    {
      name: 'journal 1',
      type: 'a',
    },
    {
      name: 'journal 2',
      type: 'b',
    },
    {
      name: 'journal 3',
      type: 'c',
    },
  ];

  constructor() {}

  // IRL we get data here from httpClient
  get(): Observable<Journal[]> {
    return of(this.journals);
  }

  add(j: Journal): Observable<Journal[]> {
    this.journals.push(j);
    return of(this.journals);
  }
}
