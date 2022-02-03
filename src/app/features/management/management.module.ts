import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ManagementComponent } from './management.component';
import { ManagementRoutingModule } from './manangement-routing.module';



@NgModule({
  declarations: [
    ManagementComponent
  ],
  imports: [
    CommonModule,
    ManagementRoutingModule
  ]
})
export class ManagementModule { }
