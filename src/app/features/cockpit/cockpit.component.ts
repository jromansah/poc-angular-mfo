import { Component, OnInit } from '@angular/core';
import { PocSignalrService } from 'src/app/core/services/poc-signalr.service';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.scss']
})
export class CockpitComponent implements OnInit {

  hubMessage: string | undefined;
  hubCount: number | undefined;

  constructor(public pocSignalrService: PocSignalrService) {}

  ngOnInit(): void {
    this.pocSignalrService?.connection?.invoke('GetMessage').catch((error) => {
      console.log(`PocHub.GetMessage error: ${error}`);
    });

    this.pocSignalrService.hubGetMessage.subscribe((message: string) => {
      this.hubMessage = message;
    });

    this.pocSignalrService?.connection?.invoke('GetCounter').catch((error) => {
      console.log(`PocHub.GetCounter error: ${error}`);
    });

    this.pocSignalrService.hubCounter.subscribe(
      (number: number) => {
        this.hubCount = number;
      }
    );
  }

}
