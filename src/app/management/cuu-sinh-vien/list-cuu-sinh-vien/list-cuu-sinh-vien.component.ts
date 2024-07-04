import { Component, OnInit, TemplateRef } from '@angular/core';
import { SystemConstant } from '@constants/system.constant';
import { UrlConstant } from '@constants/url.constant';
import langDataEn from '@languages/en.json';
import langDataVi from '@languages/vi.json';
import { ModalData } from '@models/common/modal-data.model';
import { ICuuSinhVien } from '@models/management/cuu-sinh-vien.model';
import { UntilDestroy } from '@ngneat/until-destroy';
import { CuuSinhVienService } from '@services/management/cuu-sinh-vien.service';
import { BreadCrumb } from '@widget/breadcrumb/breadcrumb.model';
import { Paginate } from '@widget/paginate/paginate.model';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';


@UntilDestroy()
@Component({
  selector: 'app-list-cuu-sinh-vien',
  templateUrl: './list-cuu-sinh-vien.component.html',
  styleUrls: ['./list-cuu-sinh-vien.component.scss'],
})
export class ListCuuSinhVienComponent implements OnInit {
  // Ngon ngu hien thi //////////
  langCode: 'en' | 'vi' = localStorage.getItem('language') as 'en' | 'vi' ?? 'vi';
  langData: Record<string, string> = (localStorage.getItem('language') === 'en' ? langDataEn : langDataVi)
    .MNG.CUU_SINH_VIEN;
  //////////////////////////////

  breadcrumbObj: BreadCrumb = new BreadCrumb({
    heading: this.langData.CUU_SINH_VIEN,
    listBreadcrumb: [{
      title: this.langData.QUAN_TRI,
      link: UrlConstant.ROUTE.MANAGEMENT.BASE,
    }],
  });

  listCuuSinhVien = new Paginate<ICuuSinhVien>();
  modalData = new ModalData<ICuuSinhVien>();
  searchValue = '';
  selectedSwitcherId = '';

  constructor(
    private spinner: NgxSpinnerService,
    private alert: ToastrService,
    private nzModalSvc: NzModalService,
    private cuuSinhVienSvc: CuuSinhVienService,
  ) { }

  ngOnInit(): void {
    this.getDataPaging();
  }

  getDataPaging(isSearch?: boolean): void {
    if (isSearch) {
      this.listCuuSinhVien.currentPage = 1;
    }
    this.spinner.show();
    this.cuuSinhVienSvc.getAllPaging(
      this.listCuuSinhVien.currentPage - 1,
      this.listCuuSinhVien.limit,
      this.searchValue)
      .subscribe({
        next: res => {
          this.listCuuSinhVien.currentPage = res.pageable.pageNumber + 1;
          this.listCuuSinhVien.limit = res.pageable.pageSize;
          this.listCuuSinhVien.totalPage = res.totalPages;
          this.listCuuSinhVien.totalItem = res.totalElements;
          this.listCuuSinhVien.data = res.content;
        },
      });
  }

  trackByFn = (_index: number, data: ICuuSinhVien) => data.id;

  openModal(template: TemplateRef<unknown>, data?: ICuuSinhVien): void {
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

  pageChange(page: Paginate<ICuuSinhVien>): void {
    this.listCuuSinhVien = page;
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
        this.cuuSinhVienSvc.delete(id)
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
