import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService<T> {
  protected name = 'unknown'
  protected url = '/unknown';
  protected http!: HttpClient;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor() {
  }

  add<T>(item: T): Observable<T> {
    return this.http.post<T>(this.url, item, this.httpOptions);
  }

  delete<T>(id: number): Observable<T>  {
    const url = `${this.url}/${id}`;

    return this.http.delete<T>(url, this.httpOptions);
  }

  getById<T>(id: number): Observable<T> {
    const _url = this.url + '/' + id;

    return this.http.get<T>(this.url);
  }

  getList<T>(): Observable<T[]> {
    // To test upstream error display uncomment the below.
    // throw new Error('12345 67890 22345 67890 32345 67890 42345 67890 52345 67890 62345 67890 72345 67890 82345 67890 92345 67890');
    return this.http.get<T[]>(this.url);
  }

  idDisplay(id: number): string {
    return ' ' + this.name + ' with id(' + id + ')';
  }

  update<T>(item: T): Observable<T> {
    return this.http.put<T>(this.url, item, this.httpOptions);
  }
}
