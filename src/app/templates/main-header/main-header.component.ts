import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent {

  constructor(private auth: AuthService){}

  logoff(){    
    localStorage.clear();
    this.auth.logoff();
  }
}
