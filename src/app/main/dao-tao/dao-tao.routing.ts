import { Routes } from '@angular/router';
import { SystemConstant } from '@constants/system.constant';
import { CacNghanhCuaKhoaSubpageComponent } from './cac-nghanh-cua-khoa-subpage/cac-nghanh-cua-khoa-subpage.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: `Đào tạo | ${SystemConstant.WEB_NAME}`,
  },
  {
    path: 'cac-nghanh-cua-khoa-subpage',
    component: CacNghanhCuaKhoaSubpageComponent,
    title: `Chương trình đào tạo | ${SystemConstant.WEB_NAME}`,
  },
];
