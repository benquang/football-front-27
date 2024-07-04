import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { UrlConstant } from '@constants/url.constant';
import langDataEn from '@languages/en.json';
import langDataVi from '@languages/vi.json';
import { SeoService } from '@services/common/seo.service';
import { BreadCrumbHome } from '@widget/breadcrumb-home/breadcrumb-home.model';
import { gioiThieuMenu } from '../gioi-thieu.menu';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  // Ngon ngu hien thi //////////
  langCode: 'en' | 'vi' = localStorage.getItem('language') as 'en' | 'vi' ?? 'vi';
  langData: Record<string, string> = (localStorage.getItem('language') === 'en' ? langDataEn : langDataVi)
    .MNG.CATEGORIES.ACADEMIC_RANKS;
  //////////////////////////////

  panels = gioiThieuMenu;

  breadcrumbObj: BreadCrumbHome = new BreadCrumbHome({
    heading: 'Giới Thiệu',
    listBreadcrumb: [
      {
        title: 'Trang chủ',
        link: UrlConstant.ROUTE.MAIN.HOMEPAGE,
      },
    ],
  });

  constructor(
    private metaSvc: Meta,
    private seoSvc: SeoService,
  ) { }


  ngOnInit(): void {
    this.metaSvc.updateTag({
      name: 'description',
      content: 'Demo 123',
    });
    this.seoSvc.createLink('canonical', '${fe_domain}/product/${product_type}'); // Link to an official page
    this.seoSvc.addScript({
      '@context': 'https://schema.org/',
      '@type': 'Recipe',
      name: 'Name',
      image: 'img-url',
    });
  }

}
