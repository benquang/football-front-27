import { Routes } from '@angular/router';
import { SystemConstant } from '@constants/system.constant';
import { ChiTietSuKienComponent } from './chi-tiet-su-kien/chi-tiet-su-kien.component';
import { ChiTietTinTucComponent } from './chi-tiet-tin-tuc/chi-tiet-tin-tuc.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: `Tin tức & Sự kiện | ${SystemConstant.WEB_NAME}`,
  },
  {
    path: 'chi-tiet-tin-tuc',
    component: ChiTietTinTucComponent,
    title: `Chi tiết tin tức | ${SystemConstant.WEB_NAME}`,
  },
  {
    path: 'chi-tiet-su-kien',
    component: ChiTietSuKienComponent,
    title: `Chi tiết sự kiện | ${SystemConstant.WEB_NAME}`,
  },
];
