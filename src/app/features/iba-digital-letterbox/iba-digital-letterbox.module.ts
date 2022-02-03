import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IbaDigitalLetterboxRoutingModule } from './iba-digital-letterbox-routing.module';
import { IbaDigitalLetterboxComponent } from './iba-digital-letterbox.component';


@NgModule({
  declarations: [
    IbaDigitalLetterboxComponent
  ],
  imports: [
    CommonModule,
    IbaDigitalLetterboxRoutingModule
  ]
})
export class IbaDigitalLetterboxModule { }
