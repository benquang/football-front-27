import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

// layout components
import { ManagementFooterComponent } from './management-footer/management-footer.component';
import { ManagementHeaderComponent } from './management-header/management-header.component';
import { ManagementLayoutComponent } from './management-layout/management-layout.component';
import { ManagementSidebarComponent } from './management-sidebar/management-sidebar.component';

export const pluginsModules = [
  NzDropDownModule,
  NzLayoutModule,
  NzToolTipModule,
  NzButtonModule,
];

@NgModule({
  declarations: [
    ManagementLayoutComponent,
    ManagementHeaderComponent,
    ManagementFooterComponent,
    ManagementSidebarComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    pluginsModules,
  ],
  exports: [],
  providers: [],
})
export class ManagementLayoutModule { }
