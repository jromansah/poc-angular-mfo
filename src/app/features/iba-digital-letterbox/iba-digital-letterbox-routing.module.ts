import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IbaDigitalLetterboxComponent } from './iba-digital-letterbox.component';
import { ReportResolver } from './resolvers/report.resolver';

const routes: Routes = [
  {
    path: '',
    resolve: { reports: ReportResolver },
    component: IbaDigitalLetterboxComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IbaDigitalLetterboxRoutingModule {}
