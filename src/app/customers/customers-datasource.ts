import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, merge, Subscription } from 'rxjs';
import { Customer } from '../models/customer';
import { CustomerService } from 'src/app/services/customer.service';

/**
 * Data source for the Customers view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class CustomersDataSource extends DataSource<Customer> {
  paginator: MatPaginator | undefined;
  sort: MatSort | undefined;
  subscription: Subscription | null = null;

  constructor(private customersService: CustomerService) {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<Customer[]> {
    if (this.paginator && this.sort) {
      // Combine everything that affects the rendered data into one update
      // stream for the data-table to consume.
      let observable = merge(this.customersService.getCustomers(), this.paginator.page, this.sort.sortChange)
        .pipe(map((data) => {
          return this.getPagedData(this.getSortedData(data));
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

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: Customer[]): Customer[] {
    if (this.paginator) {
      const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
      return data.splice(startIndex, this.paginator.pageSize);
    } else {
      return data;
    }
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: Customer[] | PageEvent | Sort): Customer[] {
    if (Array.isArray(data)) {
      if (!this.sort || !this.sort.active || this.sort.direction === '') {
        return data;
      }

      return data.sort((a, b) => {
        const isAsc = this.sort?.direction === 'asc';
        switch (this.sort?.active) {
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
      return [];
    }
  }
}

function compare(a: string, b: string, isAsc: boolean): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
