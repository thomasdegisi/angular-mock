import { TestBed } from '@angular/core/testing';

import { MockTrxService } from './mock-trx.service';

describe('MockTrxService', () => {
  let service: MockTrxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockTrxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
