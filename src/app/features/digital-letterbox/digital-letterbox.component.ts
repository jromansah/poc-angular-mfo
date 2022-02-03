import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Journal } from 'src/app/core/services/journal.service';

@Component({
  selector: 'app-digital-letterbox',
  templateUrl: './digital-letterbox.component.html',
  styleUrls: ['./digital-letterbox.component.scss']
})
export class DigitalLetterboxComponent implements OnInit {
  journals: any[] = [];

  constructor(private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.journals = this.activeRoute.snapshot.data['journals'] as Journal[];
  }

  navigateTo() {
    const type = 'Purchase invoice';
    const isNew = true;
    const forBook = false;

    const url = `https://mfo-web-dev.lyadtap.com/Views/Financial/DigitalPostboxList.aspx?type=${type}&IsNew=${isNew}&ForBook=${forBook}`;
    location.assign(url);
  }

}
