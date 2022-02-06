import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { JournalStoreService } from 'src/app/core/services/journal-store.service';

@Component({
  selector: 'app-digital-letterbox-control',
  templateUrl: './digital-letterbox-control.component.html',
  styleUrls: ['./digital-letterbox-control.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DigitalLetterboxControlComponent implements OnInit {

  constructor(public journalStoreService: JournalStoreService) {}

  ngOnInit(): void {}

  addJournal() {
    this.journalStoreService.add({
      name: 'new journal',
      type: 'x',
    });
  }
}
