import { TestBed, inject } from '@angular/core/testing';

import { QueryGeneratorService } from './query-generator.service';

describe('QueryGeneratorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QueryGeneratorService]
    });
  });

  it('should be created', inject([QueryGeneratorService], (service: QueryGeneratorService) => {
    expect(service).toBeTruthy();
  }));
});
