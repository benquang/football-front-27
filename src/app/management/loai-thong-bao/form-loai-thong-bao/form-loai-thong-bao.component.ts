import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SystemConstant } from '@constants/system.constant';
import langDataEn from '@languages/en.json';
import langDataVi from '@languages/vi.json';
import { MakeForm } from '@models/common/make-form.model';
import { ModalData } from '@models/common/modal-data.model';
import { ILoaiThongBao, ILoaiThongBaoDTO } from '@models/management/loai-thong-bao.model';
import { FormValidatorService } from '@services/common/form-validator.service';
import { LoaiThongBaoService } from '@services/management/loai-thong-bao.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-form-loai-thong-bao',
  templateUrl: './form-loai-thong-bao.component.html',
  styleUrls: ['./form-loai-thong-bao.component.scss'],
})
export class FormLoaiThongBaoComponent implements OnInit {
  @Input() modalData!: ModalData<ILoaiThongBao>;
  @Output() closeModal = new EventEmitter<boolean>();

  // Ngon ngu hien thi //////////
  langData: Record<string, string> = (localStorage.getItem('language') === 'en' ? langDataEn : langDataVi)
    .MNG.LOAI_THONG_BAO;
  //////////////////////////////

  form!: FormGroup<MakeForm<ILoaiThongBaoDTO>>;

  isFieldValid = this.formValidatorSvc.isFieldValid;
  displayFieldCssZorro = this.formValidatorSvc.displayFieldCssZorro;

  constructor(
    private fb: FormBuilder,
    private loaiThongBaoSvc: LoaiThongBaoService,
    private formValidatorSvc: FormValidatorService,
    private alert: ToastrService,
    private spinner: NgxSpinnerService,
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.form = this.fb.nonNullable.group({
      tenLoaiThongBao: ['', [Validators.required]],
    });
    if (this.modalData.action === SystemConstant.ACTION.EDIT) {
      this.form.patchValue({
        tenLoaiThongBao: this.modalData.data.tenLoaiThongBao,
      });
    }
  }

  onCancel(): void {
    this.closeModal.emit(false);
  }

  onSubmit(): void {
    console.log(this.form.value);
    if (this.form.valid) {
      this.spinner.show();
      if (this.modalData.action === SystemConstant.ACTION.EDIT) {
        this.loaiThongBaoSvc.update(this.form.value, this.modalData.data.idLoaiThongBao)
          .subscribe({
            next: () => {
              this.closeModal.emit(true);
              this.alert.success(this.langData.CAP_NHAT_THANH_CONG);
            },
          });
      } else {
        this.loaiThongBaoSvc.create(this.form.value)
          .subscribe({
            next: () => {
              this.closeModal.emit(true);
              this.alert.success(this.langData.THEM_MOI_THANH_CONG);
            },
          });
      }
    } else {
      this.formValidatorSvc.validateAllFormFields(this.form);
    }
  }
}
