import { HttpEventType } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SystemConstant } from '@constants/system.constant';
import langDataEn from '@languages/en.json';
import langDataVi from '@languages/vi.json';
import { MakeForm } from '@models/common/make-form.model';
import { ModalData } from '@models/common/modal-data.model';
import { IBannerSlide, IBannerSlideDTO } from '@models/home-banner-slide/banner-slide.model';
import { UntilDestroy } from '@ngneat/until-destroy';
import { FileService } from '@services/common/file.service';
import { FormValidatorService } from '@services/common/form-validator.service';
import { BannerSlideService } from '@services/home-banner-slide/banner-slide.service';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@UntilDestroy()
@Component({
  selector: 'app-form-banner-slide',
  templateUrl: './form-banner-slide.component.html',
  styleUrls: ['./form-banner-slide.component.scss'],
})
export class FormBannerSlideComponent implements OnInit {

  @Input() thuTu = 1;
  @Input() modalData!: ModalData<IBannerSlide>;
  @Output() closeModal = new EventEmitter<boolean>();

  // Ngon ngu hien thi //////////
  langData: Record<string, string> = (localStorage.getItem('language') === 'en' ? langDataEn : langDataVi)
    .MNG.BANNER_SLIDE;
  //////////////////////////////

  form!: FormGroup<MakeForm<IBannerSlideDTO>>;

  modalRef!: NzModalRef;
  isChangedImage = false;
  bannerRatio = 1340 / 740;
  preBannerImg: Blob | null = null;

  isFieldValid = this.formValidatorSvc.isFieldValid;
  displayFieldCssZorro = this.formValidatorSvc.displayFieldCssZorro;

  constructor(
    private fb: FormBuilder,
    private bannerSlideSvc: BannerSlideService,
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
      hinhAnhId: ['', [Validators.required]],
    });
    if (this.modalData.action === SystemConstant.ACTION.EDIT) {
      this.form.patchValue({
        thuTu: this.modalData.data.thuTu,
        tieuDe: this.modalData.data.tieuDe,
        hinhAnhId: this.modalData.data.hinhAnhId,
      });
    }
  }

  onCancel(): void {
    this.closeModal.emit(false);
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
        const fileBanner = this.fileSvc.blobToFile(this.preBannerImg, `banner-home-${Date.now()}.jpg`);
        this.fileSvc.uploadFile(fileBanner, 'banner-home').subscribe({
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
      this.bannerSlideSvc.update(this.form.value, this.modalData.data.id)
        .subscribe({
          next: () => {
            this.closeModal.emit(true);
            this.alert.success(this.langData.CAP_NHAT_THANH_CONG);
          },
        });
    } else {
      this.bannerSlideSvc.create(this.form.value)
        .subscribe({
          next: () => {
            this.closeModal.emit(true);
            this.alert.success(this.langData.THEM_MOI_THANH_CONG);
          },
        });
    }
  }
}
