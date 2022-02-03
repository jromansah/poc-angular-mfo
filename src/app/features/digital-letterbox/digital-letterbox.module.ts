import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DigitalRoutingModule } from './digital-letterbox-routing.module';
import { DigitalLetterboxComponent } from './digital-letterbox.component';



@NgModule({
  declarations: [
    DigitalLetterboxComponent
  ],
  imports: [
    CommonModule,
    DigitalRoutingModule
  ]
})
export class DigitalLetterboxModule { }
