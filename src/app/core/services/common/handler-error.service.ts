import { HttpErrorResponse } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { UrlConstant } from '@constants/url.constant';
import langDataEn from '@languages/en.json';
import langDataVi from '@languages/vi.json';
import { AuthService } from '@services/auth/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HandlerErrorService {

  // Ngon ngu hien thi //////////
  // private langCode: 'en' | 'vi' = localStorage.getItem('language') as 'en' | 'vi' ?? 'vi';
  private langData: Record<string, string> = (localStorage.getItem('language') === 'en' ? langDataEn : langDataVi).CORE.HANDLE_ERROR;
  //////////////////////////////

  private routerNext = '';

  constructor(
    @Inject(AuthService) private authSvc: AuthService,
    private alert: ToastrService,
  ) { }

  handleError(error: HttpErrorResponse): Observable<never> {
    if (this.authSvc.getAuthData() && this.authSvc.getToken()) {
      this.routerNext = UrlConstant.ROUTE.AUTH.LOGIN;
    } else {
      this.routerNext = UrlConstant.ROUTE.MAIN.HOMEPAGE;
    }

    try {
      if (error.status) {
        switch (error.status) {
          case 401:
            this.alert.error(this.langData.TAI_KHOAN_KHONG_CO_QUYEN);
            this.authSvc.doLogout();
            if (window.location.pathname !== UrlConstant.ROUTE.AUTH.LOGIN) {
              window.location.assign(UrlConstant.ROUTE.AUTH.LOGIN);
            }
            // this.doLogout().then(() => {
            //   if (window.location.pathname !== UrlConstant.ROUTE.AUTH.LOGIN) {
            //     window.location.assign(UrlConstant.ROUTE.AUTH.LOGIN);
            //   }
            // });
            break;
          case 403:
            this.alert.error(this.langData.TAI_KHOAN_KHONG_CO_QUYEN);
            this.authSvc.doLogout();
            if (window.location.pathname !== UrlConstant.ROUTE.AUTH.LOGIN) {
              window.location.assign(UrlConstant.ROUTE.AUTH.LOGIN);
            }
            // this.doLogout().then(() => {
            //   if (window.location.pathname !== UrlConstant.ROUTE.AUTH.LOGIN) {
            //     window.location.assign(UrlConstant.ROUTE.AUTH.LOGIN);
            //   }
            // });
            break;
          default:
            if (error.error instanceof Blob) {
              error.error.text().then(errText => {
                const blobJson: HttpErrorResponse = JSON.parse(errText);
                this.alert.error(blobJson.message ?? this.langData.CO_LOI_XAY_RA);
              });
            } else if (error.error?.error?.message) { // Error message of file svc
              this.alert.error(error.error?.error?.message ?? this.langData.CO_LOI_XAY_RA);
            } else {
              this.alert.error(error.error.message ?? this.langData.CO_LOI_XAY_RA);
            }
            break;
        }
      } else {
        this.alert.error(this.langData.CO_LOI_XAY_RA);
        this.authSvc.doLogout();
        window.location.assign(this.routerNext);
        // this.doLogout().then(() => window.location.assign(this.routerNext));
      }
    } catch {
      this.alert.error(this.langData.CO_LOI_XAY_RA);
    }

    return throwError(() => error.error);
  }

  handleErrorForkJoin(): Observable<unknown> {
    return of([]);
  }

  // doLogout() {
  //   this.spinner.show('spinner', { bdColor: 'rgba(0, 0, 0, .9)' });
  //   const showSentryDialog = localStorage.getItem('showSentryDialog');
  //   timer(100).subscribe(() => {
  //     this.cookie.delete(SystemConstant.CURRENT_INFO, '/', undefined, true, 'Strict');
  //     localStorage.clear();
  //   });
  //   return new Promise((resolve) => {
  //     timer(1000).subscribe(() => {
  //       localStorage.setItem('language', this.langCode);
  //       if (showSentryDialog) {
  //         localStorage.setItem('showSentryDialog', showSentryDialog);
  //       }
  //       this.spinner.hide();
  //       resolve(null);
  //     });
  //   });
  // }

  // getToken(): string {
  //   return JSON.parse(localStorage.getItem(SystemConstant.CURRENT_INFO) ?? '{}')?.token;
  // }
}
