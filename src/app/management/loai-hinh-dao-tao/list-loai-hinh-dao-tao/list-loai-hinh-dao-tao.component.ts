import { Component, OnInit, TemplateRef } from '@angular/core';
import { SystemConstant } from '@constants/system.constant';
import { UrlConstant } from '@constants/url.constant';
import langDataEn from '@languages/en.json';
import langDataVi from '@languages/vi.json';
import { ModalData } from '@models/common/modal-data.model';
import { ILoaiHinhDaoTao } from '@models/management/loai-hinh-dao-tao.model';
import { UntilDestroy } from '@ngneat/until-destroy';
import { LoaiHinhDaoTaoService } from '@services/management/loai-hinh-dao-tao.service';
import { BreadCrumb } from '@widget/breadcrumb/breadcrumb.model';
import { Paginate } from '@widget/paginate/paginate.model';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@UntilDestroy()
@Component({
  selector: 'app-list-loai-hinh-dao-tao',
  templateUrl: './list-loai-hinh-dao-tao.component.html',
  styleUrls: ['./list-loai-hinh-dao-tao.component.scss'],
})
export class ListLoaiHinhDaoTaoComponent implements OnInit {
  // Ngon ngu hien thi //////////
  langCode: 'en' | 'vi' = localStorage.getItem('language') as 'en' | 'vi' ?? 'vi';
  langData: Record<string, string> = (localStorage.getItem('language') === 'en' ? langDataEn : langDataVi)
    .MNG.LOAI_HINH_DAO_TAO;
  //////////////////////////////

  breadcrumbObj: BreadCrumb = new BreadCrumb({
    heading: this.langData.LOAI_HINH_DAO_TAO,
    listBreadcrumb: [{
      title: this.langData.QUAN_TRI,
      link: UrlConstant.ROUTE.MANAGEMENT.BASE,
    }],
  });

  listLoaiHinhDaoTao = new Paginate<ILoaiHinhDaoTao>();
  modalData = new ModalData<ILoaiHinhDaoTao>();
  searchValue = '';
  selectedSwitcherId = '';

  constructor(
    private spinner: NgxSpinnerService,
    private alert: ToastrService,
    private nzModalSvc: NzModalService,
    private loaiHinhDaoTaoSvc: LoaiHinhDaoTaoService,
  ) { }

  ngOnInit(): void {
    this.getDataPaging();
  }

  getDataPaging(isSearch?: boolean): void {
    if (isSearch) {
      this.listLoaiHinhDaoTao.currentPage = 1;
    }
    this.spinner.show();
    this.loaiHinhDaoTaoSvc.getAllPaging(
      this.listLoaiHinhDaoTao.currentPage - 1,
      this.listLoaiHinhDaoTao.limit,
      this.searchValue)
      .subscribe({
        next: res => {
          this.listLoaiHinhDaoTao.currentPage = res.pageable.pageNumber + 1;
          this.listLoaiHinhDaoTao.limit = res.pageable.pageSize;
          this.listLoaiHinhDaoTao.totalPage = res.totalPages;
          this.listLoaiHinhDaoTao.totalItem = res.totalElements;
          this.listLoaiHinhDaoTao.data = res.content;
        },
      });
  }

  trackByFn = (_index: number, data: ILoaiHinhDaoTao) => data.id;

  openModal(template: TemplateRef<unknown>, data?: ILoaiHinhDaoTao): void {
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

  pageChange(page: Paginate<ILoaiHinhDaoTao>): void {
    this.listLoaiHinhDaoTao = page;
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
        this.loaiHinhDaoTaoSvc.delete(id)
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
