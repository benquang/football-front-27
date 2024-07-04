import { Component, OnInit, TemplateRef } from '@angular/core';
import { SystemConstant } from '@constants/system.constant';
import { UrlConstant } from '@constants/url.constant';
import langDataEn from '@languages/en.json';
import langDataVi from '@languages/vi.json';
import { ModalData } from '@models/common/modal-data.model';
import { ITaiSaoChonUte } from '@models/tai-sao-chon-ute/tai-sao-chon-ute';
import { UntilDestroy } from '@ngneat/until-destroy';
import { TaiSaoChonUteService } from '@services/tai-sao-chon-ute/tai-sao-chon-ute.service';
import { BreadCrumb } from '@widget/breadcrumb/breadcrumb.model';
import { Paginate } from '@widget/paginate/paginate.model';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
@UntilDestroy()
@Component({
  selector: 'app-list-tscute',
  templateUrl: './list-tscute.component.html',
  styleUrls: ['./list-tscute.component.scss'],
})
export class ListTscuteComponent implements OnInit {

  // Ngon ngu hien thi //////////
  langCode: 'en' | 'vi' = localStorage.getItem('language') as 'en' | 'vi' ?? 'vi';
  langData: Record<string, string> = (localStorage.getItem('language') === 'en' ? langDataEn : langDataVi)
    .MNG.TSCUTE;

  breadcrumbObj: BreadCrumb = new BreadCrumb({
    heading: this.langData.TSCUTE,
    listBreadcrumb: [{
      title: this.langData.QUAN_TRI,
      link: UrlConstant.ROUTE.MANAGEMENT.BASE,
    }],
  });

  listTscute = new Paginate<ITaiSaoChonUte>();
  modalData = new ModalData<ITaiSaoChonUte>();
  searchValue = '';
  selectedSwitcherId = '';

  constructor(
    private spinner: NgxSpinnerService,
    private alert: ToastrService,
    private nzModalSvc: NzModalService,
    private taiSaoChonUteSvc: TaiSaoChonUteService,
  ) { }

  ngOnInit(): void {
    this.getDataPaging();
  }

  getDataPaging(isSearch?: boolean): void {
    if (isSearch) {
      this.listTscute.currentPage = 1;
    }
    this.spinner.show();
    this.taiSaoChonUteSvc.getAllPaging(
      this.listTscute.currentPage - 1,
      this.listTscute.limit,
      this.searchValue)
      .subscribe({
        next: res => {
          this.listTscute.currentPage = res.pageable.pageNumber + 1;
          this.listTscute.limit = res.pageable.pageSize;
          this.listTscute.totalPage = res.totalPages;
          this.listTscute.totalItem = res.totalElements;
          this.listTscute.data = res.content;
        },
      });
  }

  trackByFn = (_index: number, data: ITaiSaoChonUte) => data.id;

  openModal(template: TemplateRef<unknown>, data?: ITaiSaoChonUte): void {
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

  pageChange(page: Paginate<ITaiSaoChonUte>): void {
    this.listTscute = page;
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
        this.taiSaoChonUteSvc.delete(id)
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
