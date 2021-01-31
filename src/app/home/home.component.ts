import { Component, OnInit } from '@angular/core';
import { makeStateKey, TransferState } from '@angular/platform-browser';
import { LandingPageService } from 'src/services/landing-page.service';

const DATA_KEY = makeStateKey('spaceXdata');

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  spaceXdata: any;
  spaceXdetails;

  constructor(private landingPageService: LandingPageService, private state: TransferState) { }

  ngOnInit() {

    this.spaceXdata = this.state.get(DATA_KEY, null as any);
    if (!this.spaceXdata) {
      this.spaceXdetails = [];
      this.landingPageService.getLandingPageData().subscribe((response) => {
        this.spaceXdetails = response;
        this.state.set(DATA_KEY, response as any);
      });
    }

  }

  updateDetails(data) {
    if (data) {
      this.spaceXdetails = data.data;
    }
  }

}
