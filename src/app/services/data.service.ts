import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

import { DbType } from '../models/db-type';

@Injectable({
  providedIn: 'root'
})
export class DataService<T extends DbType > {
  protected item: T | null = null;
  protected items!: T[];
  protected name = 'unknown'
  protected url = '/unknown';
  protected http!: HttpClient;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor() {
  }

  add(item: T): Observable<T> {
    return this.http.post<T>(this.url, item, this.httpOptions).pipe(tap(() => this.item = item));
  }

  delete(id: number): Observable<T>  {
    const _url = this.url + '/' + id;

    return this.http.delete<T>(_url, this.httpOptions).pipe(tap(() => this.item = null));
  }

  getById(id: number): Observable<T> {
    const _url = this.url + '/' + id;

    return this.http.get<T>(_url).pipe(tap((_item: T) => this.item = _item));
  }

  getList(): Observable<T[]> {
    // To test upstream error display uncomment the below.
    // throw new Error('12345 67890 22345 67890 32345 67890 42345 67890 52345 67890 62345 67890 72345 67890 82345 67890 92345 67890');
    return this.http.get<T[]>(this.url).pipe(tap((_items: T[]) => this.items = _items));
  }

  idDisplay(id: number): string {
    return ' ' + this.name + ' with id(' + id + ')';
  }

  update(item: T): Observable<T> {
    return this.http.put<T>(this.url, item, this.httpOptions).pipe(tap(() => this.item = item));
  }
}
