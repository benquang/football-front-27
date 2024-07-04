import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SystemConstant } from '@constants/system.constant';
import { MainLayoutComponent } from '@layouts/main/main-layout/main-layout.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    loadChildren: () => import('./homepage/homepage.module').then(m => m.HomePageModule),
    title: `Trang chủ | ${SystemConstant.WEB_NAME}`,
  },
  {
    path: 'gioi-thieu',
    component: MainLayoutComponent,
    loadChildren: () => import('./gioi-thieu/gioi-thieu.module').then(m => m.GioiThieuModule),
    title: `Giới thiệu | ${SystemConstant.WEB_NAME}`,
  },
  {
    path: 'dao-tao',
    component: MainLayoutComponent,
    loadChildren: () => import('./dao-tao/dao-tao.module').then(m => m.DaoTaoModule),
    title: `Đào tạo | ${SystemConstant.WEB_NAME}`,
  },
  {
    path: 'nghien-cuu-khoa-hoc',
    component: MainLayoutComponent,
    loadChildren: () => import('./nckh/nckh.module').then(m => m.NckhModule),
    title: `Nghiên cứu Khoa học | ${SystemConstant.WEB_NAME}`,
  },
  {
    path: 'tin-tuc-su-kien',
    component: MainLayoutComponent,
    loadChildren: () => import('./tin-tuc-su-kien/tin-tuc-su-kien.module').then(m => m.TinTucSuKienModule),
    title: `Tin tức & Sự kiện | ${SystemConstant.WEB_NAME}`,
  },
  {
    path: 'thong-bao',
    component: MainLayoutComponent,
    loadChildren: () => import('./thong-bao/thong-bao.module').then(m => m.ThongBaoModule),
    title: `Thông báo | ${SystemConstant.WEB_NAME}`,
  },
  {
    path: 'quan-he-doanh-nghiep',
    component: MainLayoutComponent,
    loadChildren: () => import('./qh-doanh-nghiep/qh-doanh-nghiep.module').then(m => m.QhDoanhNghiepModule),
    title: `Quan hệ Doanh nghiệp | ${SystemConstant.WEB_NAME}`,
  },
  {
    path: 'nguoi-hoc',
    component: MainLayoutComponent,
    loadChildren: () => import('./nguoi-hoc/nguoi-hoc.module').then(m => m.NguoiHocModule),
    title: `Người học | ${SystemConstant.WEB_NAME}`,
  },
  {
    path: 'lien-he',
    component: MainLayoutComponent,
    loadChildren: () => import('./lien-he/lien-he.module').then(m => m.LienHeModule),
    title: `Liên hệ | ${SystemConstant.WEB_NAME}`,
  },
  {
    path: 'u',
    component: MainLayoutComponent,
    children: [
      // {
      //   path: '',
      //   redirectTo: '',
      //   pathMatch: 'full'
      // },
    ],
  },
  {
    path: 'leagues',
    component: MainLayoutComponent,
    loadChildren: () => import('./league/league.module').then(m => m.LeagueModule),
    title: `Leagues | ${SystemConstant.WEB_NAME}`,
  },

  {
    path: 'fixtures',
    component: MainLayoutComponent,
    loadChildren: () => import('./fixtures/fixtures.module').then(m => m.FixturesModule),
    title: `Scores & Fixtures | ${SystemConstant.WEB_NAME}`,
  },

  {
    path: 'matches/:id',
    component: MainLayoutComponent,
    loadChildren: () => import('./matches/matches.module').then(m => m.MatchesModule),
    title: `Matches | ${SystemConstant.WEB_NAME}`,
  },

  {
    path: 'matches_future/:id',
    component: MainLayoutComponent,
    loadChildren: () => import('./matches_future/matches_future.module').then(m => m.MatchesFutureModule),
    title: `Matches Future | ${SystemConstant.WEB_NAME}`,
  },

  {
    path: 'lich-thi-dau/:league',
    component: MainLayoutComponent,
    loadChildren: () => import('./lich-thi-dau/lich-thi-dau.module').then(m => m.LichThiDauModule),
    title: `Lịch thi đấu | ${SystemConstant.WEB_NAME}`,
  },

  {
    path: 'ket-qua/:league',
    component: MainLayoutComponent,
    loadChildren: () => import('./ket-qua/ket-qua.module').then(m => m.KetQuaModule),
    title: `Kết quả | ${SystemConstant.WEB_NAME}`,
  },
  
  {
    path: 'tran-dau/:match',
    component: MainLayoutComponent,
    loadChildren: () => import('./thong-so-tran-dau/thong-so-tran-dau.module').then(m => m.ThongSoTranDauModule),
    title: `Trận đấu | ${SystemConstant.WEB_NAME}`,
  },

  {
    path: 'upcoming/:match',
    component: MainLayoutComponent,
    loadChildren: () => import('./upcoming-tran-dau/upcoming-tran-dau.module').then(m => m.UpcomingTranDauModule),
    title: `Upcoming | ${SystemConstant.WEB_NAME}`,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule { }
