import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BannerIntroComponent } from '@component-shared/banner-intro/banner-intro.component';
import { DanhSachTtSkTbComponent } from '@component-shared/danh-sach-tt-sk-tb/danh-sach-tt-sk-tb.component';
import { SideMenuPageComponent } from '@component-shared/side-menu-page/side-menu-page.component';
import { BreadcrumbHomeComponent } from '@widget/breadcrumb-home/breadcrumb-home.component';
import { PaginationPageComponent } from '@widget/pagination-page/pagination-page.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { CardImageComponent } from '../../shared/component-shared/card-image/card-image.component';
import { CardSmallImageComponent } from './card-small-image/card-small-image.component';
import { CuuSinhVienComponent } from './cuu-sinh-vien/cuu-sinh-vien.component';
import { HocVienPageComponent } from './hoc-vien-page/hoc-vien-page.component';
import { HomeComponent } from './home/home.component';
import { NghienCuuSinhPageComponent } from './nghien-cuu-sinh-page/nghien-cuu-sinh-page.component';
import { routes } from './nguoi-hoc.routing';
import { SinhVienPageComponent } from './sinh-vien-page/sinh-vien-page.component';
export const pluginsModules = [
  NzGridModule,
  DanhSachTtSkTbComponent,
  BreadcrumbHomeComponent,
  SideMenuPageComponent,
  PaginationPageComponent,
  BannerIntroComponent,
];

@NgModule({
  declarations: [
    HomeComponent,
    HocVienPageComponent,
    CardSmallImageComponent,
    CuuSinhVienComponent,
    SinhVienPageComponent,
    NghienCuuSinhPageComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    pluginsModules,
    // Routes,
    RouterModule.forChild(routes),
    BreadcrumbHomeComponent,
    SideMenuPageComponent,
    CardImageComponent,
  ],
})
export class NguoiHocModule { }
