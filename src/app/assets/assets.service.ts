import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AssetsService {
  apiURL = 'http://localhost:8765/api/v1';

  constructor(private http: HttpClient) { }

  getAssets() {
    return this.http.get(this.apiURL + '/assets.json');   

  }
}
