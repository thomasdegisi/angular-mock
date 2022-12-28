import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Customer } from '../models/customer';
import { CustomersDataSource } from './customers-datasource';
import { CustomerService } from 'src/app/services/customer.service';
import { StatusComponent } from '../status/status.component';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Customer>;
  @ViewChild(StatusComponent) status!: StatusComponent;
  dataSource!: CustomersDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['firstName', 'lastName', 'address', 'city', 'state', 'postalCode'];

  constructor(private customersService: CustomerService) {
  }

  deleteCustomer(id: number): void {
    this.status.clear();
    try {
      this.customersService.deleteCustomer(id).subscribe(() => {
        this.status.showStatus('Deleted customer with id(' + id + ').');
      }).unsubscribe();
    } catch (exception: any) {
      this.status.showError(exception);
    }
  }

  init(): void {
    try {
      this.dataSource = new CustomersDataSource(this.customersService);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.table.dataSource = this.dataSource;
      this.status.showStatus('Got customers.');
    } catch (exception: any) {
      this.status.showError(exception);
    }
  }

  ngAfterViewInit(): void {
    this.init();
  }
}
