import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { routes } from './app.routes';
import { APP_CONFIG, APP_SERVICE_CONFIG } from './config/appConfig.service';
import { HttpClientModule } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    {
      provide: APP_SERVICE_CONFIG,
      useValue: APP_CONFIG
    },
    importProvidersFrom(HttpClientModule),
    provideRouter(routes),
    provideAnimations()
  ]
};
