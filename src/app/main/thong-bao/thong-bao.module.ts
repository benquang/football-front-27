import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { HomeComponent } from './home/home.component';
import { routes } from './thong-bao.routing';

import { BannerIntroComponent } from '@component-shared/banner-intro/banner-intro.component';
import { ContentDisplayComponent } from '@component-shared/content-display/content-display.component';
import { DanhSachTtSkTbComponent } from '@component-shared/danh-sach-tt-sk-tb/danh-sach-tt-sk-tb.component';
import { TbTtSkSidePanelComponent } from '@component-shared/tb-tt-sk-side-panel/tb-tt-sk-side-panel.component';
import { TinTucLienQuanComponent } from '@component-shared/tin-tuc-lien-quan/tin-tuc-lien-quan.component';
import { BreadcrumbHomeComponent } from '@widget/breadcrumb-home/breadcrumb-home.component';
import { PaginationPageComponent } from '@widget/pagination-page/pagination-page.component';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { ThongBaoChiTietComponent } from './thong-bao-chi-tiet/thong-bao-chi-tiet.component';
export const pluginsModules = [
  NzGridModule,
  TbTtSkSidePanelComponent,
  DanhSachTtSkTbComponent,
  ContentDisplayComponent,
  NzTagModule,
  BannerIntroComponent,
  PaginationPageComponent,
  TinTucLienQuanComponent,
];

@NgModule({
  declarations: [
    HomeComponent,
    ThongBaoChiTietComponent,
  ],
  imports: [
    BreadcrumbHomeComponent,
    CommonModule,
    FormsModule,
    pluginsModules,
    // Routes
    RouterModule.forChild(routes),
  ],
})
export class ThongBaoModule { }
