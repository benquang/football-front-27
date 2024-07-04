import { Component } from '@angular/core';
import { UrlConstant } from '@constants/url.constant';
import langDataEn from '@languages/en.json';
import langDataVi from '@languages/vi.json';
import { BreadCrumbHome } from '@widget/breadcrumb-home/breadcrumb-home.model';
import { qhDoanhNghiepMenu } from '../qh-doanh-nghiep.menu';

@Component({
  selector: 'app-recruitment-from-businesses-page',
  templateUrl: './recruitment-from-businesses-page.component.html',
  styleUrls: ['./recruitment-from-businesses-page.component.scss'],
})
export class RecruitmentFromBusinessesPageComponent {
  image1 = 'assets/img/bg/banner-tddn-1-min.jpg';
  image2 = 'assets/img/bg/banner-tddn-2-min.jpg';

  langCode: 'en' | 'vi' = localStorage.getItem('language') as 'en' | 'vi' ?? 'vi';
  langData: Record<string, string> = (localStorage.getItem('language') === 'en' ? langDataEn : langDataVi).MAIN.QH_DOANH_NGHIEP.TUYEN_DUNG;

  listBreadcrumbTitle = this.langCode === 'vi' ? {
    TUYEN_DUNG_TU_DN: 'Tuyển dụng từ Doanh nghiệp',
    TRANG_CHU: 'Trang chủ',
    QUAN_HE_DOANH_NGHIEP: 'Quan hệ doanh nghiệp',
  } : {
    TUYEN_DUNG_TU_DN: 'Hiring from Enterprises',
    TRANG_CHU: 'Home',
    QUAN_HE_DOANH_NGHIEP: 'Business relationship',
  };

  breadcrumbObj: BreadCrumbHome = new BreadCrumbHome({
    heading: this.listBreadcrumbTitle.TUYEN_DUNG_TU_DN,
    listBreadcrumb: [
      {
        title: this.listBreadcrumbTitle.TRANG_CHU,
        link: UrlConstant.ROUTE.MAIN.HOMEPAGE,
      },
      {
        title: this.listBreadcrumbTitle.QUAN_HE_DOANH_NGHIEP,
        link: UrlConstant.ROUTE.MAIN.QH_DN.BASE,
      },
    ],
  });

  panels = qhDoanhNghiepMenu;
}
