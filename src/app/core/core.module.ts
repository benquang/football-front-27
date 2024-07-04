import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AuthService } from '@services/auth/auth.service';
import { FormValidatorService } from '@services/common/form-validator.service';
import { HandlerErrorService } from '@services/common/handler-error.service';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ToastrModule } from 'ngx-toastr';
import { httpInterceptorProviders } from './interceptors';

@NgModule({
  providers: [
    httpInterceptorProviders,
    HandlerErrorService,
    FormValidatorService,
    AuthService,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    NgxSpinnerModule,
    ToastrModule.forRoot({
      timeOut: 6868,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
  ],
  exports: [
    ToastrModule,
    NgxSpinnerModule,
  ],
})
export class CoreModule { }
