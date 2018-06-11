import { TranslateService } from '@ngx-translate/core';
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

  languages = ['ru', 'en'];
  currentLang = 'en';

  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private translate: TranslateService) { }

  ngOnInit() {
    this.currentLang = this.translate.getDefaultLang();
   }

  logout(): void {
    this.authService.logout();
    this.router.navigate([LOGIN_URL]);
  }

  onLanguageChanged(lang: string): void {
    this.currentLang = lang;
    this.translate.setDefaultLang(lang);
    this.translate.use(lang);
  }
}
