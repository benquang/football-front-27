import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomeSliderComponent } from '@component-shared/home-slider/home-slider.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputModule } from 'ng-zorro-antd/input'; //
import { CardNewsBigComponent } from './card-news-big/card-news-big.component';
import { CardNewsSmallComponent } from './card-news-small/card-news-small.component';
import { CtaAdmissionsComponent } from './cta-admissions/cta-admissions.component';
import { HomeComponent } from './home/home.component';
import { homePageRoutes } from './homepage.routing';
import { NotiComponent } from './noti/noti.component';
import { SlideCardNewsBigComponent } from './slide-card-news-big/slide-card-news-big.component';

import { ActivityPhotosComponent } from './activity-photos/activity-photos.component';
import { CardEventComponent } from './card-event/card-event.component';
import { EventAndBusinessComponent } from './event-and-business/event-and-business.component';
import { HoatDongTaiHcmuteComponent } from './hoat-dong-tai-hcmute/hoat-dong-tai-hcmute.component';
import { SideCardInfoSmallComponent } from './side-card-info-small/side-card-info-small.component';
import { SlideCardBusinessLogoComponent } from './slide-card-business-logo/slide-card-business-logo.component';
import { TaiSaoChonHcmuteComponent } from './tai-sao-chon-hcmute/tai-sao-chon-hcmute.component';
import { TinTucComponent } from './tin-tuc/tin-tuc.component';
export const pluginsModules = [
  NzGridModule,
  NzInputModule,
  HomeSliderComponent,
  SlideCardNewsBigComponent,
  SlideCardBusinessLogoComponent,
  ActivityPhotosComponent,
];

@NgModule({
  declarations: [
    HomeComponent,
    CardNewsBigComponent,
    NotiComponent,
    CardNewsSmallComponent,
    CtaAdmissionsComponent,
    SideCardInfoSmallComponent,
    TaiSaoChonHcmuteComponent,
    EventAndBusinessComponent,
    CardEventComponent,
    HoatDongTaiHcmuteComponent,
    TinTucComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    pluginsModules,
    // Routes
    RouterModule.forChild(homePageRoutes),
  ],
})
export class HomePageModule { }
