import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BannerIntroComponent } from '@component-shared/banner-intro/banner-intro.component';
import { CardImageComponent } from '@component-shared/card-image/card-image.component';
import { ContentDisplayComponent } from '@component-shared/content-display/content-display.component';
import { BreadcrumbHomeComponent } from '@widget/breadcrumb-home/breadcrumb-home.component';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { SideMenuPageComponent } from '../../shared/component-shared/side-menu-page/side-menu-page.component';
import { AboutSchoolSubpageComponent } from './about-school-subpage/about-school-subpage.component';
import { BanGiamHieuPageComponent } from './ban-giam-hieu-page/ban-giam-hieu-page.component';
import { CardInfoBghComponent } from './card-info-bgh/card-info-bgh.component';
import { DangDoanThePageComponent } from './dang-doan-the-page/dang-doan-the-page.component';
import { DoiTacDoiNgoaiPageComponent } from './doi-tac-doi-ngoai-page/doi-tac-doi-ngoai-page.component';
import { routes } from './gioi-thieu.routing';
import { HomeComponent } from './home/home.component';
import { KhoaVienTrucThuocPageComponent } from './khoa-vien-truc-thuoc-page/khoa-vien-truc-thuoc-page.component';
import { OrganizationalStructurePageComponent } from './organizational-structure-page/organizational-structure-page.component';
import { PhongBanComponent } from './phong-ban/phong-ban.component';
import { ThuNgoPageComponent } from './thu-ngo-page/thu-ngo-page.component';
import { TrungTamDlPageComponent } from './trung-tam-dl-page/trung-tam-dl-page.component';
export const pluginsModules = [
  NzGridModule,
  BannerIntroComponent,
  SideMenuPageComponent,
  CardImageComponent,
  NzLayoutModule,
  NzCollapseModule,
  NzGridModule,
  ContentDisplayComponent,
];

@NgModule({
  declarations: [
    HomeComponent,
    AboutSchoolSubpageComponent,
    OrganizationalStructurePageComponent,
    DangDoanThePageComponent,
    PhongBanComponent,
    KhoaVienTrucThuocPageComponent,
    ThuNgoPageComponent,
    TrungTamDlPageComponent,
    DoiTacDoiNgoaiPageComponent,
    BanGiamHieuPageComponent,
    CardInfoBghComponent,
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
export class GioiThieuModule { }
