import { Component, OnInit, TemplateRef } from '@angular/core';
import { SystemConstant } from '@constants/system.constant';
import { UrlConstant } from '@constants/url.constant';
import langDataEn from '@languages/en.json';
import langDataVi from '@languages/vi.json';
import { ModalData } from '@models/common/modal-data.model';
import { ILoaiThongBao } from '@models/management/loai-thong-bao.model';
import { LoaiThongBaoService } from '@services/management/loai-thong-bao.service';
import { BreadCrumb } from '@widget/breadcrumb/breadcrumb.model';
import { Paginate } from '@widget/paginate/paginate.model';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-list-loai-thong-bao',
  templateUrl: './list-loai-thong-bao.component.html',
  styleUrls: ['./list-loai-thong-bao.component.scss'],
})
export class ListLoaiThongBaoComponent implements OnInit {
  // Ngon ngu hien thi //////////
  langCode: 'en' | 'vi' = localStorage.getItem('language') as 'en' | 'vi' ?? 'vi';
  langData: Record<string, string> = (localStorage.getItem('language') === 'en' ? langDataEn : langDataVi)
    .MNG.LOAI_THONG_BAO;
  //////////////////////////////

  breadcrumbObj: BreadCrumb = new BreadCrumb({
    heading: this.langData.LOAI_THONG_BAO,
    listBreadcrumb: [{
      title: this.langData.QUAN_TRI,
      link: UrlConstant.ROUTE.MANAGEMENT.BASE,
    }],
  });

  listLoaiThongBao = new Paginate<ILoaiThongBao>();
  modalData = new ModalData<ILoaiThongBao>();
  searchValue = '';
  selectedSwitcherId = '';

  constructor(
    private spinner: NgxSpinnerService,
    private alert: ToastrService,
    private nzModalSvc: NzModalService,
    private loaiThongBaoSvc: LoaiThongBaoService,
  ) { }

  ngOnInit(): void {
    this.getDataPaging();
  }

  getDataPaging(isSearch?: boolean): void {
    if (isSearch) {
      this.listLoaiThongBao.currentPage = 1;
    }
    this.spinner.show();
    this.loaiThongBaoSvc.getAllPaging(
      this.listLoaiThongBao.currentPage - 1,
      this.listLoaiThongBao.limit,
      this.searchValue)
      .subscribe({
        next: res => {
          this.listLoaiThongBao.currentPage = res.pageable.pageNumber + 1;
          this.listLoaiThongBao.limit = res.pageable.pageSize;
          this.listLoaiThongBao.totalPage = res.totalPages;
          this.listLoaiThongBao.totalItem = res.totalElements;
          this.listLoaiThongBao.data = res.content;
        },
      });
  }

  trackByFn = (_index: number, data: ILoaiThongBao) => data.idLoaiThongBao;

  openModal(template: TemplateRef<unknown>, data?: ILoaiThongBao): void {
    if (data) {
      this.modalData.action = SystemConstant.ACTION.EDIT;
      this.modalData.data = data;
    } else {
      this.modalData.action = SystemConstant.ACTION.ADD;
    }
    this.nzModalSvc.create({
      nzStyle: { top: '20px' },
      nzWidth: 500,
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

  pageChange(page: Paginate<ILoaiThongBao>): void {
    this.listLoaiThongBao = page;
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
        this.loaiThongBaoSvc.delete(id)
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
