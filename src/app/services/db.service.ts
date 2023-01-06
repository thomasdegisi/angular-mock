import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry, tap } from 'rxjs';

import { DbType } from '../models/db-type';

@Injectable({
  providedIn: 'root'
})
export class DbService<T extends DbType> {
  protected name = 'unknown'
  protected url = '/unknown';
  protected http!: HttpClient;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor() {
  }

  add(_item: T): Observable<T> {
    return this.http.post<T>(this.url, _item, this.httpOptions).pipe(retry(2));
  }

  delete(id: number): Observable<T>  {
    const _url = this.url + '/' + id;

    return this.http.delete<T>(_url, this.httpOptions).pipe(retry(2));
  }

  getById(id: number): Observable<T> {
    const _url = this.url + '/' + id;

    return this.http.get<T>(_url).pipe(retry(2));
  }

  getList(): Observable<T[]> {
    // To test upstream error display uncomment the below.
    // throw new Error('12345 67890 22345 67890 32345 67890 42345 67890 52345 67890 62345 67890 72345 67890 82345 67890 92345 67890');
    return this.http.get<T[]>(this.url).pipe(retry(2));
  }

  idDisplay(id: number): string {
    return ' ' + this.name + ' with id(' + id + ')';
  }

  update(_item: T): Observable<T> {
    const _url = this.url + '/' + _item.id;

    return this.http.put<T>(_url, _item, this.httpOptions).pipe(retry(2));
  }
}
