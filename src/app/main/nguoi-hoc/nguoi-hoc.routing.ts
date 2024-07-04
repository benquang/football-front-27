import { Routes } from '@angular/router';
import { SystemConstant } from '@constants/system.constant';
import { CuuSinhVienComponent } from './cuu-sinh-vien/cuu-sinh-vien.component';
import { HocVienPageComponent } from './hoc-vien-page/hoc-vien-page.component';
import { HomeComponent } from './home/home.component';
import { NghienCuuSinhPageComponent } from './nghien-cuu-sinh-page/nghien-cuu-sinh-page.component';
import { SinhVienPageComponent } from './sinh-vien-page/sinh-vien-page.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: `Người học | ${SystemConstant.WEB_NAME}`,
  },
  {
    path: 'cuu-sinh-vien',
    component: CuuSinhVienComponent,
    title: `Cựu Sinh Viên | ${SystemConstant.WEB_NAME}`,
  },
  {
    path: 'hoc-vien',
    component: HocVienPageComponent,
    title: `Học viên | ${SystemConstant.WEB_NAME}`,
  },
  {
    path: 'sinh-vien',
    component: SinhVienPageComponent,
    title: `Sinh viên | ${SystemConstant.WEB_NAME}`,
  },
  {
    path: 'nghien-cuu-sinh',
    component: NghienCuuSinhPageComponent,
    title: `Nghiên cứu sinh | ${SystemConstant.WEB_NAME}`,
  },
];
