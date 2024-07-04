import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListDoanhNghiepLkComponent } from './list-doanh-nghiep-lk/list-doanh-nghiep-lk.component';
import { FormDoanhNghiepLkComponent } from './form-doanh-nghiep-lk/form-doanh-nghiep-lk.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ImageCroppingComponent } from '@component-shared/image-cropping/image-cropping.component';
import { BreadcrumbComponent } from '@widget/breadcrumb/breadcumb.component';
import { FieldErrorDisplayComponent } from '@widget/field-error-display/field-error-display.component';
import { TablePaginateComponent } from '@widget/paginate/paginate.component';
import { BlobToB64Pipe } from '@widget/pipes/blob-to-base64.pipe';
import { ImgIdToBlobPipe } from '@widget/pipes/img-id-to-blob.pipe';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzTableModule } from 'ng-zorro-antd/table';
export const pluginsModules = [
  NzGridModule,
  NzTableModule,
  NzInputModule,
  NzButtonModule,
  NzModalModule,
  NzSwitchModule,
  FieldErrorDisplayComponent,
  TablePaginateComponent,
  BreadcrumbComponent,
  ImageCroppingComponent,
  BlobToB64Pipe,
  ImgIdToBlobPipe,
];
export const routes: Routes = [
  { path: '', component: ListDoanhNghiepLkComponent },
];

@NgModule({
  declarations: [
    ListDoanhNghiepLkComponent,
    FormDoanhNghiepLkComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    pluginsModules,

    // Routes
    RouterModule.forChild(routes),
  ],
})
export class DoanhNghiepLkModule { }
