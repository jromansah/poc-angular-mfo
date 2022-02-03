import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PurchaseEntryRoutingModule } from './purchase-entry-routing.module';
import { PurchaseEntryComponent } from './purchase-entry.component';



@NgModule({
  declarations: [
    PurchaseEntryComponent
  ],
  imports: [
    CommonModule,
    PurchaseEntryRoutingModule
  ]
})
export class PurchaseEntryModule { }
