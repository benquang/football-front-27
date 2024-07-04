import { Component, OnInit, TemplateRef } from '@angular/core';
import { SystemConstant } from '@constants/system.constant';
import { UrlConstant } from '@constants/url.constant';
import langDataEn from '@languages/en.json';
import langDataVi from '@languages/vi.json';
import { ModalData } from '@models/common/modal-data.model';
import { IBannerSlide } from '@models/home-banner-slide/banner-slide.model';
import { UntilDestroy } from '@ngneat/until-destroy';
import { BannerSlideService } from '@services/home-banner-slide/banner-slide.service';
import { BreadCrumb } from '@widget/breadcrumb/breadcrumb.model';
import { Paginate } from '@widget/paginate/paginate.model';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
@UntilDestroy()
@Component({
  selector: 'app-list-banner-slide',
  templateUrl: './list-banner-slide.component.html',
  styleUrls: ['./list-banner-slide.component.scss'],
})
export class ListBannerSlideComponent implements OnInit {

  // Ngon ngu hien thi //////////
  langCode: 'en' | 'vi' = localStorage.getItem('language') as 'en' | 'vi' ?? 'vi';
  langData: Record<string, string> = (localStorage.getItem('language') === 'en' ? langDataEn : langDataVi)
    .MNG.BANNER_SLIDE;
  //////////////////////////////

  breadcrumbObj: BreadCrumb = new BreadCrumb({
    heading: this.langData.BANNER_SLIDE,
    listBreadcrumb: [{
      title: this.langData.QUAN_TRI,
      link: UrlConstant.ROUTE.MANAGEMENT.BASE,
    }],
  });

  listBannerSlide = new Paginate<IBannerSlide>();
  modalData = new ModalData<IBannerSlide>();
  searchValue = '';
  selectedSwitcherId = '';

  constructor(
    private spinner: NgxSpinnerService,
    private alert: ToastrService,
    private nzModalSvc: NzModalService,
    private bannerSlideSvc: BannerSlideService,
  ) { }

  ngOnInit(): void {
    this.getDataPaging();
  }

  getDataPaging(isSearch?: boolean): void {
    if (isSearch) {
      this.listBannerSlide.currentPage = 1;
    }
    this.spinner.show();
    this.bannerSlideSvc.getAllPaging(
      this.listBannerSlide.currentPage - 1,
      this.listBannerSlide.limit,
      this.searchValue)
      .subscribe({
        next: res => {
          this.listBannerSlide.currentPage = res.pageable.pageNumber + 1;
          this.listBannerSlide.limit = res.pageable.pageSize;
          this.listBannerSlide.totalPage = res.totalPages;
          this.listBannerSlide.totalItem = res.totalElements;
          this.listBannerSlide.data = res.content;
        },
      });
  }

  trackByFn = (_index: number, data: IBannerSlide) => data.hinhAnhId;

  openModal(template: TemplateRef<unknown>, data?: IBannerSlide): void {
    if (data) {
      this.modalData.action = SystemConstant.ACTION.EDIT;
      this.modalData.data = data;
    } else {
      this.modalData.action = SystemConstant.ACTION.ADD;
    }
    this.nzModalSvc.create({
      nzStyle: { top: '20px' },
      nzWidth: 800,
      nzTitle: `${(data ? this.langData.CHINH_SUA :
        this.langData.THEM_MOI)} ${this.breadcrumbObj.heading}`,
      nzContent: template,
      nzFooter: null,
      nzMaskClosable: false,
    });
  }

  closeModal(reload?: boolean): void {
    if (reload) {
      this.getDataPaging();
    }
    this.nzModalSvc.closeAll();
  }

  pageChange(page: Paginate<IBannerSlide>): void {
    this.listBannerSlide = page;
    this.getDataPaging();
  }

  changeStatus(id: string): void {
    this.selectedSwitcherId = id;
    this.nzModalSvc.confirm({
      nzWidth: 300,
      nzTitle: this.langData.XAC_NHAN_THAY_DOI_TRANG_THAI,
      nzCancelText: this.langData.HUY,
      nzOkDanger: true,
      nzOkText: this.langData.XAC_NHAN,
      nzOnOk: () => {
        this.spinner.show();
        this.bannerSlideSvc.delete(id)
          .subscribe({
            next: () => {
              this.alert.success(this.langData.THAY_DOI_THANH_CONG);
              this.getDataPaging();
              this.selectedSwitcherId = '';
            },
            error: () => this.selectedSwitcherId = '',
          });
      },
      nzOnCancel: () => this.selectedSwitcherId = '',
    });
  }
}
