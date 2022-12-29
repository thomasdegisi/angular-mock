import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Customer } from '../models/customer';
import { CustomersDataSource } from './customers-datasource';
import { CustomerService } from 'src/app/services/customer.service';
import { DialogComponent } from '../dialog/dialog.component';
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
  dialog!: DialogComponent;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'firstName', 'lastName', 'address', 'city', 'state', 'postalCode', 'actions'];

  constructor(private customersService: CustomerService, public _dialog: MatDialog) {
    this.dialog = new DialogComponent(_dialog);
  }

  deleteCustomer(id: number): void {
    const idDisplay = ' customer with id(' + id + ')';

    this.dialog.dialogResult('', 'Delete' + idDisplay + '?', 'Delete').subscribe((deleteIt) => {
      if (deleteIt) {
        this.status.clear();
        try {
          this.customersService.deleteCustomer(id).subscribe(() => {
            this.dataSource.data.filter((customer) => customer.id != id);
            this.status.showStatus('Deleted' + idDisplay + '.');
          });
        } catch (exception: any) {
          this.status.showError(exception);
        }
      }
    });
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
