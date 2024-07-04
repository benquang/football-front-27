import { Component } from '@angular/core';
import { UrlConstant } from '@constants/url.constant';
import { SideMenuContent } from '@models/common/side-menu.model';
import { BreadCrumbHome } from '@widget/breadcrumb-home/breadcrumb-home.model';
import { gioiThieuMenu } from '../gioi-thieu.menu';

@Component({
  selector: 'app-trung-tam-dl-page',
  templateUrl: './trung-tam-dl-page.component.html',
  styleUrls: ['./trung-tam-dl-page.component.scss'],
})
export class TrungTamDlPageComponent {
  breadcrumbObj: BreadCrumbHome = new BreadCrumbHome({
    heading: 'Các Trung tâm độc lập',
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
    { name: 'Dịch vụ sinh viên', url: UrlConstant.ROUTE.MAIN.GIOI_THIEU.CO_CAU_TO_CHUC.TRUNG_TAM_DL.BASE },
    { name: 'Thông tin - máy tính', url: UrlConstant.ROUTE.MAIN.GIOI_THIEU.CO_CAU_TO_CHUC.TRUNG_TAM_DL.BASE },
    { name: 'Dạy học số', url: UrlConstant.ROUTE.MAIN.GIOI_THIEU.CO_CAU_TO_CHUC.TRUNG_TAM_DL.BASE },
    { name: 'Công nghệ phần mềm', url: UrlConstant.ROUTE.MAIN.GIOI_THIEU.CO_CAU_TO_CHUC.TRUNG_TAM_DL.BASE },
    { name: 'Trung tâm phát triển ngôn ngữ', url: UrlConstant.ROUTE.MAIN.GIOI_THIEU.CO_CAU_TO_CHUC.TRUNG_TAM_DL.BASE },
    { name: 'Chế tạo và thiết kế thiết bị công nghiệp', url: UrlConstant.ROUTE.MAIN.GIOI_THIEU.CO_CAU_TO_CHUC.TRUNG_TAM_DL.BASE },
    { name: 'Kỹ thuật công nghệ môi trường', url: UrlConstant.ROUTE.MAIN.GIOI_THIEU.CO_CAU_TO_CHUC.TRUNG_TAM_DL.BASE },
    { name: 'Hàn ngữ đông a', url: UrlConstant.ROUTE.MAIN.GIOI_THIEU.CO_CAU_TO_CHUC.TRUNG_TAM_DL.BASE },
    { name: 'Đào tạo và hướng nghiệp quốc tế việt nhật', url: UrlConstant.ROUTE.MAIN.GIOI_THIEU.CO_CAU_TO_CHUC.TRUNG_TAM_DL.BASE },
    { name: 'Ngoại ngữ', url: UrlConstant.ROUTE.MAIN.GIOI_THIEU.CO_CAU_TO_CHUC.TRUNG_TAM_DL.BASE },
    { name: 'Trung tâm tin học', url: UrlConstant.ROUTE.MAIN.GIOI_THIEU.CO_CAU_TO_CHUC.TRUNG_TAM_DL.BASE },
    { name: 'Kỹ thuật tổng hợp', url: UrlConstant.ROUTE.MAIN.GIOI_THIEU.CO_CAU_TO_CHUC.TRUNG_TAM_DL.BASE },
    { name: 'Nghiên cứu và chuyển giao công nghệ', url: UrlConstant.ROUTE.MAIN.GIOI_THIEU.CO_CAU_TO_CHUC.TRUNG_TAM_DL.BASE },
    { name: 'Hợp tác và đào tạo quốc tế', url: UrlConstant.ROUTE.MAIN.GIOI_THIEU.CO_CAU_TO_CHUC.TRUNG_TAM_DL.BASE },
    { name: 'Giáo dục thể chất và quốc phòng', url: UrlConstant.ROUTE.MAIN.GIOI_THIEU.CO_CAU_TO_CHUC.TRUNG_TAM_DL.BASE },
    { name: 'Nghiên cứu năng lượng tái tạo', url: UrlConstant.ROUTE.MAIN.GIOI_THIEU.CO_CAU_TO_CHUC.TRUNG_TAM_DL.BASE },
    { name: 'Nghiên cứu và ứng dụng kỹ thuật xây dựng', url: UrlConstant.ROUTE.MAIN.GIOI_THIEU.CO_CAU_TO_CHUC.TRUNG_TAM_DL.BASE },
    {
      name: 'Đào tạo, bồi dưỡng GVPT GDNN KV miền trung - tây nguyên',
      url: UrlConstant.ROUTE.MAIN.GIOI_THIEU.CO_CAU_TO_CHUC.TRUNG_TAM_DL.BASE,
    },
    { name: 'Bồi dưỡng và đánh giá kỹ năng nghề QG', url: UrlConstant.ROUTE.MAIN.GIOI_THIEU.CO_CAU_TO_CHUC.TRUNG_TAM_DL.BASE },
    { name: 'Đào tạo ngắn hạn', url: UrlConstant.ROUTE.MAIN.GIOI_THIEU.CO_CAU_TO_CHUC.TRUNG_TAM_DL.BASE },
    { name: 'Sáng tạo và khởi nghiệp', url: UrlConstant.ROUTE.MAIN.GIOI_THIEU.CO_CAU_TO_CHUC.TRUNG_TAM_DL.BASE },
  ];
}
