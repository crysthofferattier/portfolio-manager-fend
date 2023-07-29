import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  authForm = this.formBuilder.group({
    email: '',
    password: ''
  });
  isAuthenticated = false;

  constructor(private authSrvc: AuthService,
    private formBuilder: FormBuilder,
    private route: Router) { }

  ngOnInit(): void {

  }

  onSubmit() {
    this.authSrvc.auth(this.authForm.value)
      .subscribe((data: any = {}) => {
        if (data.token) {
          this.isAuthenticated = true;
          localStorage.setItem('token', data.token);
          this.route.navigate(['dashboard']);
        }
      });
  }
}
