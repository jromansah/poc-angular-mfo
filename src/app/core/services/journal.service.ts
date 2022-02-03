import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

// for testing put this interface here
export interface Journal {
  id: number;
  name: string;
  type: string;
}

@Injectable({
  providedIn: 'root',
})
export class JournalService {
  constructor() {}

  getJournals(): Observable<Journal[]> {
    const journals: Journal[] = [
      {
        id: 1,
        name: 'journal 1',
        type: 'a',
      },
      {
        id: 2,
        name: 'journal 2',
        type: 'b',
      },
      {
        id: 3,
        name: 'journal 3',
        type: 'c',
      },
    ];
    return of(journals);
  }
}
