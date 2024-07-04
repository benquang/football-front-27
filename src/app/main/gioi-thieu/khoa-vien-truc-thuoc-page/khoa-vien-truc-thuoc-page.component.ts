import { Component } from '@angular/core';
import { UrlConstant } from '@constants/url.constant';
import { SideMenuContent } from '@models/common/side-menu.model';
import { BreadCrumbHome } from '@widget/breadcrumb-home/breadcrumb-home.model';
import { gioiThieuMenu } from '../gioi-thieu.menu';

@Component({
  selector: 'app-khoa-vien-truc-thuoc-page',
  templateUrl: './khoa-vien-truc-thuoc-page.component.html',
  styleUrls: ['./khoa-vien-truc-thuoc-page.component.scss'],
})
export class KhoaVienTrucThuocPageComponent {
  breadcrumbObj: BreadCrumbHome = new BreadCrumbHome({
    heading: 'Các khoa viện trực thuộc',
    listBreadcrumb: [
      {
        title: 'Trang chủ',
        link: UrlConstant.ROUTE.MAIN.HOMEPAGE,
      },
      {
        title: 'Giới thiệu',
        link: UrlConstant.ROUTE.MAIN.GIOI_THIEU.BASE,
      },
      {
        title: 'Cơ cấu tổ chức',
        link: UrlConstant.ROUTE.MAIN.GIOI_THIEU.CO_CAU_TO_CHUC.BASE,
      },
    ],
  });

  panels = gioiThieuMenu;

  dataMenu: SideMenuContent[] = [
    { name: 'Cơ khí chế tạo máy', url: UrlConstant.ROUTE.MAIN.GIOI_THIEU.CO_CAU_TO_CHUC.KHOA_VIEN_TRUC_THUOC },
    { name: 'Cơ khí động lực', url: UrlConstant.ROUTE.MAIN.GIOI_THIEU.CO_CAU_TO_CHUC.KHOA_VIEN_TRUC_THUOC },
    { name: 'Công nghệ hóa học và thực phẩm', url: UrlConstant.ROUTE.MAIN.GIOI_THIEU.CO_CAU_TO_CHUC.KHOA_VIEN_TRUC_THUOC },
    { name: 'Thời trang và du lịch', url: UrlConstant.ROUTE.MAIN.GIOI_THIEU.CO_CAU_TO_CHUC.KHOA_VIEN_TRUC_THUOC },
    { name: 'Công nghệ thông tin', url: UrlConstant.ROUTE.MAIN.GIOI_THIEU.CO_CAU_TO_CHUC.KHOA_VIEN_TRUC_THUOC },
    { name: 'Đào tạo chất lượng cao', url: UrlConstant.ROUTE.MAIN.GIOI_THIEU.CO_CAU_TO_CHUC.KHOA_VIEN_TRUC_THUOC },
    { name: 'Điện - điện tử', url: UrlConstant.ROUTE.MAIN.GIOI_THIEU.CO_CAU_TO_CHUC.KHOA_VIEN_TRUC_THUOC },
    { name: 'In - truyền thông', url: UrlConstant.ROUTE.MAIN.GIOI_THIEU.CO_CAU_TO_CHUC.KHOA_VIEN_TRUC_THUOC },
    { name: 'Khoa học ứng dụng', url: UrlConstant.ROUTE.MAIN.GIOI_THIEU.CO_CAU_TO_CHUC.KHOA_VIEN_TRUC_THUOC },
    { name: 'Kinh tế', url: UrlConstant.ROUTE.MAIN.GIOI_THIEU.CO_CAU_TO_CHUC.KHOA_VIEN_TRUC_THUOC },
    { name: 'Chính trị và luật', url: UrlConstant.ROUTE.MAIN.GIOI_THIEU.CO_CAU_TO_CHUC.KHOA_VIEN_TRUC_THUOC },
    { name: 'Ngoại ngữ', url: UrlConstant.ROUTE.MAIN.GIOI_THIEU.CO_CAU_TO_CHUC.KHOA_VIEN_TRUC_THUOC },
    { name: 'Xây dựng', url: UrlConstant.ROUTE.MAIN.GIOI_THIEU.CO_CAU_TO_CHUC.KHOA_VIEN_TRUC_THUOC },
    { name: 'Viện sư phạm kỹ thuật', url: UrlConstant.ROUTE.MAIN.GIOI_THIEU.CO_CAU_TO_CHUC.KHOA_VIEN_TRUC_THUOC },
    { name: 'Khoa đào tạo quốc tế', url: UrlConstant.ROUTE.MAIN.GIOI_THIEU.CO_CAU_TO_CHUC.KHOA_VIEN_TRUC_THUOC },
  ];
}
