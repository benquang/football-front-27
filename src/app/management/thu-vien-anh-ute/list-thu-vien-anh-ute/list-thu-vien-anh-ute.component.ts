import { Component, OnInit, TemplateRef } from '@angular/core';
import { SystemConstant } from '@constants/system.constant';
import { UrlConstant } from '@constants/url.constant';
import langDataEn from '@languages/en.json';
import langDataVi from '@languages/vi.json';
import { ModalData } from '@models/common/modal-data.model';
import { IThuVienAnhUte } from '@models/management/thu-vien-anh-ute.model';
import { UntilDestroy } from '@ngneat/until-destroy';
import { ThuVienAnhUteService } from '@services/management/thu-vien-anh-ute.service';
import { BreadCrumb } from '@widget/breadcrumb/breadcrumb.model';
import { Paginate } from '@widget/paginate/paginate.model';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@UntilDestroy()
@Component({
  selector: 'app-list-thu-vien-anh-ute',
  templateUrl: './list-thu-vien-anh-ute.component.html',
  styleUrls: ['./list-thu-vien-anh-ute.component.scss'],
})
export class ListThuVienAnhUteComponent implements OnInit {

  // Ngon ngu hien thi //////////
  langCode: 'en' | 'vi' = localStorage.getItem('language') as 'en' | 'vi' ?? 'vi';
  langData: Record<string, string> = (localStorage.getItem('language') === 'en' ? langDataEn : langDataVi)
    .MNG.THU_VIEN_ANH;
  //////////////////////////////

  breadcrumbObj: BreadCrumb = new BreadCrumb({
    heading: this.langData.THU_VIEN_ANH,
    listBreadcrumb: [{
      title: this.langData.QUAN_TRI,
      link: UrlConstant.ROUTE.MANAGEMENT.BASE,
    }],
  });

  listThuVienAnhUte = new Paginate<IThuVienAnhUte>();
  modalData = new ModalData<IThuVienAnhUte>();
  searchValue = '';
  selectedSwitcherId = '';

  constructor(
    private spinner: NgxSpinnerService,
    private alert: ToastrService,
    private nzModalSvc: NzModalService,
    private thuVienAnhUteSvc: ThuVienAnhUteService,
  ) { }

  ngOnInit(): void {
    this.getDataPaging();
  }

  getDataPaging(isSearch?: boolean): void {
    if (isSearch) {
      this.listThuVienAnhUte.currentPage = 1;
    }
    this.spinner.show();
    this.thuVienAnhUteSvc.getAllPaging(
      this.listThuVienAnhUte.currentPage - 1,
      this.listThuVienAnhUte.limit,
      this.searchValue)
      .subscribe({
        next: res => {
          this.listThuVienAnhUte.currentPage = res.pageable.pageNumber + 1;
          this.listThuVienAnhUte.limit = res.pageable.pageSize;
          this.listThuVienAnhUte.totalPage = res.totalPages;
          this.listThuVienAnhUte.totalItem = res.totalElements;
          this.listThuVienAnhUte.data = res.content;
        },
      });
  }

  trackByFn = (_index: number, data: IThuVienAnhUte) => data.id;

  openModal(template: TemplateRef<unknown>, data?: IThuVienAnhUte): void {
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

  pageChange(page: Paginate<IThuVienAnhUte>): void {
    this.listThuVienAnhUte = page;
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
        this.thuVienAnhUteSvc.delete(id)
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
