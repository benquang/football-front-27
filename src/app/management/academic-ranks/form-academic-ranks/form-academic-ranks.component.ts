import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SystemConstant } from '@constants/system.constant';
import langDataEn from '@languages/en.json';
import langDataVi from '@languages/vi.json';
import { MakeForm } from '@models/common/make-form.model';
import { ModalData } from '@models/common/modal-data.model';
import { UntilDestroy } from '@ngneat/until-destroy';
import { FormValidatorService } from '@services/common/form-validator.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { IAcademicRanks, IAcademicRanksDTO } from '../DEMO-academic.model';
import { AcademicRanksService } from '../DEMO-academic.service';

@UntilDestroy()
@Component({
  selector: 'app-form-academic-ranks',
  templateUrl: './form-academic-ranks.component.html',
  styleUrls: ['./form-academic-ranks.component.scss'],
})
export class FormAcademicRanksComponent implements OnInit {

  @Input() modalData!: ModalData<IAcademicRanks>;
  @Output() closeModal = new EventEmitter<boolean>();

  // Ngon ngu hien thi //////////
  langData: Record<string, string> = (localStorage.getItem('language') === 'en' ? langDataEn : langDataVi)
    .MNG.CATEGORIES.ACADEMIC_RANKS;
  //////////////////////////////

  form!: FormGroup<MakeForm<IAcademicRanksDTO>>;

  isFieldValid = this.formValidatorSvc.isFieldValid;
  displayFieldCssZorro = this.formValidatorSvc.displayFieldCssZorro;

  constructor(
    private fb: FormBuilder,
    private academicRanksSvc: AcademicRanksService,
    private formValidatorSvc: FormValidatorService,
    private alert: ToastrService,
    private spinner: NgxSpinnerService,
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.form = this.fb.nonNullable.group({
      academicRankName: ['', [Validators.required]],
      academicRankNameEn: ['', [Validators.required]],
      academicRankAbbreviation: ['', [Validators.required]],
      academicRankAbbreviationEn: ['', [Validators.required]],
    });
    if (this.modalData.action === SystemConstant.ACTION.EDIT) {
      this.form.patchValue({
        academicRankName: this.modalData.data.academicRankName,
        academicRankNameEn: this.modalData.data.academicRankNameEn,
        academicRankAbbreviation: this.modalData.data.academicRankAbbreviation,
        academicRankAbbreviationEn: this.modalData.data.academicRankAbbreviationEn,
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
        this.academicRanksSvc.update(this.form.value, this.modalData.data.id)
          .subscribe({
            next: () => {
              this.closeModal.emit(true);
              this.alert.success(this.langData.CAP_NHAT_THANH_CONG);
            },
          });
      } else {
        this.academicRanksSvc.create(this.form.value)
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
