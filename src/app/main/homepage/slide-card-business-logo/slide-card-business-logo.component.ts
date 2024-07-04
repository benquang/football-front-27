import { CommonModule } from '@angular/common';
import { AfterViewInit, CUSTOM_ELEMENTS_SCHEMA, Component, ElementRef, ViewChild } from '@angular/core';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { register } from 'swiper/element/bundle';
register();
const plugins = [
  CommonModule,
  NzGridModule,
];
@Component({
  selector: 'app-slide-card-business-logo',
  standalone: true,
  imports: plugins,
  templateUrl: './slide-card-business-logo.component.html',
  styleUrls: ['./slide-card-business-logo.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SlideCardBusinessLogoComponent implements AfterViewInit {
  @ViewChild('swiperBusinessLogo') swiperEl!: ElementRef;
  listPostBusinessLogo: string[] = ['1', '2', '3', '4', '5', '6', '7', '8'];
  swiperParams = {
    slidesPerView: 'auto',
    speed: 500,
    autoplay: {
      delay: 5000,
      pauseOnMouseEnter: true,
    },
    loop: true,
    navigation: {
      prevEl: '.nav-prev',
      nextEl: '.nav-next',
    },
    spaceBetween: 10,
    on: {
      init: () => { },
      slideChange: () => { },
      activeIndexChange: () => { },
    },
    injectStyles: [':host .swiper-button-next svg, :host .swiper-button-prev svg { display: none; }'],
    breakpoints: {
      300: { slidesPerView: 1 },
      500: { slidesPerView: 2 },
      700: { slidesPerView: 3 },
      900: { slidesPerView: 4 },
      1100: { slidesPerView: 5 },
      1300: { slidesPerView: 6 },
    },
  };
  ngAfterViewInit(): void {
    Object.assign(this.swiperEl.nativeElement, this.swiperParams);
    this.swiperEl.nativeElement.initialize();
  }
}
