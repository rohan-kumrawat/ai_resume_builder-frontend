import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { providerHttpClient } from '@angular/common/http';

bootstrapApplication(AppComponent, appConfig, {
  providers: [providerHttpClient()]})
  .catch((err) => console.error(err));
