import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./features/mfo/cockpit/cockpit.module').then(
        (m) => m.CockpitModule
      ),
  },
  {
    path: 'mfo',
    loadChildren: () =>
      import('./features/mfo/mfo.module').then((m) => m.MfoModule),
  },
  {
    path: 'iba',
    loadChildren: () =>
      import('./features/iba/iba.module').then((m) => m.IbaModule),
  },
  {
    path: 'mfp',
    loadChildren: () =>
      import('./features/mfp/mfp.module').then((m) => m.MfpModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
