import { HttpEventType } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SystemConstant } from '@constants/system.constant';
import langDataEn from '@languages/en.json';
import langDataVi from '@languages/vi.json';
import { MakeForm } from '@models/common/make-form.model';
import { ModalData } from '@models/common/modal-data.model';
import { INckh, INckhDTO } from '@models/management/nckh.model';
import { FileService } from '@services/common/file.service';
import { FormValidatorService } from '@services/common/form-validator.service';
import { NckhService } from '@services/management/nckh.service.ts.service';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-form-nckh',
  templateUrl: './form-nckh.component.html',
  styleUrls: ['./form-nckh.component.scss'],
})
export class FormNckhComponent implements OnInit {
  @Input() thuTu = 1;
  @Input() modalData!: ModalData<INckh>;
  @Output() closeModal = new EventEmitter<boolean>();

  // Ngon ngu hien thi //////////
  langData: Record<string, string> = (localStorage.getItem('language') === 'en' ? langDataEn : langDataVi)
    .MNG.NGHIEN_CUU_KHOA_HOC;
  //////////////////////////////

  modalRef!: NzModalRef;
  bannerRatio = 885 / 590;
  preBannerImg: Blob | null = null;
  isChangedImage = false;

  form!: FormGroup<MakeForm<INckhDTO>>;

  isFieldValid = this.formValidatorSvc.isFieldValid;
  displayFieldCssZorro = this.formValidatorSvc.displayFieldCssZorro;

  constructor(
    private nckhSvc: NckhService,
    private fb: FormBuilder,
    private formValidatorSvc: FormValidatorService,
    private alert: ToastrService,
    private spinner: NgxSpinnerService,
    private nzModalSvc: NzModalService,
    private fileSvc: FileService,
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.form = this.fb.nonNullable.group({
      thuTu: [this.thuTu, [Validators.required]],
      tieuDe: ['', [Validators.required]],
      link: ['', [Validators.required]],
      hinhAnhId: ['', [Validators.required]],
    });
    if (this.modalData.action === SystemConstant.ACTION.EDIT) {
      this.form.patchValue({
        tieuDe: this.modalData.data.tieuDe,
        hinhAnhId: this.modalData.data.hinhAnhId,
        link: this.modalData.data.link,
        thuTu: this.modalData.data.thuTu,
      });
    }
  }

  onCancel(): void {
    this.closeModal.emit(false);
  }

  onSubmit(): void {
    console.log(this.form.value);
    this.form.get('hinhAnhId')?.setValidators(null);
    this.form.get('hinhAnhId')?.updateValueAndValidity();
    if (this.form.valid) {
      this.spinner.show();
      if (this.isChangedImage && this.preBannerImg) {
        const fileBanner = this.fileSvc.blobToFile(this.preBannerImg, `hinh-anh-${Date.now()}.jpg`);
        this.fileSvc.uploadFile(fileBanner, 'hinh-anh').subscribe({
          next: (uploadRes) => {
            if (uploadRes.type === HttpEventType.Response) {
              this.form.get('hinhAnhId')?.setValue(uploadRes.body?.id ?? '');
              this.callApi();
            }
          },
        });
      } else {
        this.callApi();
      }
    } else {
      this.form.get('hinhAnhId')?.setValidators([Validators.required]);
      this.form.get('hinhAnhId')?.updateValueAndValidity();
      this.formValidatorSvc.validateAllFormFields(this.form);
    }
  }

  callApi() {
    if (this.modalData.action === SystemConstant.ACTION.EDIT) {
      this.nckhSvc.update(this.form.value, this.modalData.data.id)
        .subscribe({
          next: () => {
            this.closeModal.emit(true);
            this.alert.success(this.langData.CAP_NHAT_THANH_CONG);
          },
        });
    } else {
      this.nckhSvc.create(this.form.value)
        .subscribe({
          next: () => {
            this.closeModal.emit(true);
            this.alert.success(this.langData.THEM_MOI_THANH_CONG);
          },
        });
    }
  }

  openCropImgModal(tpl: TemplateRef<unknown>) {
    this.modalRef = this.nzModalSvc.create({
      nzTitle: this.langData.CHUAN_HOA_HINH_ANH,
      nzContent: tpl,
      nzWidth: 700,
      nzFooter: null,
    });
  }

  closeCropImgModal(img: Blob | null) {
    if (img) {
      this.preBannerImg = img;
      this.isChangedImage = true;
    }
    this.modalRef.close();
  }
}
