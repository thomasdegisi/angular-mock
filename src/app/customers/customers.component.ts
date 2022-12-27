import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Customer } from '../models/customer';
import { CustomersDataSource } from './customers-datasource';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Customer>;
  dataSource!: CustomersDataSource;
  error = false;
  errorMessage = '';
  // Test error message
  // errorMessage = '12345 67890 22345 67890 32345 67890 42345 67890 52345 67890 62345 67890 72345 67890 82345 67890 92345 67890';

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['firstName', 'lastName', 'address', 'city', 'state', 'postalCode'];

  constructor(private customersService: CustomerService) {
  }

  clearError(): void {
    this.error = false;
    this.errorMessage = '';
  }

  init(): void {
    this.clearError();

    try {
      this.dataSource = new CustomersDataSource(this.customersService);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.table.dataSource = this.dataSource;
    } catch (exception: any) {
      this.errorMessage = exception.toString();
      this.error = true;
    }
  }

  ngAfterViewInit(): void {
    this.init();
  }
}
