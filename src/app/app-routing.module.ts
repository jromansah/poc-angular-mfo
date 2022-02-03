import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./features/cockpit/cockpit.module').then((m) => m.CockpitModule),
  },
  {
    path: 'digital-letterbox',
    loadChildren: () =>
      import('./features/digital-letterbox/digital-letterbox.module').then(
        (m) => m.DigitalLetterboxModule
      ),
  },
  {
    path: 'purchase-entry',
    loadChildren: () =>
      import('./features/purchase-entry/purchase-entry.module').then(
        (m) => m.PurchaseEntryModule
      ),
  },
  {
    path: 'management',
    loadChildren: () =>
      import('./features/management/management.module').then(
        (m) => m.ManagementModule
      ),
  },
  {
    path: 'iba-digital-letterbox',
    loadChildren: () =>
      import(
        './features/iba-digital-letterbox/iba-digital-letterbox.module'
      ).then((m) => m.IbaDigitalLetterboxModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
