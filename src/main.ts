import "./polyfills.ts";

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode, TRANSLATIONS, TRANSLATIONS_FORMAT, LOCALE_ID } from '@angular/core';
import { environment } from './environments/environment';
import { AppModule } from './app/';
import { TRANSLATION } from './messages.fr';

if (environment.production) {
  enableProdMode();
}

// Compile using french translations
platformBrowserDynamic().bootstrapModule(
  AppModule,
  {providers: [
    {provide: TRANSLATIONS, useValue: TRANSLATION},
    {provide:TRANSLATIONS_FORMAT, useValue:'xlf'},
    {provide:LOCALE_ID, useValue:'fr'}
  ]});
