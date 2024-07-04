import { CommonModule } from '@angular/common';
import { AfterViewInit, CUSTOM_ELEMENTS_SCHEMA, Component, ElementRef, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UrlConstant } from '@constants/url.constant';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { register } from 'swiper/element/bundle';
register();

const plugins = [
  CommonModule,
  RouterModule,
  NzPopoverModule,
];

@Component({
  selector: 'app-navbar-home-slider',
  standalone: true,
  imports: plugins,
  templateUrl: './navbar-home-slider.component.html',
  styleUrls: ['./navbar-home-slider.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class NavbarHomeSliderComponent implements AfterViewInit {
  @ViewChild('swiperNav') swiperEl!: ElementRef;

  urlConst = UrlConstant.ROUTE.MAIN;

  swiperParams = {
    slidesPerView: 'auto',
    speed: 500,
    autoplay: false,
    navigation: true,
    on: {
      init: () => { },
      slideChange: () => { },
      activeIndexChange: () => { },
    },
    injectStyles: [
      ':host .swiper-button-next svg, :host .swiper-button-prev svg { transform: scale(0.5); }',
      ':host .swiper-wrapper { justify-content: space-between; }',
    ],
  };

  ngAfterViewInit(): void {
    Object.assign(this.swiperEl.nativeElement, this.swiperParams);
    this.swiperEl.nativeElement.initialize();
  }
}
