import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { InMemoryScrollingFeature, InMemoryScrollingOptions, provideRouter, withInMemoryScrolling } from '@angular/router';

import { routes } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient,HttpClientModule, provideHttpClient } from '@angular/common/http';
import {TranslateHttpLoader } from '@ngx-translate/http-loader';
import {TranslateLoader, TranslateModule } from '@ngx-translate/core';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
const scrollConfig: InMemoryScrollingOptions = {
  scrollPositionRestoration: 'top',
  anchorScrolling: 'enabled',
};

const inMemoryScrollingFeature: InMemoryScrollingFeature =
  withInMemoryScrolling(scrollConfig);

export const appConfig: ApplicationConfig = {
  providers: [
    
    HttpClientModule,
    provideHttpClient(),
    importProvidersFrom(BrowserModule, TranslateModule.forRoot ({ // Configuration de TranslateModule avec un loader personnalisé
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient] // Dépendance nécessaire pour le loader
      }
    }) ),
    provideRouter(routes, inMemoryScrollingFeature)]
};
