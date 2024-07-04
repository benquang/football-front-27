import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ManagementLayoutModule } from '@layouts/management/management-layout.module';
import { ManagementRoutingModule } from './management-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ManagementRoutingModule,
    ManagementLayoutModule,
  ],
})
export class ManagementModule { }
