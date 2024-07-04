import { HttpEventType } from '@angular/common/http';
import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SystemConstant } from '@constants/system.constant';
import langDataEn from '@languages/en.json';
import langDataVi from '@languages/vi.json';
import { MakeForm } from '@models/common/make-form.model';
import { ModalData } from '@models/common/modal-data.model';
import { ITaiSaoChonUte, ITaiSaoChonUteDTO } from '@models/tai-sao-chon-ute/tai-sao-chon-ute';
import { UntilDestroy } from '@ngneat/until-destroy';
import { FileService } from '@services/common/file.service';
import { FormValidatorService } from '@services/common/form-validator.service';
import { TaiSaoChonUteService } from '@services/tai-sao-chon-ute/tai-sao-chon-ute.service';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { timer } from 'rxjs';
import Editor from 'src/assets/libs/ckeditor5/build/ckeditor';

@UntilDestroy()
@Component({
  selector: 'app-form-tscute',
  templateUrl: './form-tscute.component.html',
  styleUrls: ['./form-tscute.component.scss'],
})
export class FormTscuteComponent implements OnInit, AfterViewInit {

  @Input() thuTu = 1;
  @Input() modalData!: ModalData<ITaiSaoChonUte>;
  @Output() closeModal = new EventEmitter<boolean>();

  // Ngon ngu hien thi //////////
  langData: Record<string, string> = (localStorage.getItem('language') === 'en' ? langDataEn : langDataVi)
    .MNG.TSCUTE;
  //////////////////////////////

  form!: FormGroup<MakeForm<ITaiSaoChonUteDTO>>;

  showCke = false;
  editor = Editor;
  cfgEditor = SystemConstant.CkEditorCfg;
  modalRef!: NzModalRef;
  isChangedImage = false;
  bannerRatio = 1340 / 740;
  preBannerImg: Blob | null = null;

  isFieldValid = this.formValidatorSvc.isFieldValid;
  displayFieldCssZorro = this.formValidatorSvc.displayFieldCssZorro;

  constructor(
    private fb: FormBuilder,
    private taiSaoChonUteSvc: TaiSaoChonUteService,
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
      anhBiaId: ['', [Validators.required]],
      noiDung: ['', [Validators.required]],
      thuTu: [this.thuTu, [Validators.required]],
    });
    if (this.modalData.action === SystemConstant.ACTION.EDIT) {
      this.form.patchValue({
        tieuDe: this.modalData.data.tieuDe,
        anhBiaId: this.modalData.data.anhBiaId,
        noiDung: this.modalData.data.noiDung,
        thuTu: this.modalData.data.thuTu,
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
    this.form.get('anhBiaId')?.setValidators(null);
    this.form.get('anhBiaId')?.updateValueAndValidity();
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
      // Nếu form invalid thì turn on Validate cho field hinhAnhId và validateAllFormFields
      this.form.get('hinhAnhId')?.setValidators([Validators.required]);
      this.form.get('hinhAnhId')?.updateValueAndValidity();
      this.formValidatorSvc.validateAllFormFields(this.form);
    }
  }

  callApi() {
    if (this.modalData.action === SystemConstant.ACTION.EDIT) {
      this.taiSaoChonUteSvc.update(this.form.value, this.modalData.data.id)
        .subscribe({
          next: () => {
            this.closeModal.emit(true);
            this.alert.success(this.langData.CAP_NHAT_THANH_CONG);
          },
        });
    } else {
      this.taiSaoChonUteSvc.create(this.form.value)
        .subscribe({
          next: () => {
            this.closeModal.emit(true);
            this.alert.success(this.langData.THEM_MOI_THANH_CONG);
          },
        });
    }
  }
}
