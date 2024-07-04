import { CommonModule } from '@angular/common';
import { AfterViewInit, CUSTOM_ELEMENTS_SCHEMA, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';
import { GetImageSrcDirective } from '@widget/directives/get-image-src.directive';
import { register } from 'swiper/element/bundle';
register();

const plugins = [
  CommonModule,
  GetImageSrcDirective,
];

@Component({
  selector: 'app-home-slider',
  standalone: true,
  imports: plugins,
  templateUrl: './home-slider.component.html',
  styleUrls: ['./home-slider.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeSliderComponent implements AfterViewInit {

  @ViewChild('swiper') swiperEl!: ElementRef;
  @Input() listBannerId: string[] = [];

  listBannerSrc: { [key: string]: SafeResourceUrl; } = {};
  swiperParams = {
    slidesPerView: 1,
    centeredSlides: true,
    speed: 500,
    autoplay: {
      delay: 5000,
      pauseOnMouseEnter: true,
    },
    loop: true,
    navigation: true,
    on: {
      init: () => { },
      slideChange: () => { },
      activeIndexChange: () => { },
    },
    injectStyles: [':host .swiper-button-next svg, :host .swiper-button-prev svg { display: none; }'],
  };

  ngAfterViewInit(): void {
    Object.assign(this.swiperEl.nativeElement, this.swiperParams);
    this.swiperEl.nativeElement.initialize();
  }

  storeImgSrc(id: string, img: SafeResourceUrl) {
    this.listBannerSrc = Object.assign(this.listBannerSrc, {
      [id]: img,
    });
  }

  onImgError(e: Event) {
    if (e.target) {
      (e.target as HTMLImageElement).src = 'assets/img/bg/default-banner-home.jpg';
    }
  }

}
