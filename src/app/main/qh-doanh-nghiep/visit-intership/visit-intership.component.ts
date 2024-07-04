import { Component } from '@angular/core';
import { UrlConstant } from '@constants/url.constant';
import langDataEn from '@languages/en.json';
import langDataVi from '@languages/vi.json';
import { IThongBaoSuKienTinTuc } from '@models/common/tb-sk-tt.model';
import { BreadCrumbHome } from '@widget/breadcrumb-home/breadcrumb-home.model';

@Component({
  selector: 'app-visit-intership',
  templateUrl: './visit-intership.component.html',
  styleUrls: ['./visit-intership.component.scss'],
})
export class VisitIntershipComponent {


  langCode: 'en' | 'vi' = localStorage.getItem('language') as 'en' | 'vi' ?? 'vi';
  langData: Record<string, string> = (localStorage.getItem('language') === 'en' ? langDataEn : langDataVi)
    .MAIN.QH_DOANH_NGHIEP.VISIT_INTERNSHIP;

  listBreadcrumbTitle = this.langCode === 'vi' ? {
    THAM_QUAN_TT: 'Tham quan & Thực tập',
    TRANG_CHU: 'Trang chủ',
    QUAN_HE_DOANH_NGHIEP: 'Quan hệ doanh nghiệp',
  } : {
    THAM_QUAN_TT: 'Field Trip & Internship',
    TRANG_CHU: 'Home',
    QUAN_HE_DOANH_NGHIEP: 'Business relationship',
  };
  breadcrumbObj: BreadCrumbHome = new BreadCrumbHome({
    heading: this.listBreadcrumbTitle.THAM_QUAN_TT,
    listBreadcrumb: [
      {
        title: this.listBreadcrumbTitle.TRANG_CHU,
        link: UrlConstant.ROUTE.MAIN.HOMEPAGE,
      },
      {
        title: this.listBreadcrumbTitle.QUAN_HE_DOANH_NGHIEP,
        link: UrlConstant.ROUTE.MAIN.QH_DN.BASE,
      },
    ],
  });

  thongBaos: IThongBaoSuKienTinTuc[] = [
    {
      anhBia: 'https://via.placeholder.com/160x90',
      tieuDe: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standa'
        + 'rd dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
      noiDung: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standa'
        + 'rd dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
      ngayDang: new Date(),
    },
    {
      anhBia: 'https://via.placeholder.com/160x90',
      tieuDe: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standa'
        + 'rd dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
      noiDung: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standa'
        + 'rd dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
      ngayDang: new Date(),
    },
    {
      anhBia: 'https://via.placeholder.com/160x90',
      tieuDe: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standa'
        + 'rd dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
      noiDung: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standa'
        + 'rd dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
      ngayDang: new Date(),
    },
    {
      anhBia: 'https://via.placeholder.com/160x90',
      tieuDe: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standa'
        + 'rd dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
      noiDung: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standa'
        + 'rd dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
      ngayDang: new Date(),
    },
  ];

}
