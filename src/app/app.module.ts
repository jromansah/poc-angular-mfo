import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { PocSignalrService } from './core/services/poc-signalr.service';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, CoreModule, SharedModule],
  providers: [
    PocSignalrService,
    {
      provide: APP_INITIALIZER,
      useFactory: (signalrService: PocSignalrService) => () =>
        signalrService.initiateSignalrConnection(),
      deps: [PocSignalrService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
