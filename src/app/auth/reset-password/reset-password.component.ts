import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemConstant } from '@constants/system.constant';
import { UrlConstant } from '@constants/url.constant';
import langDataEn from '@languages/en.json';
import langDataVi from '@languages/vi.json';
import { IResetPasswordDTO } from '@models/auth/auth.model';
import { MakeForm } from '@models/common/make-form.model';
import { AuthService } from '@services/auth/auth.service';
import { FormValidatorService } from '@services/common/form-validator.service';
import { mustMatch } from '@validators/must-match.validator';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent implements OnInit, OnDestroy {

  // Ngon ngu hien thi //////////
  langData: Record<string, string> = (localStorage.getItem('language') === 'en' ? langDataEn : langDataVi).AUTH.RESET_PASS;
  //////////////////////////////

  form!: FormGroup<MakeForm<IResetPasswordDTO>>;
  showPass = false;
  resetPassToken = '';

  isFieldValid = this.formValidatorSvc.isFieldValid;
  displayFieldCssZorro = this.formValidatorSvc.displayFieldCssZorro;

  constructor(
    private fb: FormBuilder,
    private formValidatorSvc: FormValidatorService,
    private authSvc: AuthService,
    private router: Router,
    private spinner: NgxSpinnerService,
    private alert: ToastrService,
    private activatedRouter: ActivatedRoute,
  ) {
    this.activatedRouter.params.subscribe({
      next: queryParams => {
        if (queryParams.id) {
          this.resetPassToken = queryParams.id;
        } else {
          this.router.navigateByUrl(UrlConstant.ROUTE.AUTH.LOGIN);
        }
      },
    });
  }

  ngOnInit(): void {
    this.createFormGroupLogin();
  }

  ngOnDestroy(): void {
    this.spinner.hide();
  }

  createFormGroupLogin(): void {
    this.form = this.fb.nonNullable.group({
      password: ['', [Validators.required]],
      repassword: ['', [Validators.required]],
    }, {
      validators: mustMatch('password', 'repassword'),
    });
  }

  toggleShowPassLogin(): void {
    this.showPass = !this.showPass;
  }

  onResetPass(): void {
    if (this.form.valid) {
      this.spinner.show();
      this.authSvc.doResetPasswordUpdate(SystemConstant.ROLE.STUDENT, this.form.value, this.resetPassToken)
        .subscribe({
          next: res => {
            if (res.message === 'Success') {
              this.alert.success(this.langData.CAP_NHAT_THANH_CONG);
              this.router.navigateByUrl(UrlConstant.ROUTE.AUTH.LOGIN);
            } else {
              this.router.navigateByUrl(UrlConstant.ROUTE.AUTH.LOGIN);
            }
          },
        });
    } else {
      this.formValidatorSvc.validateAllFormFields(this.form);
    }
  }

}
