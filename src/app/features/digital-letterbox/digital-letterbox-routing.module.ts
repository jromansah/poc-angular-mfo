import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DigitalLetterboxComponent } from './digital-letterbox.component';
import { JournalResolver } from './resolvers/journal.resolver';

const routes: Routes = [
  {
    path: '',
    resolve: { journals: JournalResolver },
    component: DigitalLetterboxComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DigitalRoutingModule {}
