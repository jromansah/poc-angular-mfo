import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PocSignalrService {
  connection: signalR.HubConnection | undefined;
  hubGetMessage: BehaviorSubject<string>;
  hubCounter: BehaviorSubject<number>;

  constructor() {
    this.hubGetMessage = new BehaviorSubject<string>('');
    this.hubCounter = new BehaviorSubject<number>(0);
  }

  public initiateSignalrConnection(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.connection = new signalR.HubConnectionBuilder()
        .withUrl(environment.signalrHubUrl)
        .build();

      this.connection?.on('NotifyConnection', (message: string) => {
        this.hubGetMessage.next(message);
      });

      this.connection?.on('Counter', (number: number) => {
        this.hubCounter.next(number);
      });

      this.connection
        .start()
        .then(() => {
          console.log(
            `SignalR hub connection success! connectionId: ${this.connection?.connectionId} `
          );
          resolve();
        })
        .catch((error) => {
          console.log(`SignalR hub connection error: ${error}`);
          resolve();
        });
    });
  }
}
