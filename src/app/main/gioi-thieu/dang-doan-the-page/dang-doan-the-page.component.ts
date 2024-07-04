import { Component } from '@angular/core';
import { UrlConstant } from '@constants/url.constant';
import { SideMenuContent } from '@models/common/side-menu.model';
import { BreadCrumbHome } from '@widget/breadcrumb-home/breadcrumb-home.model';
import { gioiThieuMenu } from '../gioi-thieu.menu';

@Component({
  selector: 'app-dang-doan-the-page',
  templateUrl: './dang-doan-the-page.component.html',
  styleUrls: ['./dang-doan-the-page.component.scss'],
})
export class DangDoanThePageComponent {
  breadcrumbObj: BreadCrumbHome = new BreadCrumbHome({
    heading: 'Đảng - Đoàn thể',
    listBreadcrumb: [
      {
        title: 'Trang chủ',
        link: UrlConstant.ROUTE.MAIN.HOMEPAGE,
      },
      {
        title: 'Giới thiệu',
        link: UrlConstant.ROUTE.MAIN.GIOI_THIEU.BASE,
      },
    ],
  });

  panels = gioiThieuMenu;

  dataMenu: SideMenuContent[] = [
    { name: 'Đảng', url: UrlConstant.ROUTE.MAIN.GIOI_THIEU.DANG_DOAN_THE.DANG },
    { name: 'Công đoàn', url: UrlConstant.ROUTE.MAIN.GIOI_THIEU.DANG_DOAN_THE.CONG_DOAN },
    { name: 'Đoàn thanh niên -  Hội sinh viên', url: UrlConstant.ROUTE.MAIN.GIOI_THIEU.DANG_DOAN_THE.DOAN_TN_HOI_SV },
    { name: 'Hội cựu chiến binh', url: UrlConstant.ROUTE.MAIN.GIOI_THIEU.DANG_DOAN_THE.HOI_CUU_CHIEN_BINH },
  ];
}
