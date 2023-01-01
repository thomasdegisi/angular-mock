import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, merge, Subscription } from 'rxjs';
import { Trx } from '../models/trx';
import { TrxService } from '../services/trx.service';

/**
 * Data source for the Trxes view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class TrxesDataSource extends DataSource<Trx> {
  data: Trx[] = [];
  paginator: MatPaginator | undefined;
  sort: MatSort | undefined;
  subscription: Subscription | null = null;

  constructor(private service: TrxService, private typeId: number) {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<Trx[]> {
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

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect(): void {
    if (this.subscription != null) {
      this.subscription.unsubscribe();
    }
  }

  getList(): Observable<Trx[]> {
    let observable = this.service.getListByType(this.typeId);

    observable.subscribe(_data => this.data = _data);
    return observable;
  }

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(_data: Trx[]): Trx[] {
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
  private getSortedData(_data: Trx[]): Trx[] {
    if (!this.sort || !this.sort.active || this.sort.direction === '') {
      return _data;
    }

    return _data.sort((a, b) => {
      const isAsc = this.sort?.direction === 'asc';
      switch (this.sort?.active) {
        case 'id': return compare(a.id!, b.id!, isAsc);
        case 'typeId': return compare(a.typeId!, b.typeId!, isAsc);
        case 'linkId': return compare(a.linkId!, b.linkId!, isAsc);
        case 'timestamp': return compare(a.timestamp!, b.timestamp!, isAsc);
        case 'tsFormat': return compare(a.tsFormat!, b.tsFormat!, isAsc);
        case 'text': return compare(a.text!, b.text!, isAsc);
        case 'value': return compare(+a.value!, +b.value!, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number | Date, b: string | number | Date, isAsc: boolean): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
