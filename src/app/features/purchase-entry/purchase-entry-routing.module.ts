import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PurchaseEntryComponent } from './purchase-entry.component';

const routes: Routes = [{ path: '', component: PurchaseEntryComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PurchaseEntryRoutingModule { }
