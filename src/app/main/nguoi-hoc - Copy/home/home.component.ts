import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { UrlConstant } from '@constants/url.constant';
import { SeoService } from '@services/common/seo.service';
import { BreadCrumbHome } from '@widget/breadcrumb-home/breadcrumb-home.model';
import { nguoiHocMenu } from '../nguoi-hoc.menu';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  panels = nguoiHocMenu;

  breadcrumbObj: BreadCrumbHome = new BreadCrumbHome({
    heading: 'Người học',
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
