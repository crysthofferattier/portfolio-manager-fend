import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent {

  constructor(private auth: AuthService, private route: Router){}

  logoff(){    
    localStorage.clear();
    this.auth.logoff();
    this.route.navigate(['login']);
  }
}
