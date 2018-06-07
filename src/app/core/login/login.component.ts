import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  startYear: number;
  currentYear: number;

  loginData: { username: string; password: string };

  constructor() { }

  ngOnInit() {
    this.startYear = 2018;
    this.currentYear = new Date().getFullYear();
    this.loginData = { username:  '', password: ''};
  }

  login() {
    console.log(this.loginData.username + ' ' + this.loginData.password);
  }

}
