import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { SearchFlight } from '../model/search-flight';
import { FlightInfo } from '../model/flight-info';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SearchFlightService {

  searchFlightUrl = 'http://localhost:2019/search/searchFlightByUserInput';
  constructor(private http: Http) {
  }

  // Login User JSON Data Creation and Sent request to server done here
  searchFlight(source: string, destination: string): Observable<FlightInfo[]> {
    let cpHeaders;
    let cpParams;
    let options;
    cpHeaders = new Headers({ 'Content-Type': 'application/json' });
    cpParams = new URLSearchParams();
    cpParams.set('source', source);
    cpParams.set('destination', destination);
    options = new RequestOptions({ headers: cpHeaders, params: cpParams });
    return this.http.get(this.searchFlightUrl, options)
      .map((response: Response) => <FlightInfo[]>response.json());
  }

  // private extractData(res: Response) {
  //   let body;
  //   body = res.json();
  //   console.log(body);
  //   return body;
  // }

}
