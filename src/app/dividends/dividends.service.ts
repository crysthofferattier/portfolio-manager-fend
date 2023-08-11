import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DividendsService {
  env = environment;
  apiURL = this.env.apiUrl;

  constructor(private http: HttpClient) { }

  getDividends() {
    return this.http.get(this.apiURL + '/dividends.json', this.env.httpHeaders);
  }

  add(dividend: any) {
    return this.http.post(this.apiURL + '/dividends.json', dividend, this.env.httpHeaders);
  }

  edit() { }

  delete(id: any) {
    return this.http.delete(this.apiURL + '/dividends/' + id + '.json', this.env.httpHeaders)
  }

  getDividendsPerType() {
    return this.http.get(this.apiURL + '/dividends/get-total-dividends-per-type.json', this.env.httpHeaders);
  }

  getMonthlyDividends() {
    return this.http.get(this.apiURL + '/dividends/dividends-per-month.json', this.env.httpHeaders);
  }

  getMonthlyDividendsPerType() {
    return this.http.get(this.apiURL + '/dividends/dividends-per-month-type.json', this.env.httpHeaders);
  }
}
