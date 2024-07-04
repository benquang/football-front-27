import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SystemConstant } from '@constants/system.constant';
import { ManagementLayoutComponent } from '@layouts/management/management-layout/management-layout.component';

const routes: Routes = [
  {
    path: '',
    component: ManagementLayoutComponent,
    // canActivate: [canActiveGuard],
    // data: {
    //   listRoles: Object.values(SystemConstant.MNG_ROLE), // All management roles had defined
    //   rolesRelation: 'OR',
    //   fallbackUrl: UrlConstant.ROUTE.AUTH.LOGIN
    // },
    title: `Management | ${SystemConstant.WEB_NAME}`,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
      },
      {
        path: 'test',
        loadChildren: () => import('./academic-ranks/academic-ranks.module').then(m => m.AcademicRanksModule),
      },
      {
        path: 'thu-vien-anh-ute',
        loadChildren: () => import('./thu-vien-anh-ute/thu-vien-anh-ute.module').then(m => m.ThuVienAnhUteModule),
      },
      {
        path: 'thong-bao',
        loadChildren: () => import('./thong-bao/thong-bao.module').then(m => m.ThongBaoModule),
      },
      {
        path: 'loai-thong-bao',
        loadChildren: () => import('./loai-thong-bao/loai-thong-bao.module').then(m => m.LoaiThongBaoModule),
      },
      {
        path: 'banner-slide',
        loadChildren: () => import('./home-banner-slide/home-banner-slide.module').then(m => m.HomeBannerSlideModule),
      },
      {
        path: 'tai-sao-chon-ute',
        loadChildren: () => import('./tai-sao-chon-ute/tai-sao-chon-ute.module').then(m => m.TaiSaoChonUteModule),
      },
      {
        path: 'tin-tuc',
        loadChildren: () => import('./tin-tuc/tin-tuc.module').then(m => m.TinTucModule),
      },
      {
        path: 'doanh-nghiep-lien-ket',
        loadChildren: () => import('./doanh-nghiep-lk/doanh-nghiep-lk.module').then(m => m.DoanhNghiepLkModule),
      },
      {
        path: 'su-kien',
        loadChildren: () => import('./su-kien/su-kien.module').then(m => m.SuKienModule),
      },
      {
        path: 'loai-hinh-dao-tao',
        loadChildren: () => import('./loai-hinh-dao-tao/loai-hinh-dao-tao.module').then(m => m.LoaiHinhDaoTaoModule),
      },
      {
        path: 'chuong-trinh-dao-tao',
        loadChildren: () => import('./chuong-trinh-dao-tao/chuong-trinh-dao-tao.module').then(m => m.ChuongTrinhDaoTaoModule),
      },
      {
        path: 'bieu-do-giang-day',
        loadChildren: () => import('./bieu-do-giang-day/bieu-do-giang-day.module').then(m => m.BieuDoGiangDayModule),
      },
      {
        path: 'nghien-cuu-khoa-hoc',
        loadChildren: () => import('./nckh/nckh.module').then(m => m.NckhModule),
      },
      {
        path: 'tham-quan-thuc-tap',
        loadChildren: () => import('./tham-quan-thuc-tap/tham-quan-thuc-tap.module').then(m => m.ThamQuanThucTapModule),
      },
      {
        path: 'nhom-nganh-dao-tao',
        loadChildren: () => import('./nhom-nganh-dao-tao/nhom-nganh-dao-tao.module').then(m => m.NhomNganhDaoTaoModule),
      },
      {
        path: 'cuu-sinh-vien',
        loadChildren: () => import('./cuu-sinh-vien/cuu-sinh-vien.module').then(m => m.CuuSinhVienModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManagementRoutingModule { }
