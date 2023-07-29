import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  auth(creds: any){
    return this.http.post(this.apiUrl + '/users/login.json', creds);
  }

  logoff(){
    return this.http.post(this.apiUrl + '/users/logoff.json', 'creds');
  }
}