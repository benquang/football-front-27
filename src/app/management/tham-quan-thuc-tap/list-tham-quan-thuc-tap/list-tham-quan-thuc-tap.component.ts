import { Component, OnInit, TemplateRef } from '@angular/core';
import { SystemConstant } from '@constants/system.constant';
import { UrlConstant } from '@constants/url.constant';
import langDataEn from '@languages/en.json';
import langDataVi from '@languages/vi.json';
import { ModalData } from '@models/common/modal-data.model';
import { IThamQuanThucTap } from '@models/management/tham-quan-thuc-tap.model';
import { UntilDestroy } from '@ngneat/until-destroy';
import { ThamQuanThucTapService } from '@services/management/tham-quan-thuc-tap.service';
import { BreadCrumb } from '@widget/breadcrumb/breadcrumb.model';
import { Paginate } from '@widget/paginate/paginate.model';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@UntilDestroy()
@Component({
  selector: 'app-list-tham-quan-thuc-tap',
  templateUrl: './list-tham-quan-thuc-tap.component.html',
  styleUrls: ['./list-tham-quan-thuc-tap.component.scss'],
})
export class ListThamQuanThucTapComponent implements OnInit{

  // Ngon ngu hien thi //////////
  langCode: 'en' | 'vi' = localStorage.getItem('language') as 'en' | 'vi' ?? 'vi';
  langData: Record<string, string> = (localStorage.getItem('language') === 'en' ? langDataEn : langDataVi)
    .MNG.THAM_QUAN_THUC_TAP;
  //////////////////////////////

  breadcrumbObj: BreadCrumb = new BreadCrumb({
    heading: this.langData.THAM_QUAN_THUC_TAP,
    listBreadcrumb: [{
      title: this.langData.QUAN_TRI,
      link: UrlConstant.ROUTE.MANAGEMENT.BASE,
    }],
  });

  listThamQuanThucTap = new Paginate<IThamQuanThucTap>();
  modalData = new ModalData<IThamQuanThucTap>();
  searchValue = '';
  selectedSwitcherId = '';

  constructor(
    private spinner: NgxSpinnerService,
    private alert: ToastrService,
    private nzModalSvc: NzModalService,
    private thamQuanThucTapSvc: ThamQuanThucTapService,
  ) { }

  ngOnInit(): void {
    this.getDataPaging();
  }

  getDataPaging(isSearch?: boolean): void {
    if (isSearch) {
      this.listThamQuanThucTap.currentPage = 1;
    }
    this.spinner.show();
    this.thamQuanThucTapSvc.getAllPaging(
      this.listThamQuanThucTap.currentPage - 1,
      this.listThamQuanThucTap.limit,
      this.searchValue)
      .subscribe({
        next: res => {
          this.listThamQuanThucTap.currentPage = res.pageable.pageNumber + 1;
          this.listThamQuanThucTap.limit = res.pageable.pageSize;
          this.listThamQuanThucTap.totalPage = res.totalPages;
          this.listThamQuanThucTap.totalItem = res.totalElements;
          this.listThamQuanThucTap.data = res.content;
        },
      });
  }

  trackByFn = (_index: number, data: IThamQuanThucTap) => data.id;

  openModal(template: TemplateRef<unknown>, data?: IThamQuanThucTap): void {
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

  pageChange(page: Paginate<IThamQuanThucTap>): void {
    this.listThamQuanThucTap = page;
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
        this.thamQuanThucTapSvc.delete(id)
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
