import { Component } from '@angular/core';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss'],
})
export class MainNavComponent {

  domain: any;

  returnLinkFutureMatch(tag: string): string {

    return this.domain + '/upcoming/' + tag;
  }

  returnHistoryMatch(tag: string): string {
    return this.domain + '/tran-dau/' + tag;
  }

  returnKetqua(tag: string): string {
    return this.domain + '/ket-qua/' + tag;
  }

  returnLichthidau(tag: string): string {
    return this.domain + '/lich-thi-dau/' + tag;
  }

  returnLeagues(): string {
    return this.domain + '/leagues/';
  }

  returnHome(): string {
    return this.domain;
  }

  isResponsive = false;

  toggleResponsive() {
    this.isResponsive = !this.isResponsive;
  }

  ngOnInit(): void {
    this.domain = window.location.origin;
  }

}
