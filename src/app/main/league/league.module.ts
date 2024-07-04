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

import { HomeComponent } from './home/home.component';

import { routes } from './league.routing';
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
export class LeagueModule { }
