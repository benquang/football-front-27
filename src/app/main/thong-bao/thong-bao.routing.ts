import { Routes } from '@angular/router';
import { SystemConstant } from '@constants/system.constant';
import { HomeComponent } from './home/home.component';

import { ThongBaoChiTietComponent } from './thong-bao-chi-tiet/thong-bao-chi-tiet.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: `Thông báo | ${SystemConstant.WEB_NAME}`,
  },
  {
    path: 'thong-bao-chi-tiet',
    component: ThongBaoChiTietComponent,
    title: `Thông báo chi tiết | ${SystemConstant.WEB_NAME}`,
  },
];
