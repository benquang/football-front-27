import { Component } from '@angular/core';
import { UrlConstant } from '@constants/url.constant';
import { SideMenuContent } from '@models/common/side-menu.model';
import { BreadCrumbHome } from '@widget/breadcrumb-home/breadcrumb-home.model';
import { gioiThieuMenu } from '../gioi-thieu.menu';

@Component({
  selector: 'app-organizational-structure-page',
  templateUrl: './organizational-structure-page.component.html',
  styleUrls: ['./organizational-structure-page.component.scss'],
})
export class OrganizationalStructurePageComponent {

  breadcrumbObj: BreadCrumbHome = new BreadCrumbHome({
    heading: 'Cơ cấu tổ chức',
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
    { name: 'Hội đồng trường', url: UrlConstant.ROUTE.MAIN.GIOI_THIEU.CO_CAU_TO_CHUC.HOI_DONG_TRUONG },
    { name: 'Ban giám hiệu', url: UrlConstant.ROUTE.MAIN.GIOI_THIEU.CO_CAU_TO_CHUC.BAN_GIAM_HIEU },
    { name: 'Các khoa viện trực thuộc', url: UrlConstant.ROUTE.MAIN.GIOI_THIEU.CO_CAU_TO_CHUC.KHOA_VIEN_TRUC_THUOC },
    { name: 'Các phòng ban, tt chức năng', url: UrlConstant.ROUTE.MAIN.GIOI_THIEU.CO_CAU_TO_CHUC.PHONG_BAN_TT },
    { name: 'Các trung tâm độc lập', url: UrlConstant.ROUTE.MAIN.GIOI_THIEU.CO_CAU_TO_CHUC.TRUNG_TAM_DL.BASE },
  ];
}
