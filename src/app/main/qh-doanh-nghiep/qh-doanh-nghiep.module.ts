import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BannerIntroComponent } from '@component-shared/banner-intro/banner-intro.component';
import { DanhSachTtSkTbComponent } from '@component-shared/danh-sach-tt-sk-tb/danh-sach-tt-sk-tb.component';
import { HomeSliderComponent } from '@component-shared/home-slider/home-slider.component';
import { SideMenuPageComponent } from '@component-shared/side-menu-page/side-menu-page.component';
import { SlideCardBusinessLogoComponent } from '@main/homepage/slide-card-business-logo/slide-card-business-logo.component';
import { BreadcrumbHomeComponent } from '@widget/breadcrumb-home/breadcrumb-home.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { HomeComponent } from './home/home.component';
import { routes } from './qh-doanh-nghiep.routing';
import { RecruitmentFromBusinessesPageComponent } from './recruitment-from-businesses-page/recruitment-from-businesses-page.component';
import { SlideCardAffiliatedBusinessesComponent } from './slide-card-affiliated-businesses/slide-card-affiliated-businesses.component';
import { TopJobsListComponent } from './top-jobs-list/top-jobs-list.component';
import { VisitIntershipComponent } from './visit-intership/visit-intership.component';

export const pluginsModules = [
  BannerIntroComponent,
  BreadcrumbHomeComponent,
  SideMenuPageComponent,
  HomeSliderComponent,
  NzGridModule,
  DanhSachTtSkTbComponent,
  SlideCardBusinessLogoComponent,
  SlideCardAffiliatedBusinessesComponent,
];

@NgModule({
  declarations: [
    HomeComponent,
    TopJobsListComponent,
    VisitIntershipComponent,
    RecruitmentFromBusinessesPageComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    pluginsModules,
    // Routes
    RouterModule.forChild(routes),
  ],
})
export class QhDoanhNghiepModule { }
