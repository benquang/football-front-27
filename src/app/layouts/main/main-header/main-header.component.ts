import { Component, OnInit } from '@angular/core';
import { UrlConstant } from '@constants/url.constant';
import langDataEn from '@languages/en.json';
import langDataVi from '@languages/vi.json';
import { AuthService } from '@services/auth/auth.service';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss'],
})
export class MainHeaderComponent implements OnInit {

  urlConst = UrlConstant;

  isLogin = false;
  isStudent = false;
  isAdmin = false;

  userName = 'Menu';
  userAvatarLink = '';

  searchValue = '';

  // Language ///////////////////
  langCode: 'en' | 'vi' = localStorage.getItem('language') as 'en' | 'vi' ?? 'vi';
  langData: Record<string, string> = (localStorage.getItem('language') === 'en' ? langDataEn : langDataVi).LAYOUT.MAIN.HEADER;
  ///////////////////////////////

  isMobileMenuOpen = false;
  isMobileSubMenuOpen = false;

  constructor(
    private authSvc: AuthService,
  ) { }

  ngOnInit(): void {

  }

  search() {
    console.log(this.searchValue);
  }

  onLogOut(): void {
    this.authSvc.doLogout();
  }

  switchLang(lang: string): void {
    localStorage.setItem('language', lang);
    window.location.reload();
  }

}
