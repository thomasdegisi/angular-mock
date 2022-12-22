import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { CustomersDataSource } from './customers-datasource';
import { Customer } from '../models/customer';
import { MockCustomersService } from '../mock/mock-customers.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Customer>;
  data: Customer[] = [];
  dataSource: CustomersDataSource

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['firstName', 'lastName', 'address', 'city', 'state', 'postalCode'];

  constructor(private customersService: MockCustomersService) {
    this.dataSource = new CustomersDataSource();
  }

  init(): void {
    this.dataSource.setData(this.customersService.getCustomers());
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  ngOnInit(): void {
    this.init();
  }

  ngAfterViewInit(): void {
    this.init();
  }
}
