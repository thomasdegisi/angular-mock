import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

import { CUSTOMER_LIST } from '../data/mock-customers';
import { TRX_LIST } from '../data/mock-trx';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const customers = CUSTOMER_LIST;
    const trxes = TRX_LIST;
    return {customers: customers, trxes: trxes};
  }
}
