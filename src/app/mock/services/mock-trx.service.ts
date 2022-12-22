import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Trx } from 'src/app/models/trx';
import { TRX_LIST } from 'src/app/mock/data/mock-trx';

@Injectable({
  providedIn: 'root'
})
export class MockTrxService {
  constructor() { }

  getTrxList(typeId: number): Observable<Trx[]> {
    return of(TRX_LIST.filter((trx) => trx.typeId === typeId));
  }
}
