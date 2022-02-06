import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DigitalRoutingModule } from './digital-letterbox-routing.module';
import { DigitalLetterboxComponent } from './digital-letterbox.component';
import { DigitalLetterboxControlComponent } from './digital-letterbox-control/digital-letterbox-control.component';



@NgModule({
  declarations: [
    DigitalLetterboxComponent,
    DigitalLetterboxControlComponent
  ],
  imports: [
    CommonModule,
    DigitalRoutingModule
  ]
})
export class DigitalLetterboxModule { }
