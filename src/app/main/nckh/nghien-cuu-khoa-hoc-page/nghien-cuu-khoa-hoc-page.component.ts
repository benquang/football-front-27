import { Component } from '@angular/core';
import { UrlConstant } from '@constants/url.constant';
import { ICardImage } from '@models/common/card-image.model';
import { BreadCrumbHome } from '@widget/breadcrumb-home/breadcrumb-home.model';

@Component({
  selector: 'app-nghien-cuu-khoa-hoc-page',
  templateUrl: './nghien-cuu-khoa-hoc-page.component.html',
  styleUrls: ['./nghien-cuu-khoa-hoc-page.component.scss'],
})
export class NghienCuuKhoaHocPageComponent {
  breadcrumbObj: BreadCrumbHome = new BreadCrumbHome({
    heading: 'Nghiên cứu khoa học',
    listBreadcrumb: [
      {
        title: 'Trang chủ',
        link: UrlConstant.ROUTE.MAIN.HOMEPAGE,
      },
    ],
  });
  datas: ICardImage[] = [
    {
      image: 'assets/img/other/nckh-cardImg-1.jpg',
      title: 'Tạp Chí Khoa Học Giáo Dục',
      link: '',
    },
    {
      image: 'assets/img/other/nckh-cardImg-2.jpg',
      title: 'Trung Tâm Chuyển Giao Công Nghệ',
      link: '',
    },
    {
      image: 'assets/img/other/nckh-cardImg-3.jpg',
      title: 'Sàn Giao Dịch Công Nghệ',
      link: '',
    },
  ];
  title = 'NGHIÊN CỨU KHOA HỌC';
  image = 'assets/img/bg/banner-nckh.jpg';
}
