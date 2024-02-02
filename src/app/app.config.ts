import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {provideStore} from "@ngrx/store";
import {BookReducer} from "./book/book.reducer";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideStore({ book: BookReducer }),
  ],
};
