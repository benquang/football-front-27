import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MainLayoutModule } from '@layouts/main/main-layout.module';
import { MainRoutingModule } from './main-routing.module';


@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    MainLayoutModule,
    MainRoutingModule,
  ],
})
export class MainModule { }
