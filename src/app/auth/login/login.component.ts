import { GoogleLoginProvider, SocialAuthService } from '@abacritt/angularx-social-login';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SystemConstant } from '@constants/system.constant';
import { UrlConstant } from '@constants/url.constant';
import langDataEn from '@languages/en.json';
import langDataVi from '@languages/vi.json';
import { ILoginDTO, IResetPasswordRequsetDTO } from '@models/auth/auth.model';
import { MakeForm } from '@models/common/make-form.model';
import { AuthService } from '@services/auth/auth.service';
import { FormValidatorService } from '@services/common/form-validator.service';
import { emailValidator } from '@validators/email.validator';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {

  // Ngon ngu hien thi //////////
  langData: Record<string, string> = (localStorage.getItem('language') === 'en' ? langDataEn : langDataVi).AUTH.LOGIN;
  //////////////////////////////

  formLogin!: FormGroup<MakeForm<ILoginDTO>>;
  formResetPass!: FormGroup<MakeForm<IResetPasswordRequsetDTO>>;
  showPassLogin = false;
  isShowFogotPass = false;
  listRoles = SystemConstant.ROLE_TITLE;

  isFieldValid = this.formValidatorSvc.isFieldValid;
  displayFieldCssZorro = this.formValidatorSvc.displayFieldCssZorro;

  constructor(
    private fb: FormBuilder,
    private formValidatorSvc: FormValidatorService,
    private authSvc: AuthService,
    private socialLoginSvc: SocialAuthService,
    private router: Router,
    private spinner: NgxSpinnerService,
    private alert: ToastrService,
  ) {
    if (this.authSvc.getAuthData() && this.authSvc.getToken()) {
      if (this.authSvc.checkRole(SystemConstant.ROLE.STUDENT)) {
        this.router.navigateByUrl(UrlConstant.ROUTE.MAIN.HOMEPAGE);
      } else {
        this.router.navigateByUrl(UrlConstant.ROUTE.MANAGEMENT.DASHBOARD);
      }
    }
  }

  ngOnInit(): void {
    this.createFormGroupLogin();
    this.createFormForgotPass();
  }

  ngOnDestroy(): void {
    this.spinner.hide();
  }

  createFormGroupLogin(): void {
    this.formLogin = this.fb.nonNullable.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      remember: [true],
    });
  }

  createFormForgotPass(): void {
    this.formResetPass = this.fb.nonNullable.group({
      email: ['', [Validators.required, emailValidator]],
    });
  }

  toggleShowPassLogin(): void {
    this.showPassLogin = !this.showPassLogin;
  }

  onLoginWithForm(): void {
    if (this.formLogin.valid) {
      this.spinner.show();
      this.authSvc.doLoginForm(this.formLogin.value)
        .subscribe({
          next: res => {
            if (res) {
              this.authSvc.setToken(res?.token ?? '');
              delete res.token;
              this.authSvc.setAuthData(res);
              this.router.navigateByUrl(UrlConstant.ROUTE.MAIN.HOMEPAGE);
            } else {
              this.alert.error(this.langData.TAI_KHOAN_KHONG_CO_QUYEN);
            }
          },
        });
    } else {
      this.formValidatorSvc.validateAllFormFields(this.formLogin);
    }
  }

  onLoginWithGoogle(): void {
    this.socialLoginSvc.getAccessToken(GoogleLoginProvider.PROVIDER_ID).then(accessToken => {
      if (accessToken) {
        this.spinner.show();
        this.authSvc.doLoginGoogle(accessToken)
          .subscribe({
            next: res => {
              this.authSvc.setToken(res?.token ?? '');
              delete res.token;
              this.authSvc.setAuthData(res);
              this.router.navigateByUrl(UrlConstant.ROUTE.MANAGEMENT.DASHBOARD);
            },
          });
      }
    });
  }

  requestFogotPassword() {
    if (this.formResetPass.valid) {
      this.authSvc.doResetPasswordRequest(SystemConstant.ROLE.STUDENT, this.formResetPass.value)
        .subscribe({
          next: res => {
            if (res.message === 'Success') {
              this.alert.success(this.langData.DA_GUI_YEU_CAU_CAP_LAI_MAT_KHAU);
              this.isShowFogotPass = false;
              this.formResetPass.reset();
            }
          },
        });
    } else {
      this.formValidatorSvc.validateAllFormFields(this.formResetPass);
    }
  }

}
