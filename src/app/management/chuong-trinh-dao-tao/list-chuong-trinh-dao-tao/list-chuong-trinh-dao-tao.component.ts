import { Component, OnInit, TemplateRef } from '@angular/core';
import { SystemConstant } from '@constants/system.constant';
import { UrlConstant } from '@constants/url.constant';
import langDataEn from '@languages/en.json';
import langDataVi from '@languages/vi.json';
import { ModalData } from '@models/common/modal-data.model';
import { IChuongTrinhDaoTao } from '@models/management/chuong-trinh-dao-tao.model';
import { UntilDestroy } from '@ngneat/until-destroy';
import { ChuongTrinhDaoTaoService } from '@services/management/chuong-trinh-dao-tao.service';
import { BreadCrumb } from '@widget/breadcrumb/breadcrumb.model';
import { Paginate } from '@widget/paginate/paginate.model';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@UntilDestroy()
@Component({
  selector: 'app-list-chuong-trinh-dao-tao',
  templateUrl: './list-chuong-trinh-dao-tao.component.html',
  styleUrls: ['./list-chuong-trinh-dao-tao.component.scss'],
})
export class ListChuongTrinhDaoTaoComponent implements OnInit{
  // Ngon ngu hien thi //////////
  langCode: 'en' | 'vi' = localStorage.getItem('language') as 'en' | 'vi' ?? 'vi';
  langData: Record<string, string> = (localStorage.getItem('language') === 'en' ? langDataEn : langDataVi)
    .MNG.CHUONG_TRINH_DAO_TAO;
  //////////////////////////////

  breadcrumbObj: BreadCrumb = new BreadCrumb({
    heading: this.langData.CHUONG_TRINH_DAO_TAO,
    listBreadcrumb: [{
      title: this.langData.QUAN_TRI,
      link: UrlConstant.ROUTE.MANAGEMENT.BASE,
    }],
  });

  listChuongTrinhDaoTao = new Paginate<IChuongTrinhDaoTao>();
  modalData = new ModalData<IChuongTrinhDaoTao>();
  searchValue = '';
  selectedSwitcherId = '';

  constructor(
    private spinner: NgxSpinnerService,
    private alert: ToastrService,
    private nzModalSvc: NzModalService,
    private chuongTrinhDaoTaoSvc: ChuongTrinhDaoTaoService,
  ) { }

  ngOnInit(): void {
    // this.createForm();
  }

  getDataPaging(isSearch?: boolean): void {
    if (isSearch) {
      this.listChuongTrinhDaoTao.currentPage = 1;
    }
    this.spinner.show();
    this.chuongTrinhDaoTaoSvc.getAllPaging(
      this.listChuongTrinhDaoTao.currentPage - 1,
      this.listChuongTrinhDaoTao.limit,
      this.searchValue)
      .subscribe({
        next: res => {
          this.listChuongTrinhDaoTao.currentPage = res.pageable.pageNumber + 1;
          this.listChuongTrinhDaoTao.limit = res.pageable.pageSize;
          this.listChuongTrinhDaoTao.totalPage = res.totalPages;
          this.listChuongTrinhDaoTao.totalItem = res.totalElements;
          this.listChuongTrinhDaoTao.data = res.content;
        },
      });
  }

  trackByFn = (_index: number, data: IChuongTrinhDaoTao) => data.id;

  openModal(template: TemplateRef<unknown>, data?: IChuongTrinhDaoTao): void {
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

  pageChange(page: Paginate<IChuongTrinhDaoTao>): void {
    this.listChuongTrinhDaoTao = page;
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
        this.chuongTrinhDaoTaoSvc.delete(id)
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
