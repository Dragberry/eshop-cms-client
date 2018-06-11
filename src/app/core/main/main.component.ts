import { Component, OnInit } from '@angular/core';
import { AuthenticationService, LOGIN_URL } from '../auth/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  isCollapsed = true;

  constructor(
    private authService: AuthenticationService,
    private router: Router) { }

  ngOnInit() { }

  logout(): void {
    this.authService.logout();
    this.router.navigate([LOGIN_URL]);
  }
}
