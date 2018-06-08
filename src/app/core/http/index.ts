import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JsonInterceptor } from './json-interceptor';

export const httpInterceptorProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: JsonInterceptor, multi: true }
];
