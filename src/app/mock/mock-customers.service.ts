import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Customer } from '../models/customer';
import { CUSTOMER_LIST } from './data/mock-customers';

@Injectable({
  providedIn: 'root'
})
export class MockCustomersService {
  constructor() {}

  getCustomers(): Observable<Customer[]> {
    const customers = of(CUSTOMER_LIST);
    return customers;
  }
}
