import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { IThongBaoSuKienTinTuc } from '@models/common/tb-sk-tt.model';
import { SeoService } from '@services/common/seo.service';

import { UrlConstant } from '@constants/url.constant';
import langDataEn from '@languages/en.json';
import langDataVi from '@languages/vi.json';
import { BreadCrumbHome } from '@widget/breadcrumb-home/breadcrumb-home.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  langCode: 'en' | 'vi' = localStorage.getItem('language') as 'en' | 'vi' ?? 'vi';
  langData: Record<string, string> = (localStorage.getItem('language') === 'en' ? langDataEn : langDataVi).MAIN.TIN_TUC_SU_KIEN;

  listBreadcrumbTitle = this.langCode === 'vi' ? {
    TIN_TUC: 'Tin tức',
    TRANG_CHU: 'Trang chủ',
  } : {
    TIN_TUC: 'News',
    TRANG_CHU: 'Home',
  };

  tinMoiNhatTitle = this.langCode === 'vi' ? 'Tin tức mới nhất'
    : 'Latest news';
  suKienMoiNhatTitle = this.langCode === 'vi' ? 'Sự kiện mới nhất'
    : 'Latest events';

  breadcrumbObj: BreadCrumbHome = new BreadCrumbHome({
    heading: this.listBreadcrumbTitle.TIN_TUC,
    listBreadcrumb: [
      {
        title: this.listBreadcrumbTitle.TRANG_CHU,
        link: UrlConstant.ROUTE.MAIN.HOMEPAGE,
      },
    ],
  });

  title = this.langCode === 'vi' ? 'TIN TỨC & SỰ KIỆN'
    : 'News & Events';
  image = 'assets/img/bg/banner-tt.JPG';

  tinmoinhats: IThongBaoSuKienTinTuc[] = [
    {
      anhBia: 'https://via.placeholder.com/160x90',
      tieuDe: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standa'
        + 'rd dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
      noiDung: '',
      ngayDang: new Date(),
    },
    {
      anhBia: 'https://via.placeholder.com/160x90',
      tieuDe: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standa'
        + 'rd dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
      noiDung: '',
      ngayDang: new Date(),
    },
    {
      anhBia: 'https://via.placeholder.com/160x90',
      tieuDe: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standa'
        + 'rd dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
      noiDung: '',
      ngayDang: new Date(),
    },
    {
      anhBia: 'https://via.placeholder.com/160x90',
      tieuDe: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standa'
        + 'rd dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
      noiDung: '',
      ngayDang: new Date(),
    },
  ];

  sukienmoinhats: IThongBaoSuKienTinTuc[] = [
    {
      anhBia: 'https://via.placeholder.com/160x90',
      tieuDe: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standa'
        + 'rd dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
      noiDung: '',
      ngayDang: new Date(),
    },
    {
      anhBia: 'https://via.placeholder.com/160x90',
      tieuDe: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standa'
        + 'rd dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
      noiDung: '',
      ngayDang: new Date(),
    },
    {
      anhBia: 'https://via.placeholder.com/160x90',
      tieuDe: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standa'
        + 'rd dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
      noiDung: '',
      ngayDang: new Date(),
    },
    {
      anhBia: 'https://via.placeholder.com/160x90',
      tieuDe: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standa'
        + 'rd dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
      noiDung: '',
      ngayDang: new Date(),
    },
  ];

  tintucs: IThongBaoSuKienTinTuc[] = [
    {
      anhBia: 'https://via.placeholder.com/160x90',
      tieuDe: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standa'
        + 'rd dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
      noiDung: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standa'
        + 'rd dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
      ngayDang: new Date(),
      tag: 'TIN TỨC',
    },
    {
      anhBia: 'https://via.placeholder.com/160x90',
      tieuDe: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standa'
        + 'rd dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
      noiDung: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standa'
        + 'rd dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
      ngayDang: new Date(),
      tag: 'SỰ KIỆN',
    },
    {
      anhBia: 'https://via.placeholder.com/160x90',
      tieuDe: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standa'
        + 'rd dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
      noiDung: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standa'
        + 'rd dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
      ngayDang: new Date(),
      tag: 'TIN TỨC',
    },
    {
      anhBia: 'https://via.placeholder.com/160x90',
      tieuDe: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standa'
        + 'rd dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
      noiDung: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standa'
        + 'rd dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
      ngayDang: new Date(),
      tag: 'SỰ KIỆN',
    },
  ];

  filteredTintucs: IThongBaoSuKienTinTuc[] = this.tintucs.slice();
  selectedTag = this.langCode === 'vi' ? 'Tất cả' : 'All';

  constructor(
    private metaSvc: Meta,
    private seoSvc: SeoService,
  ) { }

  tagColor(tag: string): string {
    return this.selectedTag === tag ? 'blue' : 'grey6';
  }

  filterTintucsByTag(tag: string) {
    if (tag === 'Tất cả') {
      this.filteredTintucs = this.tintucs;
    } else {
      this.filteredTintucs = this.tintucs.filter(tintuc => tintuc.tag === tag);
    }
    this.selectedTag = tag;
  }

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

  pageChange(newPageIndex: number) {
    console.log(newPageIndex);
  }

}
