import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AssetsService {
  apiURL = 'http://localhost:8765/api/v1';
  env = environment;

  constructor(private http: HttpClient) { }

  getAssets() {
    console.log(5555);
    return this.http.get(this.apiURL + '/assets.json', this.env.httpHeaders);
  }
}
