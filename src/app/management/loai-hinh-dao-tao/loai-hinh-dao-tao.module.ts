import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListLoaiHinhDaoTaoComponent } from './list-loai-hinh-dao-tao/list-loai-hinh-dao-tao.component';
import { FormLoaiHinhDaoTaoComponent } from './form-loai-hinh-dao-tao/form-loai-hinh-dao-tao.component';
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
  { path: '', component: ListLoaiHinhDaoTaoComponent },
];

@NgModule({
  declarations: [
    ListLoaiHinhDaoTaoComponent,
    FormLoaiHinhDaoTaoComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    pluginsModules,
    RouterModule.forChild(routes),
  ],
})
export class LoaiHinhDaoTaoModule { }
