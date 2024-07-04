import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { UrlConstant } from '@constants/url.constant';
import langDataEn from '@languages/en.json';
import langDataVi from '@languages/vi.json';
import { ICardImage } from '@models/common/card-image.model';
import { IBieuDoKhgd } from '@models/dao-tao/bieu-do-khgd.model';
import { SeoService } from '@services/common/seo.service';
import { BreadCrumbHome } from '@widget/breadcrumb-home/breadcrumb-home.model';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  // Ngon ngu hien thi //////////
  langData: Record<string, string> = (localStorage.getItem('language') === 'en' ? langDataEn : langDataVi)
    .MAIN.DAO_TAO;
  //////////////////////////////

  bieuDoGdData: IBieuDoKhgd = {
    image: '',
    title: 'Biểu Đồ Kế Hoạch Giảng Dạy - Học Tập Năm Học 2020-2021 (Chính Quy)',
    linkDownload: '',
  };
  breadcrumbObj: BreadCrumbHome = new BreadCrumbHome({
    heading: 'Đào tạo',
    listBreadcrumb: [
      {
        title: 'Trang chủ',
        link: UrlConstant.ROUTE.MAIN.HOMEPAGE,
      },
    ],
  });
  datas: ICardImage[] = [
    {
      image: 'https://via.placeholder.com/426x240',
      title: 'Đào Tạo Chính Quy',
      link: '',
    },
    {
      image: 'https://via.placeholder.com/426x240',
      title: 'Đào Tạo Sau Đại Học',
      link: '',
    },
    {
      image: 'https://via.placeholder.com/426x240',
      title: 'Đào Tạo Không Chính Quy',
      link: '',
    },
    {
      image: 'https://via.placeholder.com/426x240',
      title: 'Đào Tạo Chất Lượng Cao',
      link: '',
    },
    {
      image: 'https://via.placeholder.com/426x240',
      title: 'Đào Tạo Hợp Tác Quốc Tế',
      link: '',
    },
  ];
  dataNhomDaoTao: ICardImage[] = [
    {
      title: 'xã hội và nhân văn',
      image: 'assets/img/nhom-nganh-dt/xh-nhan-van.svg',
      link: 'dao-tao/cac-nghanh-cua-khoa-subpage',
    },
    {
      title: 'thiết kế và xây dựng',
      image: 'assets/img/nhom-nganh-dt/thke-xay-dung.svg',
      link: 'dao-tao/cac-nghanh-cua-khoa-subpage',
    },
    {
      title: 'kinh doanh và quản trị',
      image: 'assets/img/nhom-nganh-dt/qt-kinh-doanh.svg',
      link: 'dao-tao/cac-nghanh-cua-khoa-subpage',
    },
    {
      title: 'kỹ thuật và công nghệ',
      image: 'assets/img/nhom-nganh-dt/kthuat-cnghe.svg',
      link: 'dao-tao/cac-nghanh-cua-khoa-subpage',
    },
  ];
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
