import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Trx } from 'src/app/models/trx';
import { trxList } from 'src/app/mock/data/mock-trx';

/**
 * This unused, simpler service doesn't use the Http in-memory-data-service.
 */
@Injectable({
  providedIn: 'root'
})
export class TrxService {

  constructor() { }

  getTrxList(typeId: number): Observable<Trx[]> {
    // To test upstream error display uncomment the below.
    // throw new Error('12345 67890 22345 67890 32345 67890 42345 67890 52345 67890 62345 67890 72345 67890 82345 67890 92345 67890');
    return of(trxList.filter((trx) => trx.typeId === typeId));
  }
}
