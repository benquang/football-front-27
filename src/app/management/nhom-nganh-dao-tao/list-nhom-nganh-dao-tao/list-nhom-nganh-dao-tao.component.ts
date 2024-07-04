import { Component, OnInit, TemplateRef } from '@angular/core';
import { SystemConstant } from '@constants/system.constant';
import { UrlConstant } from '@constants/url.constant';
import langDataEn from '@languages/en.json';
import langDataVi from '@languages/vi.json';
import { ModalData } from '@models/common/modal-data.model';
import { INhomNganhDaoTao } from '@models/management/nhom-nganh-dao-tao.model';
import { UntilDestroy } from '@ngneat/until-destroy';
import { NhomNganhDaoTaoService } from '@services/management/nhom-nganh-dao-tao.service';
import { BreadCrumb } from '@widget/breadcrumb/breadcrumb.model';
import { Paginate } from '@widget/paginate/paginate.model';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@UntilDestroy()
@Component({
  selector: 'app-list-nhom-nganh-dao-tao',
  templateUrl: './list-nhom-nganh-dao-tao.component.html',
  styleUrls: ['./list-nhom-nganh-dao-tao.component.scss'],
})
export class ListNhomNganhDaoTaoComponent implements OnInit {

  // Ngon ngu hien thi //////////
  langCode: 'en' | 'vi' = localStorage.getItem('language') as 'en' | 'vi' ?? 'vi';
  langData: Record<string, string> = (localStorage.getItem('language') === 'en' ? langDataEn : langDataVi)
    .MNG.NHOM_NGANH_DAO_TAO;
  //////////////////////////////

  breadcrumbObj: BreadCrumb = new BreadCrumb({
    heading: this.langData.NHOM_NGANH_DAO_TAO,
    listBreadcrumb: [{
      title: this.langData.QUAN_TRI,
      link: UrlConstant.ROUTE.MANAGEMENT.BASE,
    }],
  });

  listNhomNganhDaoTao = new Paginate<INhomNganhDaoTao>();
  modalData = new ModalData<INhomNganhDaoTao>();
  searchValue = '';
  selectedSwitcherId = '';
  selectedFileIdForView = '';
  viewModalRef!: NzModalRef;


  constructor(
    private spinner: NgxSpinnerService,
    private alert: ToastrService,
    private nzModalSvc: NzModalService,
    private NhomNganhDaoTaoSvc: NhomNganhDaoTaoService,
  ) { }

  ngOnInit(): void {
    this.getDataPaging();
  }

  getDataPaging(isSearch?: boolean): void {
    if (isSearch) {
      this.listNhomNganhDaoTao.currentPage = 1;
    }
    this.spinner.show();
    this.NhomNganhDaoTaoSvc.getAllPaging(
      this.listNhomNganhDaoTao.currentPage - 1,
      this.listNhomNganhDaoTao.limit,
      this.searchValue)
      .subscribe({
        next: res => {
          this.listNhomNganhDaoTao.currentPage = res.pageable.pageNumber + 1;
          this.listNhomNganhDaoTao.limit = res.pageable.pageSize;
          this.listNhomNganhDaoTao.totalPage = res.totalPages;
          this.listNhomNganhDaoTao.totalItem = res.totalElements;
          this.listNhomNganhDaoTao.data = res.content;
        },
      });
  }

  trackByFn = (_index: number, data: INhomNganhDaoTao) => data.id;

  openModal(template: TemplateRef<unknown>, data?: INhomNganhDaoTao): void {
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

  pageChange(page: Paginate<INhomNganhDaoTao>): void {
    this.listNhomNganhDaoTao = page;
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
        this.NhomNganhDaoTaoSvc.delete(id)
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
