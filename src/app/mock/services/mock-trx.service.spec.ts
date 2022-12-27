import { TestBed } from '@angular/core/testing';

import { TrxService } from './mock-trx.service';

describe('MockTrxService', () => {
  let service: TrxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
