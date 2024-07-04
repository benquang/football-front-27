import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NavbarHomeSliderComponent } from '@component-shared/navbar-home-slider/navbar-home-slider.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { MainFooterComponent } from './main-footer/main-footer.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { MainNavComponent } from './main-nav/main-nav.component';

export const pluginsModules = [
  NzDropDownModule,
  NzButtonModule,
  NzGridModule,
  NzInputModule,
  NzPopoverModule,
  NavbarHomeSliderComponent,
];

@NgModule({
  declarations: [
    MainHeaderComponent,
    MainFooterComponent,
    MainLayoutComponent,
    MainNavComponent,
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
export class MainLayoutModule { }
