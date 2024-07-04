import { Component } from '@angular/core';
import { UrlConstant } from '@constants/url.constant';
import { ICardImage } from '@models/common/card-image.model';
import { BreadCrumbHome } from '@widget/breadcrumb-home/breadcrumb-home.model';
import { nguoiHocMenu } from '../nguoi-hoc.menu';

@Component({
  selector: 'app-sinh-vien-page',
  templateUrl: './sinh-vien-page.component.html',
  styleUrls: ['./sinh-vien-page.component.scss'],
})
export class SinhVienPageComponent {

  langCode: 'en' | 'vi' = localStorage.getItem('language') as 'en' | 'vi' ?? 'vi';

  listBreadcrumbTitle = this.langCode === 'vi' ? {
    SINH_VIEN: 'Sinh viên',
    TRANG_CHU: 'Trang chủ',
    NGUOI_HOC: 'Người học',
  } : {
    SINH_VIEN: 'Student',
    TRANG_CHU: 'Home',
    NGUOI_HOC: 'Leaner',
  };

  breadcrumbObj: BreadCrumbHome = new BreadCrumbHome({
    heading: this.listBreadcrumbTitle.SINH_VIEN,
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
    QUY_CHE: 'Quy chế',
    QUY_DINH: 'Quy định',
    SO_TAY_SINH_VIEN: 'Sổ tay sinh viên',
    EMAIL_SINH_VIEN: 'Email sinh viên',
  } : {
    QUY_CHE: 'Regulation',
    QUY_DINH: 'Rules',
    SO_TAY_SINH_VIEN: 'Student Handbook',
    EMAIL_SINH_VIEN: 'Student Email',
  };

  datas: ICardImage[] = [
    {
      image: 'assets/img/nguoi-hoc/quy-che.png',
      title: this.listTitle.QUY_CHE,
      link: '',
    },
    {
      image: 'assets/img/nguoi-hoc/quy-dinh.png',
      title: this.listTitle.QUY_DINH,
      link: '',
    },
    {
      image: 'assets/img/nguoi-hoc/so-tay-sv.png',
      title: this.listTitle.SO_TAY_SINH_VIEN,
      link: '',
    },
    {
      image: 'assets/img/nguoi-hoc/mail-sv.png',
      title: this.listTitle.EMAIL_SINH_VIEN,
      link: '',
    },
  ];
}
