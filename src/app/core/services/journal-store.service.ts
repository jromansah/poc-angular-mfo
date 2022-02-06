import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { Journal } from '../models/journal.model';
import { JournalService } from './journal.service';

@Injectable({
  providedIn: 'root',
})
export class JournalStoreService {
  constructor(private journalService: JournalService) {
    journalService.get().subscribe((j) => (this.journals = j));
  }

  private readonly _journals = new BehaviorSubject<Journal[]>([]);
  readonly journals$ = this._journals.asObservable();
  readonly count$ = this.journals$.pipe(map((journals) => journals.length));

  get journals(): Journal[] {
    return this._journals?.getValue();
  }

  set journals(val: Journal[]) {
    this._journals?.next(val);
  }

  add(journal: Journal): void {
    if (!journal) return;
    this.journalService
      .add(journal)
      .subscribe((journals) => (this.journals = journals));
  }
}
