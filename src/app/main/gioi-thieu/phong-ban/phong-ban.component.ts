import { Component } from '@angular/core';
import { UrlConstant } from '@constants/url.constant';
import { SideMenuContent } from '@models/common/side-menu.model';
import { BreadCrumbHome } from '@widget/breadcrumb-home/breadcrumb-home.model';
import { gioiThieuMenu } from '../gioi-thieu.menu';

@Component({
  selector: 'app-phong-ban',
  templateUrl: './phong-ban.component.html',
  styleUrls: ['./phong-ban.component.scss'],
})
export class PhongBanComponent {
  breadcrumbObj: BreadCrumbHome = new BreadCrumbHome({
    heading: 'Các Phòng Ban - TT Chức Năng',
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
    { name: 'Ban Quản Lý KTX', url: UrlConstant.ROUTE.MAIN.GIOI_THIEU.PHONG_BAN.BQL_KTX },
    { name: 'Bộ Phận Quản Lý Hồ Sơ Dự Án', url: UrlConstant.ROUTE.MAIN.GIOI_THIEU.PHONG_BAN.QL_HO_SO_DU_AN },
    { name: 'Đảm Bảo Chất Lượng', url: UrlConstant.ROUTE.MAIN.GIOI_THIEU.PHONG_BAN.DBCL },
    { name: 'Đào Tạo', url: UrlConstant.ROUTE.MAIN.GIOI_THIEU.PHONG_BAN.DAO_TAO },
    { name: 'Đào Tạo Không Chính Quy', url: UrlConstant.ROUTE.MAIN.GIOI_THIEU.PHONG_BAN.DAO_TAO_KCQ },
    { name: 'Kế Hoạch Tài Chính', url: UrlConstant.ROUTE.MAIN.GIOI_THIEU.PHONG_BAN.KE_HOACH_TAI_CHINH },
    { name: 'Quan Hệ Doanh Nghiệp', url: UrlConstant.ROUTE.MAIN.GIOI_THIEU.PHONG_BAN.QHDN },
    {
      name: 'Khoa Học Công Nghệ Và Quan Hệ Quốc Tế',
      url: UrlConstant.ROUTE.MAIN.GIOI_THIEU.PHONG_BAN.KHCN_QHQT,
    },
    { name: 'Quản Trị Cơ Sở Vật Chất', url: UrlConstant.ROUTE.MAIN.GIOI_THIEU.PHONG_BAN.QUAN_TRI_CSVC },
    { name: 'Thanh Tra - Giáo Dục', url: UrlConstant.ROUTE.MAIN.GIOI_THIEU.PHONG_BAN.THANH_TRA_GIAO_DUC },
    { name: 'Thiết Bị - Vật Tư', url: UrlConstant.ROUTE.MAIN.GIOI_THIEU.PHONG_BAN.THIET_BI_VAT_TU },
    { name: 'Tổ Chức Hành Chính', url: UrlConstant.ROUTE.MAIN.GIOI_THIEU.PHONG_BAN.TO_CHUC_HANH_CHINH },
    { name: 'Tuyển Sinh Và Công Tác Sinh Viên', url: UrlConstant.ROUTE.MAIN.GIOI_THIEU.PHONG_BAN.TS_CTSV },
    { name: 'Truyền Thông', url: UrlConstant.ROUTE.MAIN.GIOI_THIEU.PHONG_BAN.TRUYEN_THONG },
    { name: 'Trạm Y Tế', url: UrlConstant.ROUTE.MAIN.GIOI_THIEU.PHONG_BAN.TRAM_Y_TE },
    { name: 'Thư Viện', url: UrlConstant.ROUTE.MAIN.GIOI_THIEU.PHONG_BAN.THU_VIEN },
  ];
}
