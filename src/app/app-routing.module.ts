import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SystemConstant } from '@constants/system.constant';
import { MainLayoutComponent } from '@layouts/main/main-layout/main-layout.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import(`@main/main.module`).then(m => m.MainModule),
    title: `${SystemConstant.WEB_NAME}`,
  },
  {
    path: 'auth',
    component: MainLayoutComponent,
    loadChildren: () => import(`@auth/auth.module`).then(m => m.AuthModule),
    title: `Login | ${SystemConstant.WEB_NAME}`,
  },
  {
    path: 'management',
    loadChildren: () => import(`@management/management.module`).then(m => m.ManagementModule),
    title: `Magagement | ${SystemConstant.WEB_NAME}`,
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
