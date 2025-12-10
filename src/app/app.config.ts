import {
  ApplicationConfig,
  inject,
  isDevMode,
  LOCALE_ID,
  provideAppInitializer,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { APP_CONFIG } from '@nx-admin-portal/shared';
import { environment } from '../environments/environment';
import { provideTransloco, TranslocoService } from '@jsverse/transloco';
import { provideTranslocoPersistLang } from '@jsverse/transloco-persist-lang';
import { TranslocoHttpLoader } from './transloco-loder';
import { registerLocaleData } from '@angular/common';
import ar from '@angular/common/locales/ar';
import { lastValueFrom } from 'rxjs';

registerLocaleData(ar);

export function preloadTranslations(transloco: TranslocoService) {
  return function () {
    const lang = transloco.getActiveLang() || 'en';
    transloco.setActiveLang(lang);
    return lastValueFrom(transloco.load(lang));
  };
}

export const preLoad = provideAppInitializer(() => {
  const initializerFn = (preloadTranslations)(inject(TranslocoService));
  return initializerFn();
});


export const appConfig: ApplicationConfig = {
  providers: [
    { provide: APP_CONFIG, useValue: environment },
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    provideTransloco({
      config: {
        availableLangs: ['en', 'ar'],
        defaultLang: 'en',
        reRenderOnLangChange: true,
        prodMode: !isDevMode(),
      },
      loader: TranslocoHttpLoader
    }),
    provideTranslocoPersistLang({
      storage: {
        useValue: localStorage,
      },
    }),
    {
      provide: LOCALE_ID,
      useFactory: (transloco: TranslocoService) => {
        const currentLang = transloco.getActiveLang() || 'en';
        return currentLang === 'ar' ? 'ar' : 'en';
      },
      deps: [TranslocoService]
    },
  ],
};
