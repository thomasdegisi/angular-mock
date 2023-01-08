import { DataSource } from '@angular/cdk/collections';
import { Injectable } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, merge, Subscription } from 'rxjs';

import { DbService } from './db.service';
import { DbType } from '../models/db-type';
import { StatusComponent } from '../status/status.component';

/**
 * Data source base class. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
@Injectable({
  providedIn: 'root'
})
export abstract class DbDataSource<T extends DbType> extends DataSource<T> {
  public data: T[] = [];
  public paginator: MatPaginator | undefined;
  public sort: MatSort | undefined;
  public subscription: Subscription | null = null;

  constructor(public service: DbService<T>, public status: StatusComponent) {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<T[]> {
    if (this.paginator && this.sort) {
      // Combine everything that affects the rendered data into one update
      // stream for the data-table to consume.
      let observable = merge(this.getList(), this.paginator.page, this.sort.sortChange)
        .pipe(map(() => {
          return this.getPagedData(this.getSortedData([...this.data]));
        }));

      this.subscription = observable.subscribe();
      return observable;
    } else {
      throw Error('Please set the paginator and sort on the data source before connecting.');
    }
  }

  public add(item: T): void {
    this.data.push(item);
  }

  public delete(id: number): void {
    this.data = this.data.filter((_item) => _item.id != id);
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect(): void {
    if (this.subscription != null) {
      this.subscription.unsubscribe();
    }
  }

  abstract getList(): Observable<T[]>;

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(_data: T[]): T[] {
    if (this.paginator) {
      const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
      return _data.splice(startIndex, this.paginator.pageSize);
    } else {
      return _data;
    }
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  abstract getSortedData(_data: T[] | PageEvent | Sort): T[];

  public update(item: T): void {
    const index = this.data.findIndex((_item) => item.id == _item.id)

    this.data[index] = item;
  }
}
