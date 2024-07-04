import { Component } from '@angular/core';
import { UrlConstant } from '@constants/url.constant';
import { SideMenuContent } from '@models/common/side-menu.model';
import { BreadCrumbHome } from '@widget/breadcrumb-home/breadcrumb-home.model';
import { gioiThieuMenu } from '../gioi-thieu.menu';

@Component({
  selector: 'app-about-school-subpage',
  templateUrl: './about-school-subpage.component.html',
  styleUrls: ['./about-school-subpage.component.scss'],
})
export class AboutSchoolSubpageComponent {

  breadcrumbObj: BreadCrumbHome = new BreadCrumbHome({
    heading: 'Về trường',
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
    { name: 'Sơ đồ tổ chức', url: UrlConstant.ROUTE.MAIN.GIOI_THIEU.VE_TRUONG.SO_DO_TO_CHUC },
    { name: 'Chức năng, nhiệm vụ', url: UrlConstant.ROUTE.MAIN.GIOI_THIEU.VE_TRUONG.CHUC_NANG_NHIEM_VU },
    { name: 'Sơ đồ vị trí của trường', url: UrlConstant.ROUTE.MAIN.GIOI_THIEU.VE_TRUONG.SO_DO_VI_TRI },
    { name: 'Quá trình phát triển', url: UrlConstant.ROUTE.MAIN.GIOI_THIEU.VE_TRUONG.QUA_TRINH_PHAT_TRIEN },
    { name: 'Thành tích của nhà trường', url: UrlConstant.ROUTE.MAIN.GIOI_THIEU.VE_TRUONG.THANH_TICH },
    { name: 'Triết lý giáo dục', url: UrlConstant.ROUTE.MAIN.GIOI_THIEU.VE_TRUONG.TRIET_LY_GIAO_DUC },
    { name: 'Kiểm định chất lượng', url: UrlConstant.ROUTE.MAIN.GIOI_THIEU.VE_TRUONG.KIEM_DINH_CHAT_LUONG },
    { name: 'Công khai giáo dục', url: UrlConstant.ROUTE.MAIN.GIOI_THIEU.VE_TRUONG.CONG_KHAI_GIAO_DUC },
    { name: 'Đối tác - Đối ngoại', url: UrlConstant.ROUTE.MAIN.GIOI_THIEU.VE_TRUONG.DOI_TAC_DOI_NGOAI },
  ];

}
