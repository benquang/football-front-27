import { Routes } from '@angular/router';
import { SystemConstant } from '@constants/system.constant';
import { HomeComponent } from './home/home.component';
import { RecruitmentFromBusinessesPageComponent } from './recruitment-from-businesses-page/recruitment-from-businesses-page.component';
import { VisitIntershipComponent } from './visit-intership/visit-intership.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: `QH Doanh nghiệp | ${SystemConstant.WEB_NAME}`,
  },
  {
    path: 'tham-quan-thuc-tap',
    component: VisitIntershipComponent,
    title: `QH Doanh nghiệp | ${SystemConstant.WEB_NAME}`,
  },
  {
    path: 'tuyen-dung-tu-doanh-nghiep',
    component: RecruitmentFromBusinessesPageComponent,
    title: `QH Doanh nghiệp | ${SystemConstant.WEB_NAME}`,
  },
];
