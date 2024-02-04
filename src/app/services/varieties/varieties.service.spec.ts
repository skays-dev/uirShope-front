import { TestBed } from '@angular/core/testing';

import { VarietiesService } from './varieties.service';

describe('VarietiesService', () => {
  let service: VarietiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VarietiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
