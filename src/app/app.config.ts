import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { GlobalService } from './services/global.service';
import { HelperService } from './services/helper.service';

export const appConfig: ApplicationConfig = {
  providers: [
    GlobalService,
    HelperService,
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
  ],
};
