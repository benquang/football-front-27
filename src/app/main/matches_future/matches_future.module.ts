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




import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { FieldErrorDisplayComponent } from '@widget/field-error-display/field-error-display.component';
import { TablePaginateComponent } from '@widget/paginate/paginate.component';
import { BlobToB64Pipe } from '@widget/pipes/blob-to-base64.pipe';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzUploadModule } from 'ng-zorro-antd/upload';

import { routes } from './matches_future.routing';

export const pluginsModules = [
  NzGridModule,
  DanhSachTtSkTbComponent,
  BreadcrumbHomeComponent,
  SideMenuPageComponent,
  PaginationPageComponent,
  BannerIntroComponent,


  BlobToB64Pipe,
  CKEditorModule,
  NzUploadModule,
  NzSelectModule,
  NzTableModule,
  NzInputModule,
  NzButtonModule,
  NzModalModule,
  NzSwitchModule,
  FieldErrorDisplayComponent,
  TablePaginateComponent,
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
export class MatchesFutureModule { }
