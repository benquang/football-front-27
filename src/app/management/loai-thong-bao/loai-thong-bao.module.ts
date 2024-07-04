import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ListLoaiThongBaoComponent } from './list-loai-thong-bao/list-loai-thong-bao.component';
import { FormLoaiThongBaoComponent } from './form-loai-thong-bao/form-loai-thong-bao.component';
import { RouterModule, Routes } from '@angular/router';
import { BreadcrumbComponent } from '@widget/breadcrumb/breadcumb.component';
import { FieldErrorDisplayComponent } from '@widget/field-error-display/field-error-display.component';
import { TablePaginateComponent } from '@widget/paginate/paginate.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
export const pluginsModules = [
  FieldErrorDisplayComponent,
  TablePaginateComponent,
  BreadcrumbComponent,
  NzInputModule,
  NzButtonModule,
  NzModalModule,
  NzGridModule,
  NzTableModule,
  NzSwitchModule,
];
export const routes: Routes = [
  { path: '', component: ListLoaiThongBaoComponent },
];

@NgModule({
  declarations: [
    ListLoaiThongBaoComponent,
    FormLoaiThongBaoComponent,
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
export class LoaiThongBaoModule { }
