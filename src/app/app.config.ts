import { ApplicationConfig, provideZoneChangeDetection, forwardRef } from '@angular/core';
// import { CheckboxComponent } from './path-to-checkbox-component'; // Update the path as necessary
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import { AppComponent } from './app.component';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), 
    provideClientHydration(withEventReplay()), 
    provideAnimationsAsync(), 
    providePrimeNG({ theme: { preset: Aura} }),
    {
      provide: 'NG_VALUE_ACCESSOR',
      useExisting: forwardRef(() => AppComponent),
      multi: true
    },
    provideHttpClient() //added this to provide HttpClient and work with the service
  ]
};
