import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BannerIntroComponent } from '@component-shared/banner-intro/banner-intro.component';
import { CardImageComponent } from '@component-shared/card-image/card-image.component';
import { BreadcrumbHomeComponent } from '@widget/breadcrumb-home/breadcrumb-home.component';
import { PaginationPageComponent } from '@widget/pagination-page/pagination-page.component';
import { HomeComponent } from './home/home.component';
import { routes } from './nckh.routing';
import { NghienCuuKhoaHocPageComponent } from './nghien-cuu-khoa-hoc-page/nghien-cuu-khoa-hoc-page.component';

export const pluginsModules = [
  BannerIntroComponent,
  CardImageComponent,
  BreadcrumbHomeComponent,
  PaginationPageComponent,
];

@NgModule({
  declarations: [
    HomeComponent,
    NghienCuuKhoaHocPageComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    pluginsModules,
    // Routes
    RouterModule.forChild(routes),
  ],
})
export class NckhModule { }
