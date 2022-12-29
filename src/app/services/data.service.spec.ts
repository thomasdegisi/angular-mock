import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { DataService } from './data.service';
import { Trx } from '../models/trx';

describe('DataService', () => {
  let service: DataService<Trx>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule, ],
    });
    service = TestBed.inject(DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
