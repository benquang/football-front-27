import { Component, OnInit, TemplateRef } from '@angular/core';
import { SystemConstant } from '@constants/system.constant';
import { UrlConstant } from '@constants/url.constant';
import langDataEn from '@languages/en.json';
import langDataVi from '@languages/vi.json';
import { ModalData } from '@models/common/modal-data.model';
import { IDoanhNghiepLk } from '@models/management/doanh-nghiep-lk.model';
import { UntilDestroy } from '@ngneat/until-destroy';
import { DoanhNghiepLkService } from '@services/management/doanh-nghiep-lk.service';
import { BreadCrumb } from '@widget/breadcrumb/breadcrumb.model';
import { Paginate } from '@widget/paginate/paginate.model';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
@UntilDestroy()
@Component({
  selector: 'app-list-doanh-nghiep-lk',
  templateUrl: './list-doanh-nghiep-lk.component.html',
  styleUrls: ['./list-doanh-nghiep-lk.component.scss'],
})
export class ListDoanhNghiepLkComponent implements OnInit {
  // Ngon ngu hien thi //////////
  langCode: 'en' | 'vi' = localStorage.getItem('language') as 'en' | 'vi' ?? 'vi';
  langData: Record<string, string> = (localStorage.getItem('language') === 'en' ? langDataEn : langDataVi)
    .MNG.DOANH_NGHIEP_LK;
  //////////////////////////////

  breadcrumbObj: BreadCrumb = new BreadCrumb({
    heading: this.langData.DOANH_NGHIEP_LK,
    listBreadcrumb: [{
      title: this.langData.QUAN_TRI,
      link: UrlConstant.ROUTE.MANAGEMENT.BASE,
    }],
  });
  listDoanhNghiepLk = new Paginate<IDoanhNghiepLk>();
  modalData = new ModalData<IDoanhNghiepLk>();
  searchValue = '';
  selectedSwitcherId = '';

  constructor(
    private spinner: NgxSpinnerService,
    private alert: ToastrService,
    private nzModalSvc: NzModalService,
    private doanhNghiepLkSvc: DoanhNghiepLkService,
  ) { }

  ngOnInit(): void {
    this.getDataPaging();
  }

  getDataPaging(isSearch?: boolean): void {
    if (isSearch) {
      this.listDoanhNghiepLk.currentPage = 1;
    }
    this.spinner.show();
    this.doanhNghiepLkSvc.getAllPaging(
      this.listDoanhNghiepLk.currentPage - 1,
      this.listDoanhNghiepLk.limit,
      this.searchValue)
      .subscribe({
        next: res => {
          this.listDoanhNghiepLk.currentPage = res.pageable.pageNumber + 1;
          this.listDoanhNghiepLk.limit = res.pageable.pageSize;
          this.listDoanhNghiepLk.totalPage = res.totalPages;
          this.listDoanhNghiepLk.totalItem = res.totalElements;
          this.listDoanhNghiepLk.data = res.content;
        },
      });
  }

  trackByFn = (_index: number, data: IDoanhNghiepLk) => data.id;

  openModal(template: TemplateRef<unknown>, data?: IDoanhNghiepLk): void {
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

  pageChange(page: Paginate<IDoanhNghiepLk>): void {
    this.listDoanhNghiepLk = page;
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
        this.doanhNghiepLkSvc.delete(id)
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
