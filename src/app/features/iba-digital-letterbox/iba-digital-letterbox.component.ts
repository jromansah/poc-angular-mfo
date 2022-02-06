import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Report } from 'src/app/core/models/report.model';

@Component({
  selector: 'app-iba-digital-letterbox',
  templateUrl: './iba-digital-letterbox.component.html',
  styleUrls: ['./iba-digital-letterbox.component.scss']
})
export class IbaDigitalLetterboxComponent implements OnInit {
  reports: any[] = [];

  constructor(private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.reports = this.activeRoute.snapshot.data['reports'] as Report[];
  }

  navigateTo() {
    const type = 'Purchase invoice';
    const isNew = true;
    const forBook = false;

    const url = `https://mfo-web-dev.lyadtap.com/Views/Financial/DigitalPostboxList.aspx?type=${type}&IsNew=${isNew}&ForBook=${forBook}`;
    location.assign(url);
  }


}
