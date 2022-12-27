import { TestBed } from '@angular/core/testing';

import { CustomersService } from './mock-customers.service';

describe('MockCustomersService', () => {
  let service: CustomersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
