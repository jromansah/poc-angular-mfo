import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DigitalLetterboxRoutingModule } from './digital-letterbox-routing.module';
import { DigitalLetterboxComponent } from './digital-letterbox.component';


@NgModule({
  declarations: [
    DigitalLetterboxComponent
  ],
  imports: [
    CommonModule,
    DigitalLetterboxRoutingModule
  ]
})
export class DigitalLetterboxModule { }
