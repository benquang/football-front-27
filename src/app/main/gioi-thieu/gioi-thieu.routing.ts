import { Routes } from '@angular/router';
import { SystemConstant } from '@constants/system.constant';
import { AboutSchoolSubpageComponent } from './about-school-subpage/about-school-subpage.component';
import { BanGiamHieuPageComponent } from './ban-giam-hieu-page/ban-giam-hieu-page.component';
import { DangDoanThePageComponent } from './dang-doan-the-page/dang-doan-the-page.component';
import { HomeComponent } from './home/home.component';
import { KhoaVienTrucThuocPageComponent } from './khoa-vien-truc-thuoc-page/khoa-vien-truc-thuoc-page.component';
import { OrganizationalStructurePageComponent } from './organizational-structure-page/organizational-structure-page.component';
import { PhongBanComponent } from './phong-ban/phong-ban.component';
import { ThuNgoPageComponent } from './thu-ngo-page/thu-ngo-page.component';
import { TrungTamDlPageComponent } from './trung-tam-dl-page/trung-tam-dl-page.component';
import { DoiTacDoiNgoaiPageComponent } from './doi-tac-doi-ngoai-page/doi-tac-doi-ngoai-page.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: `Giới thiệu | ${SystemConstant.WEB_NAME}`,
  },
  {
    path: 'thu-ngo',
    component: ThuNgoPageComponent,
    title: `Thư ngỏ | ${SystemConstant.WEB_NAME}`,
  },
  {
    path: 've-truong',
    title: `Về trường | ${SystemConstant.WEB_NAME}`,
    children: [
      {
        path: '',
        component: AboutSchoolSubpageComponent,
        title: `Về trường | ${SystemConstant.WEB_NAME}`,
      },
      {
        path: 'doi-tac-doi-ngoai',
        component: DoiTacDoiNgoaiPageComponent,
        title: `Đối tác đối ngoại | ${SystemConstant.WEB_NAME}`,
      },
    ],
  },
  {
    path: 'co-cau-to-chuc',
    title: `Cơ cấu tổ chức | ${SystemConstant.WEB_NAME}`,
    children: [
      {
        path: '',
        component: OrganizationalStructurePageComponent,
        title: `Cơ cấu tổ chức | ${SystemConstant.WEB_NAME}`,
      },
      {
        path: 'ban-giam-hieu',
        component: BanGiamHieuPageComponent,
        title: `Ban giám hiệu | ${SystemConstant.WEB_NAME}`,
      },
      {
        path: 'khoa-vien-truc-thuoc',
        component: KhoaVienTrucThuocPageComponent,
        title: `Các khoa viện trực thuộc | ${SystemConstant.WEB_NAME}`,
      },
      {
        path: 'trung-tam-doc-lap',
        component: TrungTamDlPageComponent,
        title: `Các Trung tâm độc lập | ${SystemConstant.WEB_NAME}`,
      },
    ],
  },
  {
    path: 'dang-doan-the',
    title: `Đảng - Đoàn thể | ${SystemConstant.WEB_NAME}`,
    children: [
      {
        path: '',
        component: DangDoanThePageComponent,
        title: `Đảng - Đoàn thể | ${SystemConstant.WEB_NAME}`,
      },
    ],
  },
  {
    path: 'phong-ban',
    title: `Các Phòng Ban - TT Chức Năng | ${SystemConstant.WEB_NAME}`,
    children: [
      {
        path: '',
        component: PhongBanComponent,
        title: `Các Phòng Ban - TT Chức Năng | ${SystemConstant.WEB_NAME}`,
      },
    ],
  },
];
