import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { TrxService } from './trx.service';

describe('TrxService', () => {
  let service: TrxService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule, ],
    });
    service = TestBed.inject(TrxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
