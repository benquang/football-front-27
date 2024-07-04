import { Component, OnInit, TemplateRef } from '@angular/core';
import { SystemConstant } from '@constants/system.constant';
import { UrlConstant } from '@constants/url.constant';
import langDataEn from '@languages/en.json';
import langDataVi from '@languages/vi.json';
import { ModalData } from '@models/common/modal-data.model';
import { IBieuDoGiangDay } from '@models/management/bieu-do-giang-day.model';
import { UntilDestroy } from '@ngneat/until-destroy';
import { BieuDoGiangDayService } from '@services/management/bieu-do-giang-day.service';
import { BreadCrumb } from '@widget/breadcrumb/breadcrumb.model';
import { Paginate } from '@widget/paginate/paginate.model';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@UntilDestroy()
@Component({
  selector: 'app-list-bieu-do-giang-day',
  templateUrl: './list-bieu-do-giang-day.component.html',
  styleUrls: ['./list-bieu-do-giang-day.component.scss'],
})
export class ListBieuDoGiangDayComponent implements OnInit {

  // Ngon ngu hien thi //////////
  langCode: 'en' | 'vi' = localStorage.getItem('language') as 'en' | 'vi' ?? 'vi';
  langData: Record<string, string> = (localStorage.getItem('language') === 'en' ? langDataEn : langDataVi)
    .MNG.BIEU_DO_GIANG_DAY;
  //////////////////////////////

  breadcrumbObj: BreadCrumb = new BreadCrumb({
    heading: this.langData.BIEU_DO_GIANG_DAY,
    listBreadcrumb: [{
      title: this.langData.QUAN_TRI,
      link: UrlConstant.ROUTE.MANAGEMENT.BASE,
    }],
  });

  listBieuDoGiangDay = new Paginate<IBieuDoGiangDay>();
  modalData = new ModalData<IBieuDoGiangDay>();
  searchValue = '';
  selectedSwitcherId = '';
  selectedFileIdForView = '';
  viewModalRef!: NzModalRef;


  constructor(
    private spinner: NgxSpinnerService,
    private alert: ToastrService,
    private nzModalSvc: NzModalService,
    private bieuDoGiangDaySvc: BieuDoGiangDayService,
  ) { }

  ngOnInit(): void {
    this.getDataPaging();
  }

  getDataPaging(isSearch?: boolean): void {
    if (isSearch) {
      this.listBieuDoGiangDay.currentPage = 1;
    }
    this.spinner.show();
    this.bieuDoGiangDaySvc.getAllPaging(
      this.listBieuDoGiangDay.currentPage - 1,
      this.listBieuDoGiangDay.limit,
      this.searchValue)
      .subscribe({
        next: res => {
          this.listBieuDoGiangDay.currentPage = res.pageable.pageNumber + 1;
          this.listBieuDoGiangDay.limit = res.pageable.pageSize;
          this.listBieuDoGiangDay.totalPage = res.totalPages;
          this.listBieuDoGiangDay.totalItem = res.totalElements;
          this.listBieuDoGiangDay.data = res.content;
        },
      });
  }

  trackByFn = (_index: number, data: IBieuDoGiangDay) => data.id;

  openModal(template: TemplateRef<unknown>, data?: IBieuDoGiangDay): void {
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

  openModalViewFile(template: TemplateRef<unknown>, fileId: string | undefined): void {
    if (!fileId) {
      return;
    }
    this.selectedFileIdForView = fileId;
    this.viewModalRef = this.nzModalSvc.create({
      nzStyle: { top: '20px', width: '100%', maxWidth: '80vw' },
      nzTitle: undefined,
      nzMaskClosable: false,
      nzContent: template,
      nzOnOk: () => this.viewModalRef.close(),
      nzCancelText: null,
    });
  }

  hideModalViewFile(): void {
    this.viewModalRef.close();
  }

  closeModal(reload?: boolean): void {
    if (reload) {
      this.getDataPaging();
    }
    this.nzModalSvc.closeAll();
  }

  pageChange(page: Paginate<IBieuDoGiangDay>): void {
    this.listBieuDoGiangDay = page;
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
        this.bieuDoGiangDaySvc.delete(id)
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
