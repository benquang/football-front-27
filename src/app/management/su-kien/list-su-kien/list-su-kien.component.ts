import { Component, OnInit, TemplateRef } from '@angular/core';
import { SystemConstant } from '@constants/system.constant';
import { UrlConstant } from '@constants/url.constant';
import langDataEn from '@languages/en.json';
import langDataVi from '@languages/vi.json';
import { ModalData } from '@models/common/modal-data.model';
import { ISuKien } from '@models/management/su-kien.model';
import { UntilDestroy } from '@ngneat/until-destroy';
import { SuKienService } from '@services/management/su-kien.service';
import { BreadCrumb } from '@widget/breadcrumb/breadcrumb.model';
import { Paginate } from '@widget/paginate/paginate.model';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@UntilDestroy()
@Component({
  selector: 'app-list-su-kien',
  templateUrl: './list-su-kien.component.html',
  styleUrls: ['./list-su-kien.component.scss'],
})
export class ListSuKienComponent implements OnInit{

  // Ngon ngu hien thi //////////
  langCode: 'en' | 'vi' = localStorage.getItem('language') as 'en' | 'vi' ?? 'vi';
  langData: Record<string, string> = (localStorage.getItem('language') === 'en' ? langDataEn : langDataVi)
    .MNG.SU_KIEN;
  //////////////////////////////

  breadcrumbObj: BreadCrumb = new BreadCrumb({
    heading: this.langData.SU_KIEN,
    listBreadcrumb: [{
      title: this.langData.QUAN_TRI,
      link: UrlConstant.ROUTE.MANAGEMENT.BASE,
    }],
  });

  listSuKien = new Paginate<ISuKien>();
  modalData = new ModalData<ISuKien>();
  searchValue = '';
  selectedSwitcherId = '';

  constructor(
    private spinner: NgxSpinnerService,
    private alert: ToastrService,
    private nzModalSvc: NzModalService,
    private suKienSvc: SuKienService,
  ) { }

  ngOnInit(): void {
    this.getDataPaging();
  }

  getDataPaging(isSearch?: boolean): void {
    if (isSearch) {
      this.listSuKien.currentPage = 1;
    }
    this.spinner.show();
    this.suKienSvc.getAllPaging(
      this.listSuKien.currentPage - 1,
      this.listSuKien.limit,
      this.searchValue)
      .subscribe({
        next: res => {
          this.listSuKien.currentPage = res.pageable.pageNumber + 1;
          this.listSuKien.limit = res.pageable.pageSize;
          this.listSuKien.totalPage = res.totalPages;
          this.listSuKien.totalItem = res.totalElements;
          this.listSuKien.data = res.content;
        },
      });
  }

  trackByFn = (_index: number, data: ISuKien) => data.id;

  openModal(template: TemplateRef<unknown>, data?: ISuKien): void {
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

  pageChange(page: Paginate<ISuKien>): void {
    this.listSuKien = page;
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
        this.suKienSvc.delete(id)
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
