import { Component } from '@angular/core';
import { UrlConstant } from '@constants/url.constant';
import { ICardImage } from '@models/common/card-image.model';
import { BreadCrumbHome } from '@widget/breadcrumb-home/breadcrumb-home.model';
import { nguoiHocMenu } from '../nguoi-hoc.menu';

@Component({
  selector: 'app-hoc-vien-page',
  templateUrl: './hoc-vien-page.component.html',
  styleUrls: ['./hoc-vien-page.component.scss'],
})
export class HocVienPageComponent {

  langCode: 'en' | 'vi' = localStorage.getItem('language') as 'en' | 'vi' ?? 'vi';

  listBreadcrumbTitle = this.langCode === 'vi' ? {
    HOC_VIEN: 'Học viên',
    TRANG_CHU: 'Trang chủ',
    NGUOI_HOC: 'Người học',
  } : {
    HOC_VIEN: 'Trainee',
    TRANG_CHU: 'Home',
    NGUOI_HOC: 'Leaner',
  };

  breadcrumbObj: BreadCrumbHome = new BreadCrumbHome({
    heading: this.listBreadcrumbTitle.HOC_VIEN,
    listBreadcrumb: [
      {
        title: this.listBreadcrumbTitle.TRANG_CHU,
        link: UrlConstant.ROUTE.MAIN.HOMEPAGE,
      },
      {
        title: this.listBreadcrumbTitle.NGUOI_HOC,
        link: UrlConstant.ROUTE.MAIN.NGUOI_HOC.BASE,
      },
    ],
  });

  panels = nguoiHocMenu;

  listTitle = this.langCode === 'vi' ? {
    DT_SAU_DAI_HOC: 'Đào tạo sau đại học',
    DT_BOI_DUONG_SAU_DH: 'Đào tạo bồi dưỡng sau đại học',
  } : {
    DT_SAU_DAI_HOC: 'Postgraduate training',
    DT_BOI_DUONG_SAU_DH: 'Refresher training',
  };

  datas: ICardImage[] = [
    {
      image: 'https://via.placeholder.com/426x240',
      title: this.listTitle.DT_SAU_DAI_HOC,
      link: '',
    },
    {
      image: 'https://via.placeholder.com/426x240',
      title: this.listTitle.DT_BOI_DUONG_SAU_DH,
      link: '',
    },
  ];

}
