import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot
} from '@angular/router';
import { map, Observable } from 'rxjs';
import { Journal, JournalService } from 'src/app/core/services/journal.service';

@Injectable({
  providedIn: 'root',
})
export class JournalResolver implements Resolve<Journal[]> {
  constructor(public journalService: JournalService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Journal[]> {
    const filterType: string = route?.queryParams['filter'];

    return this.journalService
      ?.getJournals()
      .pipe(
        map((journals: Journal[]) =>
          filterType ? journals.filter((j) => j.type === filterType) : journals
        )
      );
  }
}
