import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { UploadFileComponent } from '@component-shared/upload-file/upload-file.component';
import { BreadcrumbComponent } from '@widget/breadcrumb/breadcumb.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { DashboardComponent } from './dashboard.component';

export const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    // canDeactivate: [canDeactivate],
  },
];

export const pluginsModules = [
  BreadcrumbComponent,
  NzGridModule,
  UploadFileComponent,
  NzModalModule,
  NzButtonModule,
  CKEditorModule,
];
@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    pluginsModules,

    // Routes
    RouterModule.forChild(routes),
  ],
})
export class DashboardModule { }
