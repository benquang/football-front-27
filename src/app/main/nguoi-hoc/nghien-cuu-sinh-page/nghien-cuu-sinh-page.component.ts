import { Component } from '@angular/core';
import { UrlConstant } from '@constants/url.constant';
import { ICardImage } from '@models/common/card-image.model';
import { BreadCrumbHome } from '@widget/breadcrumb-home/breadcrumb-home.model';
import { nguoiHocMenu } from '../nguoi-hoc.menu';

@Component({
  selector: 'app-nghien-cuu-sinh-page',
  templateUrl: './nghien-cuu-sinh-page.component.html',
  styleUrls: ['./nghien-cuu-sinh-page.component.scss'],
})
export class NghienCuuSinhPageComponent {

  langCode: 'en' | 'vi' = localStorage.getItem('language') as 'en' | 'vi' ?? 'vi';

  listBreadcrumbTitle = this.langCode === 'vi' ? {
    NGHIEN_CUU_SINH: 'Nghiên cứu sinh',
    TRANG_CHU: 'Trang chủ',
    NGUOI_HOC: 'Người học',
  } : {
    NGHIEN_CUU_SINH: 'Doctor of Philosophy',
    TRANG_CHU: 'Home',
    NGUOI_HOC: 'Leaner',
  };

  breadcrumbObj: BreadCrumbHome = new BreadCrumbHome({
    heading: this.listBreadcrumbTitle.NGHIEN_CUU_SINH,
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
