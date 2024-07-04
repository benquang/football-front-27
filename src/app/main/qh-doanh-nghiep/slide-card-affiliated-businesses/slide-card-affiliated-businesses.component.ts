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
  selector: 'app-slide-card-affiliated-businesses',
  templateUrl: './slide-card-affiliated-businesses.component.html',
  styleUrls: ['./slide-card-affiliated-businesses.component.scss'],
  standalone: true,
  imports: plugins,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SlideCardAffiliatedBusinessesComponent implements AfterViewInit {
  @ViewChild('swiperBusinessLogo') swiperEl!: ElementRef;
  listPostBusinessLogo: string[] = ['1', '2', '3', '4', '5'];
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
      400: { slidesPerView: 1 },
      600: { slidesPerView: 2 },
      800: { slidesPerView: 2 },
      992: { slidesPerView: 2 },
      1100: { slidesPerView: 2 },
      1300: { slidesPerView: 3 },
    },
  };
  ngAfterViewInit(): void {
    Object.assign(this.swiperEl.nativeElement, this.swiperParams);
    this.swiperEl.nativeElement.initialize();
  }
}
