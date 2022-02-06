import { Component, OnInit } from '@angular/core';
import { JournalStoreService } from 'src/app/core/services/journal-store.service';

@Component({
  selector: 'app-digital-letterbox',
  templateUrl: './digital-letterbox.component.html',
  styleUrls: ['./digital-letterbox.component.scss'],
})
export class DigitalLetterboxComponent implements OnInit {
  constructor(public journalStoreService: JournalStoreService) {}

  ngOnInit(): void {}
}
