import { Component } from '@angular/core';
import { UrlConstant } from '@constants/url.constant';
import { IThongBaoSuKienTinTuc } from '@models/common/tb-sk-tt.model';
import { BreadCrumbHome } from '@widget/breadcrumb-home/breadcrumb-home.model';
import { nguoiHocMenu } from '../nguoi-hoc.menu';
@Component({
  selector: 'app-cuu-sinh-vien',
  templateUrl: './cuu-sinh-vien.component.html',
  styleUrls: ['./cuu-sinh-vien.component.scss'],
})
export class CuuSinhVienComponent {

  langCode: 'en' | 'vi' = localStorage.getItem('language') as 'en' | 'vi' ?? 'vi';

  listBreadcrumbTitle = this.langCode === 'vi' ? {
    CUU_SINH_VIEN: 'Cựu sinh viên',
    TRANG_CHU: 'Trang chủ',
    NGUOI_HOC: 'Người học',
  } : {
    CUU_SINH_VIEN: 'Alumni',
    TRANG_CHU: 'Home',
    NGUOI_HOC: 'Leaner',
  };

  breadcrumbObj: BreadCrumbHome = new BreadCrumbHome({
    heading: this.listBreadcrumbTitle.CUU_SINH_VIEN,
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
  tinTucs: IThongBaoSuKienTinTuc[] = [
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
    }];
  title = this.langCode === 'vi' ? 'NGƯỜI HỌC' : 'Leaner';
  imgSrc = 'src/assets/img/bg/default-banner-home.jpg';
}
