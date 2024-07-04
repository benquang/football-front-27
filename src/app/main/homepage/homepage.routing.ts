import { Routes } from '@angular/router';
import { SystemConstant } from '@constants/system.constant';
import { HomeComponent } from './home/home.component';

export const homePageRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: `Trang chủ | ${SystemConstant.WEB_NAME}`,
  },
];
