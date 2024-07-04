import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { BreadcrumbComponent } from '@widget/breadcrumb/breadcumb.component';
import { FieldErrorDisplayComponent } from '@widget/field-error-display/field-error-display.component';
import { TablePaginateComponent } from '@widget/paginate/paginate.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzTableModule } from 'ng-zorro-antd/table';
import { FormAcademicRanksComponent } from './form-academic-ranks/form-academic-ranks.component';
import { ListAcademicRanksComponent } from './list-academic-ranks/list-academic-ranks.component';

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
];

export const routes: Routes = [
  { path: '', component: ListAcademicRanksComponent },
];

@NgModule({
  declarations: [
    // Component here
    ListAcademicRanksComponent,
    FormAcademicRanksComponent,
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
export class AcademicRanksModule { }
