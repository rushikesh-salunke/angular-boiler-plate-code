import { TestBed } from '@angular/core/testing';

import { HttpTokenInterceptor } from './http.interceptor';

describe('HttpTokenInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      HttpTokenInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: HttpTokenInterceptor = TestBed.inject(HttpTokenInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
