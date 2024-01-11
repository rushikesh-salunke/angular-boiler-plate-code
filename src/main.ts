import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import * as Sentry from '@sentry/angular-ivy';

Sentry.init({
  dsn: 'https://ec79a823ce184004d89d2f06b71faad0@o4506117942149120.ingest.sentry.io/4506309078155264',
  integrations: [
    new Sentry.BrowserTracing({
      // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
      tracePropagationTargets: [
        'http://localhost:4200',
        /^https:\/\/yourserver\.io\/api/,
      ],
      routingInstrumentation: Sentry.routingInstrumentation,
    }),
    new Sentry.Replay(),
  ],
  // Performance Monitoring
  tracesSampleRate: 1.0, // Capture 100% of the transactions
  // Session Replay
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then((success) => console.log('Bootstrap success'))
  .catch((err) => console.error(err));

