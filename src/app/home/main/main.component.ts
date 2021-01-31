import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LandingPageService } from 'src/services/landing-page.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  @Input('spaceXdetails') spaceXdetails;

  constructor(private route: ActivatedRoute, private router: Router, private landingPageService: LandingPageService) { }

  ngOnInit() {
    let sub = this.route
      .queryParams
      .subscribe(params => {
        if (params && params['launchSuccessFlag'] && params['landSuccessFlag'] && params['launchYear']) {
          this.landingPageService.getFilteredData({
            'launchSuccessFlag': params['landSuccessFlag'],
            'landSuccessFlag': params['launchSuccessFlag'],
            'launchYear': params['launchYear']
          }).subscribe((response) => {
            if (response) {
              this.spaceXdetails = response;
            }
          });
        }
        else if (params && params['launchSuccessFlag'] && params['landSuccessFlag']) {
          this.landingPageService.getSuccessfulLaunchAndLandData({
            'launchSuccessFlag': params['landSuccessFlag'],
            'landSuccessFlag': params['launchSuccessFlag']
          }).subscribe((response) => {
            if (response) {
              this.spaceXdetails = response;
            }
          });
        }
        else if (params && params['launchSuccessFlag']) {
          this.landingPageService.getSuccessfulLaunchingData({
            'launchSuccessFlag': params['landSuccessFlag']
          }).subscribe((response) => {
            if (response) {
              this.spaceXdetails = response;
            }
          });
        }
      });
  }

}
