import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ImageCroppingComponent } from '@component-shared/image-cropping/image-cropping.component';
import { BreadcrumbComponent } from '@widget/breadcrumb/breadcumb.component';
import { FieldErrorDisplayComponent } from '@widget/field-error-display/field-error-display.component';
import { TablePaginateComponent } from '@widget/paginate/paginate.component';
import { BlobToB64Pipe } from '@widget/pipes/blob-to-base64.pipe';
import { ImgIdToBlobPipe } from '@widget/pipes/img-id-to-blob.pipe';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzTableModule } from 'ng-zorro-antd/table';
import { FormNckhComponent } from './form-nckh/form-nckh.component';
import { ListNckhComponent } from './list-nckh/list-nckh.component';

export const pluginsModules = [
  BreadcrumbComponent,
  NzInputModule,
  NzModalModule,
  NzButtonModule,
  NzTableModule,
  ImgIdToBlobPipe,
  NzSwitchModule,
  TablePaginateComponent,
  FieldErrorDisplayComponent,
  BlobToB64Pipe,
  ImageCroppingComponent,
];

export const routes: Routes = [
  { path: '', component: ListNckhComponent },
];

@NgModule({
  declarations: [
    FormNckhComponent,
    ListNckhComponent,
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
export class NckhModule { }
