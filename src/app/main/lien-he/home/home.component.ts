import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { SeoService } from '@services/common/seo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

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
