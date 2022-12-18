import { Injectable } from '@angular/core';
import { Trx } from 'src/app/models/trx';
import { TRX_LIST } from 'src/app/mock/data/mock-trx';

@Injectable({
  providedIn: 'root'
})
export class MockTrxService {
  private trxList: Trx[] = TRX_LIST;

  constructor() { }

  getTrxList(typeId: number): Trx[] {
    return this.trxList.filter((trx) => trx.typeId === typeId);
  }
}
