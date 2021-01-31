import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LandingPageService } from 'src/services/landing-page.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public filterForm: FormGroup;
  trueFalseList;
  yearsList;

  @Output() sendData: EventEmitter<any> = new EventEmitter<any>();

  constructor(private formBuilder: FormBuilder, private landingPageService: LandingPageService, private router: Router) { }

  ngOnInit() {
    this.trueFalseList = [{
      label: 'True',
      code: true
    }, {
      label: 'False',
      code: false
    }];

    this.yearsList = ["2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020"];

    this.createForm();
  }


  createForm() {
    this.filterForm = this.formBuilder.group({
      'year': null,
      'isLandingSuccessful': null,
      'isLaunchSuccessful': null
    });
  }

  onFilterChange() {
    if (this.filterForm) {
      if (this.filterForm.value) {
        this.router.navigate([], {
          queryParams: {
            'launchSuccessFlag': this.filterForm.value.isLaunchSuccessful,
            'landSuccessFlag': this.filterForm.value.isLandingSuccessful,
            'launchYear': this.filterForm.value.year
          }
        });
      }

    }
  }

}
