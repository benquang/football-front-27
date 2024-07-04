/* eslint-disable @typescript-eslint/naming-convention */
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UrlConstant } from '@constants/url.constant';
import { environment } from '@environment';
import { AuthService } from '@services/auth/auth.service';
import { HandlerErrorService } from '@services/common/handler-error.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private handleErrSvc: HandlerErrorService,
    private authSvc: AuthService,
    private spinner: NgxSpinnerService,
  ) { }

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler,
  ): Observable<HttpEvent<unknown>> {
    if (UrlConstant.PUBLIC_URL.some(x => x.method === request.method && new RegExp(x.regex).test(request.url))) {
      return next.handle(this.addHeaderData(request, false, true)).pipe(
        finalize(() => this.spinner.hide()),
        catchError(
          (err: HttpErrorResponse) =>
            new Observable<HttpEvent<unknown>>(observer => {
              this.handleErrSvc.handleError(err);
              observer.error(err);
              observer.complete();
            }),
        ),
      );
    } else if (this.authSvc.getAuthData() && this.authSvc.getToken()) {
      return next.handle(this.addHeaderData(request, true, true, true)).pipe(
        finalize(() => this.spinner.hide()),
        catchError(
          (err: HttpErrorResponse) =>
            new Observable<HttpEvent<unknown>>(observer => {
              this.handleErrSvc.handleError(err);
              observer.error(err);
              observer.complete();
            }),
        ),
      );
    } else {
      return next.handle(this.addHeaderData(request, true, true)).pipe(
        finalize(() => this.spinner.hide()),
        catchError(
          (err: HttpErrorResponse) =>
            new Observable<HttpEvent<unknown>>(observer => {
              this.handleErrSvc.handleError(err);
              observer.error(err);
              observer.complete();
            }),
        ),
      );
    }
  }

  private addHeaderData(
    request: HttpRequest<unknown>,
    addSentryToken?: boolean,
    addLanguage?: boolean,
    addToken?: boolean,
  ): HttpRequest<unknown> {
    const header: { [name: string]: string | string[]; } = {};
    if (addSentryToken) {
      header['x-st'] = environment.sentryToken;
    }
    if (addLanguage) {
      header['Accept-Language'] = localStorage.getItem('language') === 'vi' ? 'vn' : 'en';
    }
    if (addToken) {
      header.Authorization = `Bearer ${this.authSvc.getToken()}`;
    }
    return request.clone({
      setHeaders: header,
    });
  }

}
