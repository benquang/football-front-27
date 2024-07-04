import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, ErrorHandler, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import * as Sentry from '@sentry/angular-ivy';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

import { registerLocaleData } from '@angular/common';
import vi from '@angular/common/locales/vi';
import { vi as vn } from 'date-fns/locale';
import { en_US, NZ_DATE_LOCALE, NZ_I18N, vi_VN } from 'ng-zorro-antd/i18n';
registerLocaleData(vi);

import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '@environment';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { OnlineStatusModule } from 'ngx-online-status';

import { NzButtonModule } from 'ng-zorro-antd/button';


import langDataEn from '@languages/en.json';
import langDataVi from '@languages/vi.json';
import { take, timer } from 'rxjs';

const langData: Record<string, string> = (localStorage.getItem('language') === 'en' ? langDataEn : langDataVi).SENTRY;
// To test Sentry feature, allow local host: main.ts => if (environment.production || true)
const showSentryDialog = (): boolean => {
  const lastTime = parseInt(localStorage.getItem('showSentryDialog') ?? '0', 10);
  if (new Date(lastTime + 86400000) < new Date()) {
    localStorage.setItem('showSentryDialog', `${Date.now()}`);
    return true;
  } else {
    return false;
  }
};

const pluginsModules = [
  NzIconModule,
  NzAlertModule,
  NzInputModule,
  NzButtonModule,
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule,
    OnlineStatusModule,
    pluginsModules,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
  ],
  providers: [
    {
      provide: NZ_I18N,
      // Usage:
      // import { en_US, NzI18nService } from 'ng-zorro-antd/i18n';
      // constructor(private i18n: NzI18nService) {}
      // switchLanguage() { this.i18n.setLocale(en_US); }
      useFactory: (localId: string) => {
        switch (localId) {
          case 'en':
            return en_US;
          case 'vi':
            return vi_VN;
          default:
            return vi_VN;
        }
      },
      deps: [LOCALE_ID],
    },
    { provide: NZ_DATE_LOCALE, useValue: vn },
    {
      provide: ErrorHandler,
      useValue: Sentry.createErrorHandler({
        logErrors: true,
        showDialog: showSentryDialog(),
        dialogOptions: {
          lang: localStorage.getItem('language') ?? 'vi',
          title: langData.SENTRY_ERR_TITLE,
          subtitle: langData.SENTRY_ERR_SUBTITLE,
          subtitle2: '',
          labelName: langData.SENTRY_LABEL_NAME,
          labelComments: langData.SENTRY_LABEL_COMMENT,
          labelSubmit: langData.SENTRY_LABEL_SUBMIT,
          labelClose: langData.SENTRY_LABEL_CLOSE,
          successMessage: langData.SENTRY_SUBMIT_OK,
          errorFormEntry: langData.SENTRY_INPUT_INVALID,
          errorGeneric: langData.SENTRY_SUBMIT_ERR,
          onLoad: () => {
            timer(100, 100).pipe(take(10)).subscribe(() => {
              const headerP = document.querySelector('.sentry-error-embed.clearfix header p');
              const idCmt = document.getElementById('id_comments');
              const closeBtn = document.querySelector('.sentry-error-embed .close');
              if (headerP?.innerHTML) {
                headerP.innerHTML = headerP.innerHTML.replace(/&lt;br&gt;/g, '<br>');
              }
              if (idCmt) {
                idCmt.setAttribute('placeholder', langData.SENTRY_DESCRIPTION_PLACEHOLDER);
              }
              if (closeBtn) {
                closeBtn.addEventListener('click', () => window.location.reload());
              }
            });
          },
        },
      }),
    },
    {
      provide: Sentry.TraceService,
      deps: [Router],
    },
    {
      provide: APP_INITIALIZER,
      useFactory: () => () => { },
      deps: [Sentry.TraceService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
