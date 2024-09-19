import { TestBed } from '@angular/core/testing';

import { SumLibService } from './sum-lib.service';

describe('SumLibService', () => {
  let service: SumLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SumLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
