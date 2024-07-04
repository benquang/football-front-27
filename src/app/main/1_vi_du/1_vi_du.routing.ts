import { Routes } from '@angular/router';
import { SystemConstant } from '@constants/system.constant';

import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: `Upcoming | ${SystemConstant.WEB_NAME}`,
  },
];
