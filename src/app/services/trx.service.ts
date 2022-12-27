import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Trx } from 'src/app/models/trx';

@Injectable({
  providedIn: 'root'
})
export class TrxService {
  private trxesUrl = 'api/trxes';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {}

  /** POST: add a new transaction to the server */
  addTrx(trx: Trx): Observable<Trx> {
    return this.http.post<Trx>(this.trxesUrl, trx, this.httpOptions);
  }

  /** GET transactions from the server */
  getTrxList(typeId: number): Observable<Trx[]> {
    // To test upstream error display uncomment the below.
    // throw new Error('12345 67890 22345 67890 32345 67890 42345 67890 52345 67890 62345 67890 72345 67890 82345 67890 92345 67890');
    return this.http.get<Trx[]>(this.trxesUrl).pipe(
      map((trxes) => trxes.filter((trx) => trx.typeId === typeId)));
  }
}
