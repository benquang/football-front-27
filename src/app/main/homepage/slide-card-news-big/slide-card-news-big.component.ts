import { CommonModule } from '@angular/common';
import { AfterViewInit, CUSTOM_ELEMENTS_SCHEMA, Component, ElementRef, ViewChild } from '@angular/core';
import { register } from 'swiper/element/bundle';
register();

const plugins = [
  CommonModule,
];

@Component({
  selector: 'app-slide-card-news-big',
  standalone: true,
  imports: plugins,
  templateUrl: './slide-card-news-big.component.html',
  styleUrls: ['./slide-card-news-big.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SlideCardNewsBigComponent implements AfterViewInit {
  @ViewChild('swiperWhyUs') swiperEl!: ElementRef;

  listPostTaiSaoChon: string[] = ['1', '2', '3', '4', '5'];

  swiperParams = {
    slidesPerView: 'auto',
    centeredSlides: false,
    speed: 500,
    autoplay: {
      delay: 5000,
      pauseOnMouseEnter: true,
    },
    loop: true,
    navigation: true,
    spaceBetween: -20,
    on: {
      init: () => { },
      slideChange: () => { },
      activeIndexChange: () => { },
    },
    injectStyles: [':host .swiper-button-next svg, :host .swiper-button-prev svg { display: none; }'],
    breakpoints: {
      0: { slidesPerView: 1 },
      992: { slidesPerView: 2 },
    },
  };

  ngAfterViewInit(): void {
    Object.assign(this.swiperEl.nativeElement, this.swiperParams);
    this.swiperEl.nativeElement.initialize();
  }

}
