import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { TextMaskDirective } from './directives/text-mask.directive';
import { TextTransformPipe } from './pipes/text-transform.pipe';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    TextMaskDirective,
    TextTransformPipe
  ],
  exports:[FooterComponent, HeaderComponent, TextMaskDirective, TextTransformPipe],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
