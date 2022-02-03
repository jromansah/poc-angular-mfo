import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CockpitRoutingModule } from './cockpit-routing.module';
import { CockpitComponent } from './cockpit.component';

@NgModule({
  declarations: [CockpitComponent],
  imports: [CommonModule, CockpitRoutingModule],
})
export class CockpitModule {}
