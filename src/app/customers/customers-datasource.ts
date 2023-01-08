import { Injectable } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Sort } from '@angular/material/sort';
import { Observable } from 'rxjs';

import { Customer } from '../models/customer';
import { DbDataSource } from '../services/db-datasource';

/**
 * Data source for the Customers view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
@Injectable({
  providedIn: 'root'
})
export class CustomersDataSource extends DbDataSource<Customer> {

  getList(): Observable<Customer[]> {
    let observable = this.service.getList();

    observable.subscribe(_data => {
      this.data = _data;
      this.status.statusMessage = 'Got ' + _data.length + ' customers.';
    });
    return observable;
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  getSortedData(_data: Customer[] | PageEvent | Sort): Customer[] {
    if (Array.isArray(_data)) {
      if (!this.sort || !this.sort.active || this.sort.direction === '') {
        return _data;
      }

      return _data.sort((a, b) => {
        const isAsc = this.sort?.direction === 'asc';
        switch (this.sort?.active) {
          case 'id': return compare(a.id!, b.id!, isAsc);
          case 'firstName': return compare(a.firstName!, b.firstName!, isAsc);
          case 'lastName': return compare(a.lastName!, b.lastName!, isAsc);
          case 'address': return compare(a.address!, b.address!, isAsc);
          case 'address2': return compare(a.address2!, b.address2!, isAsc);
          case 'city': return compare(a.city!, b.city!, isAsc);
          case 'state': return compare(a.state!, b.state!, isAsc);
          case 'postalCode': return compare(a.postalCode!, b.postalCode!, isAsc);
          default: return 0;
        }
      });
    } else {
      return this.getSortedData(this.data);
    }
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
