import { HttpEventType } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SystemConstant } from '@constants/system.constant';
import langDataEn from '@languages/en.json';
import langDataVi from '@languages/vi.json';
import { MakeForm } from '@models/common/make-form.model';
import { ModalData } from '@models/common/modal-data.model';
import { ICuuSinhVien, ICuuSinhVienDTO } from '@models/management/cuu-sinh-vien.model';
import { UntilDestroy } from '@ngneat/until-destroy';
import { FileService } from '@services/common/file.service';
import { FormValidatorService } from '@services/common/form-validator.service';
import { CuuSinhVienService } from '@services/management/cuu-sinh-vien.service';

import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { timer } from 'rxjs';
import Editor from 'src/assets/libs/ckeditor5/build/ckeditor';

@UntilDestroy()
@Component({
  selector: 'app-form-cuu-sinh-vien',
  templateUrl: './form-cuu-sinh-vien.component.html',
  styleUrls: ['./form-cuu-sinh-vien.component.scss'],
})
export class FormCuuSinhVienComponent implements OnInit {
  @Input() modalData!: ModalData<ICuuSinhVien>;
  @Output() closeModal = new EventEmitter<boolean>();

  // Ngon ngu hien thi //////////
  langData: Record<string, string> = (localStorage.getItem('language') === 'en' ? langDataEn : langDataVi)
    .MNG.CUU_SINH_VIEN;
  //////////////////////////////

  showCke = false;
  editor = Editor;
  cfgEditor = SystemConstant.CkEditorCfg;
  modalRef!: NzModalRef;
  bannerRatio = 1340 / 740;
  preBannerImg: Blob | null = null;
  isChangedImage = false;

  form!: FormGroup<MakeForm<ICuuSinhVienDTO>>;

  isFieldValid = this.formValidatorSvc.isFieldValid;
  displayFieldCssZorro = this.formValidatorSvc.displayFieldCssZorro;

  constructor(
    private cuuSinhVienSvc: CuuSinhVienService,
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

  ngAfterViewInit(): void {
    timer(250).subscribe(() => this.showCke = true);
  }

  createForm(): void {
    this.form = this.fb.nonNullable.group({
      tieuDe: ['', [Validators.required]],
      url: ['', [Validators.required]],
      anhBiaId: ['', [Validators.required]],
      noiDung: ['', [Validators.required]],
    });
    if (this.modalData.action === SystemConstant.ACTION.EDIT) {
      this.form.patchValue({
        tieuDe: this.modalData.data.tieuDe,
        anhBiaId: this.modalData.data.anhBiaId,
        url: this.modalData.data.url,
        noiDung: this.modalData.data.noiDung,
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

    // Tạm thời turn off Validate cho field anhBiaId
    this.form.get('anhBiaId')?.setValidators(null);
    this.form.get('anhBiaId')?.updateValueAndValidity();
    // Nếu form valid thì đi tiếp
    if (this.form.valid) {
      this.spinner.show();
      // Upload preBannerImg nếu có đổi ảnh mới
      if (this.isChangedImage && this.preBannerImg) {
        const fileBanner = this.fileSvc.blobToFile(this.preBannerImg, `anh-bia-${Date.now()}.jpg`);
        this.fileSvc.uploadFile(fileBanner, 'anh-bia').subscribe({
          next: (uploadRes) => {
            if (uploadRes.type === HttpEventType.Response) {
              // Set ID banner vào form
              this.form.get('anhBiaId')?.setValue(uploadRes.body?.id ?? '');
              // Call api
              this.callApi();
            }
          },
        });
      } else {
        this.callApi();
      }
    } else {
      // Nếu form invalid thì turn on Validate cho field anhBiaId và validateAllFormFields
      this.form.get('anhBiaId')?.setValidators([Validators.required]);
      this.form.get('anhBiaId')?.updateValueAndValidity();
      this.formValidatorSvc.validateAllFormFields(this.form);
    }
  }

  callApi() {
    if (this.modalData.action === SystemConstant.ACTION.EDIT) {
      this.cuuSinhVienSvc.update(this.form.value, this.modalData.data.id)
        .subscribe({
          next: () => {
            this.closeModal.emit(true);
            this.alert.success(this.langData.CAP_NHAT_THANH_CONG);
          },
        });
    } else {
      this.cuuSinhVienSvc.create(this.form.value)
        .subscribe({
          next: () => {
            this.closeModal.emit(true);
            this.alert.success(this.langData.THEM_MOI_THANH_CONG);
          },
        });
    }
  }
}
