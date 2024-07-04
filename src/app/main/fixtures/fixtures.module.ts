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

import { PremierLeagueComponent } from './premier-league/premier-league.component';

import { NzTagModule } from 'ng-zorro-antd/tag';

import { routes } from './fixtures.routing';


export const pluginsModules = [
  NzGridModule,
  DanhSachTtSkTbComponent,
  BreadcrumbHomeComponent,
  SideMenuPageComponent,
  PaginationPageComponent,
  BannerIntroComponent,
  NzTagModule
];

@NgModule({
  declarations: [
    PremierLeagueComponent,
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
export class FixturesModule { }
