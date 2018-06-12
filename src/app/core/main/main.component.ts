import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService, LOGIN_URL } from '../auth/authentication.service';
import { Router } from '@angular/router';

const CURRENT_LANG = 'currentLang';
const EN = 'en';
const RU = 'ru';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  isCollapsed = true;

  languages = [EN, RU];
  currentLang = EN;

  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private translate: TranslateService) { }

  ngOnInit() {
    this.currentLang = localStorage.getItem(CURRENT_LANG) || EN;
   }

  logout(): void {
    this.authService.logout();
    this.router.navigate([LOGIN_URL]);
  }

  onLanguageChanged(lang: string): void {
    localStorage.setItem(CURRENT_LANG, lang);
    this.currentLang = lang;
    this.translate.setDefaultLang(lang);
    this.translate.use(lang);
  }
}
