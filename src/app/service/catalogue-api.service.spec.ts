import { TestBed, inject } from '@angular/core/testing';

import { CatalogueApiService } from './catalogue-api.service';

describe('CatalogueApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CatalogueApiService]
    });
  });

  it('should be created', inject([CatalogueApiService], (service: CatalogueApiService) => {
    expect(service).toBeTruthy();
  }));
});
