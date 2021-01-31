import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LandingPageService {

  constructor(private http: HttpClient) { }

  //to load all data for server side scripting
  getLandingPageData(): Observable<any> {
    return this.http.get<any>('https://api.spacexdata.com/v3/launches?limit=100');
  }

  //api for succeful launching
  getSuccessfulLaunchingData(data): Observable<any> {
    return this.http.get<any>('https://api.spaceXdata.com/v3/launches?limit=100&launch_success=' + data.launchSuccessFlag);
  }

  //api for successful launch and land
  getSuccessfulLaunchAndLandData(data): Observable<any> {
    return this.http.get<any>('https://api.spaceXdata.com/v3/launches?limit=100&launch_success=' + data.launchSuccessFlag + '&land_success=' + data.landSuccessFlag);
  }

  //to load data based on all filters
  getFilteredData(data): Observable<any> {
    return this.http.get<any>('https://api.spaceXdata.com/v3/launches?limit=100&launch_success=' + data.launchSuccessFlag + '&land_success=' + data.landSuccessFlag + '&launch_year=' + data.launchYear);
  }


}
