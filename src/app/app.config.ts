import {ApplicationConfig, isDevMode} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {provideStore} from "@ngrx/store";
import {BookReducer} from "./book/book.reducer";
import {provideEffects} from "@ngrx/effects";
import {BookEffects} from "./book/book.effect";
import {provideStoreDevtools} from "@ngrx/store-devtools";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideStore({ book: BookReducer }),
    provideEffects(BookEffects),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: !isDevMode(),
      autoPause: true,
      trace: false,
      traceLimit: 75,
    })
  ],
};
