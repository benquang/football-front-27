import { Component } from '@angular/core';
import { UrlConstant } from '@constants/url.constant';
import { ICardImage } from '@models/common/card-image.model';
import { BreadCrumbHome } from '@widget/breadcrumb-home/breadcrumb-home.model';
@Component({
  selector: 'app-cac-nghanh-cua-khoa-subpage',
  templateUrl: './cac-nghanh-cua-khoa-subpage.component.html',
  styleUrls: ['./cac-nghanh-cua-khoa-subpage.component.scss'],
})
export class CacNghanhCuaKhoaSubpageComponent {
  tenNganh = 'Nhóm ngành thiết kế và xây dựng';
  breadcrumbObj: BreadCrumbHome = new BreadCrumbHome({
    heading: this.tenNganh,
    listBreadcrumb: [
      {
        title: 'Trang chủ',
        link: UrlConstant.ROUTE.MAIN.HOMEPAGE,
      },
      {
        title: 'Chương Trình đào tạo',
        link: UrlConstant.ROUTE.MAIN.DAO_TAO.BASE,
      },
    ],
  });
  description = {
    img: 'https://via.placeholder.com/660x371',
    infHead: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text',
    inf: [
      'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text',
      'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text',
      'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text',
    ],
  };
  datas: ICardImage[] = [
    {
      image: 'https://via.placeholder.com/426x240',
      title: 'Thiết Kế Công Nghiệp',
      link: '',
    },
    {
      image: 'https://via.placeholder.com/426x240',
      title: 'Thiết Kế Đồ Họa',
      link: '',
    },
    {
      image: 'https://via.placeholder.com/426x240',
      title: 'Thiết Kế Thời Trang',
      link: '',
    },
    {
      image: 'https://via.placeholder.com/426x240',
      title: 'Thiết Kế Nội Thất',
      link: '',
    },
    {
      image: 'https://via.placeholder.com/426x240',
      title: 'Kĩ Thuật Xây Dựng',
      link: '',
    },
  ];
}
