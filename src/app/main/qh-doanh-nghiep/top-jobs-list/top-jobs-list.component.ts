import { Component } from '@angular/core';
import langDataEn from '@languages/en.json';
import langDataVi from '@languages/vi.json';

@Component({
  selector: 'app-top-jobs-list',
  templateUrl: './top-jobs-list.component.html',
  styleUrls: ['./top-jobs-list.component.scss'],
})
export class TopJobsListComponent {

  langCode: 'en' | 'vi' = localStorage.getItem('language') as 'en' | 'vi' ?? 'vi';
  langData: Record<string, string> = (localStorage.getItem('language') === 'en' ? langDataEn : langDataVi).MAIN.QH_DOANH_NGHIEP.TOP_JOB;

  description = 'Tôi đã hoạt động 2 năm trong lĩnh vực BĐS với sức trẻ'
    + ' căng đầy nhiệt huyết, '
    + 'đã giúp tư vấn thành công nhiều giao dịch BĐS'
    + 'cho khách hàng mua nhà và chủ nhà tại thị trường TP. Hồ Chí Minh.';
  cards = [
    {
      imageSrc: '/assets/img/logo/ute_logo.png',
      title: 'Ihouzz Homes',
      description: this.description,
    },
    {
      imageSrc: '/assets/img/logo/ute_logo.png',
      title: 'Ihouzz Homes',
      description: this.description,
    },
    {
      imageSrc: '/assets/img/logo/ute_logo.png',
      title: 'Ihouzz Homes',
      description: this.description,
    },
    {
      imageSrc: '/assets/img/logo/ute_logo.png',
      title: 'Ihouzz Homes',
      description: this.description,
    },
    {
      imageSrc: '/assets/img/logo/ute_logo.png',
      title: 'Ihouzz Homes',
      description: this.description,
    },
    {
      imageSrc: '/assets/img/logo/ute_logo.png',
      title: 'Ihouzz Homes',
      description: this.description,
    },
    {
      imageSrc: '/assets/img/logo/ute_logo.png',
      title: 'Ihouzz Homes',
      description: this.description,
    },
    {
      imageSrc: '/assets/img/logo/ute_logo.png',
      title: 'Ihouzz Homes',
      description: this.description,
    },
  ];
}
