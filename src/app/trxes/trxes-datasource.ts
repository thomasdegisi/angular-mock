import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { DbDataSource } from '../services/db-datasource';
import { StatusComponent } from '../status/status.component';
import { Trx } from '../models/trx';
import { TrxService } from '../services/trx.service';

/**
 * Data source for the Trxes view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
@Injectable({
  providedIn: 'root'
})
export class TrxesDataSource extends DbDataSource<Trx> {
  public typeId!: number;

  constructor(public override service: TrxService, public override status: StatusComponent) {
    super(service, status);
  }

  getList(): Observable<Trx[]> {
    let observable = this.service.getListByType(this.typeId);

    observable.subscribe(_data => {
      this.data = _data;
      this.status.statusMessage = 'Got ' + _data.length + ' transactions.';
    });
    return observable;
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  public getSortedData(_data: Trx[]): Trx[] {
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
