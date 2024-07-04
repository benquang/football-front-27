import { Component, OnInit } from '@angular/core';
import { UrlConstant } from '@constants/url.constant';
import langDataEn from '@languages/en.json';
import langDataVi from '@languages/vi.json';
import { AuthService } from '@services/auth/auth.service';

@Component({
  selector: 'app-management-header',
  templateUrl: './management-header.component.html',
  styleUrls: ['./management-header.component.scss'],
})
export class ManagementHeaderComponent implements OnInit {

  urlConst = UrlConstant;
  avatarOfUser = '';

  // Ngon ngu hien thi //////////
  langCode: 'en' | 'vi' = localStorage.getItem('language') as 'en' | 'vi' ?? 'vi';
  langData: Record<string, string> = (localStorage.getItem('language') === 'en' ? langDataEn : langDataVi).LAYOUT.MNG.HEADER;
  ///////////////////////////////

  constructor(
    private authSvc: AuthService,
  ) { }

  ngOnInit(): void {
    this.avatarOfUser = this.authSvc.getAvatarOfLogin();
  }

  doLogout(): void {
    this.authSvc.doLogout();
  }

  switchLang(lang: 'en' | 'vi'): void {
    localStorage.setItem('language', lang);
    this.langCode = lang;
    window.location.reload();
  }
}
