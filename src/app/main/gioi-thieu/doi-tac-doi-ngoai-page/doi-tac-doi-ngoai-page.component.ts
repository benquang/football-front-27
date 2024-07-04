import { Component } from '@angular/core';
import { UrlConstant } from '@constants/url.constant';
import { ICardImage } from '@models/common/card-image.model';
import { BreadCrumbHome } from '@widget/breadcrumb-home/breadcrumb-home.model';
import { gioiThieuMenu } from '../gioi-thieu.menu';
@Component({
  selector: 'app-doi-tac-doi-ngoai-page',
  templateUrl: './doi-tac-doi-ngoai-page.component.html',
  styleUrls: ['./doi-tac-doi-ngoai-page.component.scss'],
})
export class DoiTacDoiNgoaiPageComponent {
  breadcrumbObj: BreadCrumbHome = new BreadCrumbHome({
    heading: 'Đối tác, đối ngoại',
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
        title: 'Về trường',
        link: UrlConstant.ROUTE.MAIN.GIOI_THIEU.VE_TRUONG.BASE,
      },
    ],
  });

  panels = gioiThieuMenu;
  cardImageList: ICardImage[] = [
    {
      title: 'Đối tác',
      image: '',
      link: '',
    },
    {
      title: 'Đối ngoại',
      image: '',
      link: '',
    },
    {
      title: 'Đối tác',
      image: '',
      link: '',
    },
    {
      title: 'Đối ngoại',
      image: '',
      link: '',
    },
  ];
}
