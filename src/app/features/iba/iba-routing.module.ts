import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'digital-letterbox',
    loadChildren: () =>
      import('./digital-letterbox/digital-letterbox.module').then(
        (m) => m.DigitalLetterboxModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IbaRoutingModule {}
