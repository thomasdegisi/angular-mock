import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Customer } from '../../models/customer';
import { customerList } from '../data/mock-customers';

/**
 * This unused, simpler service doesn't use the Http in-memory-data-service.
 */
@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor() {}

  getCustomers(): Observable<Customer[]> {
    // To test upstream error display uncomment the below.
    // throw new Error('12345 67890 22345 67890 32345 67890 42345 67890 52345 67890 62345 67890 72345 67890 82345 67890 92345 67890 92345 67890');
    return of(customerList);
  }
}
