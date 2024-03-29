import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { DbService } from './db.service';
import { ALL_TYPES_TYPE_ID, Trx } from 'src/app/models/trx';

@Injectable({
  providedIn: 'root'
})
export class TrxService extends DbService<Trx> {
  constructor(private _http: HttpClient) {
    super(_http);
    this.name = 'transaction';
    this.url = 'api/trxes';
  }

  getListByType(typeId: number): Observable<Trx[]> {
    // To test upstream error display uncomment the below.
    // throw new Error('12345 67890 22345 67890 32345 67890 42345 67890 52345 67890 62345 67890 72345 67890 82345 67890 92345 67890');
    return this.http.get<Trx[]>(this.url).pipe(
      map((trxes) => trxes.filter((trx) =>
        typeId === ALL_TYPES_TYPE_ID || typeId === trx.typeId
      )));
  }
}
