import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot
} from '@angular/router';
import { map, Observable } from 'rxjs';
import { Report } from 'src/app/core/models/report.model';
import { ReportService } from 'src/app/core/services/report.service';

@Injectable({
  providedIn: 'root',
})
export class ReportResolver implements Resolve<Report[]> {
  constructor(public reportService: ReportService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Report[]> {
    const filterType: string = route?.queryParams['filter'];

    return this.reportService
      ?.get()
      .pipe(
        map((reports: Report[]) =>
          filterType ? reports.filter((r) => r.type === filterType) : reports
        )
      );
  }
}
