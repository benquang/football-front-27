import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import * as Sentry from '@sentry/angular-ivy';

import { environment } from '@environment';
import { AppModule } from './app/app.module';

// Only catch error in production mode
if (environment.production) {
  Sentry.init({
    dsn: environment.sentryDsn,
    integrations: [
      new Sentry.BrowserTracing({
        tracePropagationTargets: ['localhost', 'api.hcmute.edu.vn', 'test-backend.stc.local'],
        routingInstrumentation: Sentry.routingInstrumentation,
      }),
      new Sentry.Replay(),
    ],

    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 0.85,

    // This sets the sample rate to be 10%. You may want this to be 100% while
    // in development and sample at a lower rate in production
    replaysSessionSampleRate: 0.25,
    // If the entire session is not sampled, use the below sample rate to sample
    // sessions when an error occurs.
    replaysOnErrorSampleRate: 1.0,

    // Filter out event
    // beforeSend(event: ErrorEvent) {
    //   const listSkipErrors = [
    //     '401', '403'
    //   ];
    //   // event.message = JSON.stringify(event); // save 'event' to 'message', to view in sentry dashboard
    //   // return event;
    //   if (listSkipErrors.some(x => event.message?.includes(x))) {
    //     return null;
    //   } else {
    //     return event;
    //   }
    // },

    // Filter out event by name
    ignoreErrors: [
      '401', '403', '404',
      'Non-Error exception captured',
      'Service workers are disabled',
      'Login providers not ready yet',
    ]
  });

  enableProdMode();
} else {
  console.warn('Sentry disabled in dev-mode.');
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
