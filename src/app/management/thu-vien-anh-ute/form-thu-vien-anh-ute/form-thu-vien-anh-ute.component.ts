import { HttpEventType } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SystemConstant } from '@constants/system.constant';
import langDataEn from '@languages/en.json';
import langDataVi from '@languages/vi.json';
import { MakeForm } from '@models/common/make-form.model';
import { ModalData } from '@models/common/modal-data.model';
import { IThuVienAnhUte, IThuVienAnhUteDTO } from '@models/management/thu-vien-anh-ute.model';
import { UntilDestroy } from '@ngneat/until-destroy';
import { FileService } from '@services/common/file.service';
import { FormValidatorService } from '@services/common/form-validator.service';
import { ThuVienAnhUteService } from '@services/management/thu-vien-anh-ute.service';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@UntilDestroy()
@Component({
  selector: 'app-form-thu-vien-anh-ute',
  templateUrl: './form-thu-vien-anh-ute.component.html',
  styleUrls: ['./form-thu-vien-anh-ute.component.scss'],
})
export class FormThuVienAnhUteComponent implements OnInit {

  @Input() thuTu = 1;
  @Input() modalData!: ModalData<IThuVienAnhUte>;
  @Output() closeModal = new EventEmitter<boolean>();

  // Ngon ngu hien thi //////////
  langData: Record<string, string> = (localStorage.getItem('language') === 'en' ? langDataEn : langDataVi)
    .MNG.THU_VIEN_ANH;
  //////////////////////////////

  form!: FormGroup<MakeForm<IThuVienAnhUteDTO>>;

  modalRef!: NzModalRef;
  isChangedImage = false;
  bannerRatio = 1340 / 740;
  preBannerImg: Blob | null = null;

  isFieldValid = this.formValidatorSvc.isFieldValid;
  displayFieldCssZorro = this.formValidatorSvc.displayFieldCssZorro;

  constructor(
    private fb: FormBuilder,
    private thuVienAnhUteSvc: ThuVienAnhUteService,
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
      hinhAnhId: ['', [Validators.required]],
    });
    if (this.modalData.action === SystemConstant.ACTION.EDIT) {
      this.form.patchValue({
        thuTu: this.modalData.data.thuTu,
        hinhAnhId: this.modalData.data.hinhAnhId,
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

  onCancel(): void {
    this.closeModal.emit(false);
  }

  onSubmit(): void {
    console.log(this.form.value);

    // Tạm thời turn off Validate cho field hinhAnhId
    this.form.get('hinhAnhId')?.setValidators(null);
    this.form.get('hinhAnhId')?.updateValueAndValidity();
    // Nếu form valid thì đi tiếp
    if (this.form.valid) {
      // Upload preBannerImg nếu có đổi ảnh mới
      if (this.isChangedImage && this.preBannerImg) {
        this.spinner.show();
        const fileBanner = this.fileSvc.blobToFile(this.preBannerImg, `gallery-home-${Date.now()}.jpg`);
        this.fileSvc.uploadFile(fileBanner, 'gallery-home').subscribe({
          next: (uploadRes) => {
            if (uploadRes.type === HttpEventType.Response) {
              // Set ID banner vào form
              this.form.get('hinhAnhId')?.setValue(uploadRes.body?.id ?? '');
              // Call api
              this.callApi();
            }
          },
        });
      } else {
        this.callApi();
      }
    } else {
      // Nếu form invalid thì turn on Validate cho field hinhAnhId và validateAllFormFields
      this.form.get('hinhAnhId')?.setValidators([Validators.required]);
      this.form.get('hinhAnhId')?.updateValueAndValidity();
      this.formValidatorSvc.validateAllFormFields(this.form);
    }
  }

  callApi() {
    if (this.modalData.action === SystemConstant.ACTION.EDIT) {
      this.thuVienAnhUteSvc.update(this.form.value, this.modalData.data.id)
        .subscribe({
          next: () => {
            this.closeModal.emit(true);
            this.alert.success(this.langData.CAP_NHAT_THANH_CONG);
          },
        });
    } else {
      this.thuVienAnhUteSvc.create(this.form.value)
        .subscribe({
          next: () => {
            this.closeModal.emit(true);
            this.alert.success(this.langData.THEM_MOI_THANH_CONG);
          },
        });
    }
  }

}
