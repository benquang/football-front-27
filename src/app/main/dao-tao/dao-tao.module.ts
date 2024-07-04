import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CardImageComponent } from '@component-shared/card-image/card-image.component';
import { TbTtSkSidePanelComponent } from '@component-shared/tb-tt-sk-side-panel/tb-tt-sk-side-panel.component';
import { BreadcrumbHomeComponent } from '@widget/breadcrumb-home/breadcrumb-home.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { BannerIntroComponent } from '../../shared/component-shared/banner-intro/banner-intro.component';
import { CacNghanhCuaKhoaSubpageComponent } from './cac-nghanh-cua-khoa-subpage/cac-nghanh-cua-khoa-subpage.component';
import { routes } from './dao-tao.routing';
import { HomeComponent } from './home/home.component';
import { PlanChartComponent } from './plan-chart/plan-chart.component';

export const pluginsModules = [
  BannerIntroComponent,
  NzGridModule,
  NzTagModule,
  TbTtSkSidePanelComponent,
];

@NgModule({
  declarations: [
    HomeComponent,
    PlanChartComponent,
    CacNghanhCuaKhoaSubpageComponent,
  ],
  imports: [
    CommonModule,
    BreadcrumbHomeComponent,
    CardImageComponent,
    FormsModule,
    pluginsModules,
    // Routes
    RouterModule.forChild(routes),
  ],
})
export class DaoTaoModule { }
