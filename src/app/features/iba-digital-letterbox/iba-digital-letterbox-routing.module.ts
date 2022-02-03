import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IbaDigitalLetterboxComponent } from './iba-digital-letterbox.component';

const routes: Routes = [{ path: '', component: IbaDigitalLetterboxComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IbaDigitalLetterboxRoutingModule { }
