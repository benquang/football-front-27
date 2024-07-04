import { CommonModule } from '@angular/common';
import { AfterViewInit, CUSTOM_ELEMENTS_SCHEMA, Component, ElementRef, ViewChild } from '@angular/core';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { Swiper } from 'swiper';
import { register } from 'swiper/element/bundle';

register();

const plugins = [
  CommonModule,
  NzGridModule,
];

@Component({
  selector: 'app-activity-photos',
  standalone: true,
  imports: plugins,
  templateUrl: './activity-photos.component.html',
  styleUrls: ['./activity-photos.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ActivityPhotosComponent implements AfterViewInit {
  @ViewChild('swiper') swiperEl!: ElementRef;
  @ViewChild('miniSwiper') miniSwiperEl!: ElementRef;

  isVisible = false;
  activeSlideIndex = 0;

  activityPhotos: string[] = [
    'assets/img/bg/default-banner-home.jpga',
    'assets/img/bg/default-banner-home.jpg',
    'assets/img/bg/default-banner-home.jpg',
    'assets/img/bg/default-banner-home.jpg',
    'assets/img/bg/default-banner-home.jpg',
    'assets/img/bg/default-banner-home.jpga',
  ];

  swiperParams = {
    slidesPerView: 1,
    centeredSlides: true,
    speed: 500,
    loop: true,
    navigation: true,
    autoplay: false,
    on: {
      init: () => { },
      slideChange: (swiper: Swiper) => {
        this.activeSlideIndex = swiper.realIndex;
      },
      activeIndexChange: () => { },
    },
    injectStyles: [':host .swiper-button-next svg, :host .swiper-button-prev svg { display: none; }'],
  };
  miniSwiperParams = {
    slidesPerView: 6,
    centeredSlides: false,
    speed: 500,
    loop: false,
    autoplay: false,
    navigation: true,
    on: {
      init: () => { },
      slideChange: () => { },
      activeIndexChange: () => { },
    },
    injectStyles: [':host .swiper-button-next svg, :host .swiper-button-prev svg { display: none; }'],
    breakpoints: {
      0: { slidesPerView: 2 },
      376: { slidesPerView: 3 },
      576: { slidesPerView: 4 },
      768: { slidesPerView: 5 },
      992: { slidesPerView: 5 },
      1200: { slidesPerView: 6 },
    },
  };

  ngAfterViewInit(): void {
    Object.assign(this.swiperEl.nativeElement, this.swiperParams);
    Object.assign(this.miniSwiperEl.nativeElement, this.miniSwiperParams);
    this.swiperEl.nativeElement.initialize();
    this.miniSwiperEl.nativeElement.initialize();
  }

  showModal(): void {
    this.isVisible = true;
  }

  hideModal(): void {
    this.isVisible = false;
  }

}
