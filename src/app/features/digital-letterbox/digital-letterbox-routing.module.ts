import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DigitalLetterboxComponent } from './digital-letterbox.component';

const routes: Routes = [
  {
    path: '',
    component: DigitalLetterboxComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DigitalRoutingModule {}
