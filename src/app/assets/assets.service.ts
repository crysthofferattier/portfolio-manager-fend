import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AssetsService {
  env = environment;

  constructor(private http: HttpClient) { }

  getAssets() {
    return this.http.get(this.env.apiUrl + '/assets.json', this.env.httpHeaders);
  }
}
