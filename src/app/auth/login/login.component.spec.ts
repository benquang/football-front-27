import { GoogleInitOptions, GoogleLoginProvider, SocialAuthServiceConfig, SocialLoginModule } from '@abacritt/angularx-social-login';
import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { environment } from '@environment';
import { httpInterceptorProviders } from '@interceptors/index';
import { IAuthData, ILoginDTO, IResetPasswordRequsetDTO } from '@models/auth/auth.model';
import { AuthService } from '@services/auth/auth.service';
import { FieldErrorDisplayComponent } from '@widget/field-error-display/field-error-display.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { ToastrModule } from 'ngx-toastr';
import { Observable, of } from 'rxjs';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  const googleInitOptions: GoogleInitOptions = {
    oneTapEnabled: false,
    scopes: 'openid profile email'
  };
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        SocialLoginModule,
        ToastrModule.forRoot(),
        // Plugins
        NzGridModule,
        NzButtonModule,
        NzInputModule,
        NzDividerModule,
        NzModalModule,
        NzFormModule,
        NzToolTipModule,
        NzCheckboxModule,
        FieldErrorDisplayComponent,
      ],
      providers: [
        { provide: AuthService, useClass: AuthServiceMock },
        httpInterceptorProviders, // ???
        {
          provide: 'SocialAuthServiceConfig',
          useValue: {
            autoLogin: false,
            providers: [
              {
                id: GoogleLoginProvider.PROVIDER_ID,
                provider: new GoogleLoginProvider(
                  environment.keyGoogle,
                  googleInitOptions
                )
              }
            ],
            onError: (err) => {
              console.error(err);
            }
          } as SocialAuthServiceConfig,
        }
      ],
      declarations: [
        LoginComponent
      ],
    }).compileComponents();
  });

  it('Should create the "LoginComponent"', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('Check logic of "Username input"', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const compiled = fixture.nativeElement as HTMLElement;
    const app = fixture.componentInstance;

    // Get formControl
    fixture.detectChanges();
    const formControl = app.formLogin.get('username');

    // Default
    fixture.detectChanges();
    expect(compiled.querySelector('#frm-itm-username'))
      .withContext('default: rendered textbox').toBeTruthy();
    expect(formControl?.value).withContext('default: value is empty string').toBe('');
    expect(formControl?.touched).withContext('default: formControl is not touched').toBe(false);
    expect(formControl?.errors).withContext('default: required error because of no meaningful value').toEqual({ required: true });
    expect(compiled.querySelector('#err-frm-itm-username > div'))
      .withContext('default: formFieldError is hidden').toBeNull();

    // 1st
    formControl?.markAsTouched();
    fixture.detectChanges();
    expect(formControl?.value).withContext('1st: value is empty string').toBe('');
    expect(formControl?.touched).withContext('1st: formControl is touched').toBe(true);
    expect(formControl?.errors).withContext('1st: required error because of no meaningful value').toEqual({ required: true });
    expect(compiled.querySelector('#err-frm-itm-username > div'))
      .withContext('1st: formFieldError is rendered because formControl is touched and no meaningful value').toBeTruthy();

    // 2nd
    formControl?.setValue('user');
    fixture.detectChanges();
    expect(formControl?.value).withContext('2nd: value is "user"').toBe('user');
    expect(formControl?.touched).withContext('2nd: formControl is touched').toBe(true);
    expect(formControl?.errors).withContext('2nd: no error because of have meaningful value').toBeNull();
    expect(compiled.querySelector('#err-frm-itm-username > div'))
      .withContext('2nd: formFieldError is hidden').toBeNull();
  });

  it('Check logic of "Password input"', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const compiled = fixture.nativeElement as HTMLElement;
    const app = fixture.componentInstance;

    // Get formControl
    fixture.detectChanges();
    const formControl = app.formLogin.get('password');

    // Default
    fixture.detectChanges();
    expect(compiled.querySelector('#frm-itm-password'))
      .withContext('default: rendered textbox').toBeTruthy();
    expect(formControl?.value).withContext('default: value is empty string').toBe('');
    expect(formControl?.touched).withContext('default: formControl is not touched').toBe(false);
    expect(formControl?.errors).withContext('default: required error because of no meaningful value').toEqual({ required: true });
    expect(compiled.querySelector('#err-frm-itm-password > div'))
      .withContext('default: formFieldError is hidden').toBeNull();

    // 1st
    formControl?.markAsTouched();
    fixture.detectChanges();
    expect(formControl?.value).withContext('1st: value is empty string').toBe('');
    expect(formControl?.touched).withContext('1st: formControl is touched').toBe(true);
    expect(formControl?.errors).withContext('1st: required error because of no meaningful value').toEqual({ required: true });
    expect(compiled.querySelector('#err-frm-itm-password > div'))
      .withContext('1st: formFieldError is rendered because formControl is touched and no meaningful value').toBeTruthy();

    // 2nd
    formControl?.setValue('pass');
    fixture.detectChanges();
    expect(formControl?.value).withContext('2nd: value is "pass"').toBe('pass');
    expect(formControl?.touched).withContext('2nd: formControl is touched').toBe(true);
    expect(formControl?.errors).withContext('2nd: no error because of have meaningful value').toBeNull();
    expect(compiled.querySelector('#err-frm-itm-password > div'))
      .withContext('2nd: formFieldError is hidden').toBeNull();
  });

  it(`Check logic of "Show password icon"`, () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const compiled = fixture.nativeElement as HTMLElement;
    const app = fixture.componentInstance;

    // Default
    fixture.detectChanges();
    expect(app.showPassLogin).withContext('default: showPassLogin is false').toBe(false);
    expect(compiled.querySelector('.fa-eye')).withContext('default: icon fa-eye should be show').toBeTruthy();
    expect(compiled.querySelector('.fa-eye-slash')).withContext('default: icon fa-eye-slash should be hidden').toBeNull();

    // 1st
    app.toggleShowPassLogin();
    fixture.detectChanges();
    expect(app.showPassLogin).withContext('1st: showPassLogin is true after click the icon').toBe(true);
    expect(compiled.querySelector('.fa-eye')).withContext('1st: icon fa-eye should be hidden').toBeNull();
    expect(compiled.querySelector('.fa-eye-slash')).withContext('1st: icon fa-eye-slash should be show').toBeTruthy();

    // 2nd
    app.toggleShowPassLogin();
    fixture.detectChanges();
    expect(app.showPassLogin).withContext('2nd: showPassLogin is false after click the icon').toBe(false);
    expect(compiled.querySelector('.fa-eye')).withContext('2nd: icon fa-eye should be show').toBeTruthy();
    expect(compiled.querySelector('.fa-eye-slash')).withContext('2nd: icon fa-eye-slash should be hidden').toBeNull();
  });

  it('Check logic of "Remember me checkbox"', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const compiled = fixture.nativeElement as HTMLElement;

    // Default
    fixture.detectChanges();
    expect(compiled.querySelector('#chkbox-remember-me')).toBeTruthy();
  });

  it('Check logic of "Forgot password"', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const compiled = fixture.nativeElement as HTMLElement;
    const app = fixture.componentInstance;

    // Get formControl
    fixture.detectChanges();
    const formControl = app.formResetPass.get('email');

    // Default
    fixture.detectChanges();
    expect(app.isShowFogotPass).withContext('default: isShowFogotPass is false').toBe(false);
    expect(compiled.querySelector('#lnk-forgot-pass'))
      .withContext('default: rendered "forgot password link"').toBeTruthy();
    expect(document.querySelector('#mdl-fogot-pass'))
      .withContext('default: hidden "forgot password modal"').toBeNull();

    // 1st
    app.isShowFogotPass = true;
    fixture.detectChanges();
    expect(document.querySelector('#mdl-fogot-pass'))
      .withContext('1st: render "forgot password modal" after click link').toBeTruthy();
    expect(formControl?.value).withContext('1st: value is empty string').toBe('');
    expect(formControl?.touched).withContext('1st: formControl is not touched').toBe(false);
    expect(formControl?.errors).withContext('1st: "required" error because of no meaningful value').toEqual({ required: true });
    expect(document.querySelector('#err-fogot-pass-1 > div'))
      .withContext('1st: formFieldError "required" is hidden').toBeNull();
    expect(document.querySelector('#err-fogot-pass-2 > div'))
      .withContext('1st: formFieldError "invalidEmail" is hidden').toBeNull();

    // 2nd
    formControl?.markAsTouched();
    fixture.detectChanges();
    expect(formControl?.value).withContext('2nd: value is empty string').toBe('');
    expect(formControl?.touched).withContext('2nd: formControl is touched').toBe(true);
    expect(formControl?.errors).withContext('2nd: "required" error because of no meaningful value').toEqual({ required: true });
    expect(document.querySelector('#err-fogot-pass-1 > div'))
      .withContext('2nd: formFieldError "required" is rendered').toBeTruthy();
    expect(document.querySelector('#err-fogot-pass-2 > div'))
      .withContext('2nd: formFieldError "invalidEmail" is hidden').toBeNull();

    // 3rd
    formControl?.setValue('email999');
    fixture.detectChanges();
    expect(formControl?.value).withContext('3rd: value is "email999"').toBe('email999');
    expect(formControl?.touched).withContext('3rd: formControl is touched').toBe(true);
    expect(formControl?.errors).withContext('3rd: "invalidEmail" error because of no meaningful value').toEqual({ invalidEmail: { valid: false, value: 'email999' } });
    expect(document.querySelector('#err-fogot-pass-1 > div'))
      .withContext('3rd: formFieldError "required" is hidden').toBeNull();
    expect(document.querySelector('#err-fogot-pass-2 > div'))
      .withContext('3rd: formFieldError "invalidEmail" is rendered').toBeTruthy();

    // 4th
    formControl?.setValue('email999@abc.com');
    fixture.detectChanges();
    expect(formControl?.value).withContext('3rd: value is "email999@abc.com"').toBe('email999@abc.com');
    expect(formControl?.touched).withContext('3rd: formControl is touched').toBe(true);
    expect(formControl?.errors).withContext('3rd: no error because of having meaningful value').toBeNull();
    expect(document.querySelector('#err-fogot-pass-1 > div'))
      .withContext('3rd: formFieldError "required" is hidden').toBeNull();
    expect(document.querySelector('#err-fogot-pass-2 > div'))
      .withContext('3rd: formFieldError "invalidEmail" is hidden').toBeNull();

    // 5th
    app.requestFogotPassword();
    fixture.detectChanges();

  });

  it('Check logic of "Login button"', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const compiled = fixture.nativeElement as HTMLElement;
    const app = fixture.componentInstance;

    // Get form
    fixture.detectChanges();
    const form = app.formLogin;

    // Default
    fixture.detectChanges();
    expect(compiled.querySelector('#btn-login'))
      .withContext('default: rendered "login button"').toBeTruthy();

    // 1st Test when wrong account
    form.patchValue({
      username: 'kang',
      password: 'hidro',
      remember: true
    });
    fixture.detectChanges();
    app.onLoginWithForm();
    fixture.detectChanges();

    // 2nd Test when correct account

  });

  it('should render button: login with google', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const compiled = fixture.nativeElement as HTMLElement;
    // const app = fixture.componentInstance;

    fixture.detectChanges();
    expect(compiled.querySelector('#btn-login-google')).toBeTruthy();
  });
});

@Injectable()
class AuthServiceMock extends AuthService {
  doResetPasswordRequest(role: string, model: Partial<IResetPasswordRequsetDTO>): Observable<{ message: string; }> {
    console.log('doResetPasswordRequest', role, model);
    return of({ message: 'Success' });
  }
  doLoginForm(model: Partial<ILoginDTO>): Observable<IAuthData> {
    console.log('doLoginForm', model);
    return of({
      avatar: 'avatar url',
      token: 'token',
      expired: 123456,
      roles: ['ROLE'],
      fullName: 'Fullname',
    });
  }
}
