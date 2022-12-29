import { ActivatedRoute } from '@angular/router';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import {
  CHRONOLOGY_EVENT_TYPE_ID,
  GET_LOYALTY_TYPE_ID,
  INVALID_TYPE_ID,
  SPEND_LOYALTY_TYPE_ID, Trx } from '../models/trx';
import { DialogComponent } from '../dialog/dialog.component';
import { StatusComponent } from '../status/status.component';
import { TrxesDataSource } from './trxes-datasource';
import { TrxService } from '../services/trx.service';

@Component({
  selector: 'app-trxes',
  templateUrl: './trxes.component.html',
  styleUrls: ['./trxes.component.scss'],
})
export class TrxesComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Trx>;
  @ViewChild(StatusComponent) status!: StatusComponent;
  dataSource!: TrxesDataSource;
  data: Trx[] = [];
  dialog!: DialogComponent<Trx>;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns: string[] = [];

  constructor(
    private route: ActivatedRoute,
    private dataService: TrxService,
    public _dialog: MatDialog
  ) {
    this.dialog = new DialogComponent(_dialog);
  }

  delete(id: number): void {
    this.dialog.deleteDialog(id, this.status, this.dataService);
  }

  init(): void {
    this.route.url.subscribe((url) => {
      this.status.clear();
      this.displayedColumns = ['id', 'desc', 'points', 'actions'];

      try {
        let trxTypeId: number = INVALID_TYPE_ID;

        switch (url.toString()) {
          case 'events':
            trxTypeId = CHRONOLOGY_EVENT_TYPE_ID;
            this.displayedColumns = ['id', 'timestamp', 'tsFormat', 'desc', 'actions'];
            break;
          case 'get-points':
            trxTypeId = GET_LOYALTY_TYPE_ID;
            break;
          case 'spend-points':
            trxTypeId = SPEND_LOYALTY_TYPE_ID;
            break;
          default:
            break;
        }

        this.dataSource = new TrxesDataSource(this.dataService, trxTypeId);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.table.dataSource = this.dataSource;
        this.status.showStatus('Got trxes.');
      } catch (exception: any) {
        this.status.showError(exception);
      }
    });
  }

  ngAfterViewInit(): void {
    this.init();
  }

  setCols(cols: string[]) {
    this.displayedColumns
  }
}
