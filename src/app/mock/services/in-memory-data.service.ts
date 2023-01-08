import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

import { customerList } from '../data/mock-customers';
import { DbType, ID_MIN } from '../../models/db-type';
import { trxList } from '../data/mock-trx';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  appData = { customers: customerList, trxes: trxList };

  createDb() {
    return this.appData;
  }

  private nullToMin(id: number | null) {
    return id === null ? ID_MIN : id;
  }

  genId<T extends DbType>(collection: T[], collectionName: string): number {
    return collection.length > 0 ?
      Math.max(...collection.map(_item => this.nullToMin(_item.id))) + 1 :
      ID_MIN;
  }
}
