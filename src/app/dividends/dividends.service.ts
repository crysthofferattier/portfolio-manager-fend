import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DividendsService {
  apiURL = "http://localhost:8765/api/v1";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  constructor(private http: HttpClient) { }

  getDividends() {
    return this.http.get(this.apiURL + '/dividends.json');
  }

  add(dividend: any) {
    return this.http.post(this.apiURL + '/dividends.json', dividend, this.httpOptions);
  }

  edit() { }

  delete(id: any) {
    return this.http.delete(this.apiURL + '/dividends/' + id + '.json')
  }

  getDividendsPerType() {
    return this.http.get(this.apiURL + '/dividends/get-total-dividends-per-type.json');
  }
}
