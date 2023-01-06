import { ActivatedRoute } from '@angular/router';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';

import { DialogComponent } from '../dialog/dialog.component';
import { StatusComponent } from '../status/status.component';
import {
  ALL_TYPES_TYPE_ID,
  CHRONOLOGY_EVENT_TYPE_ID,
  GET_LOYALTY_TYPE_ID,
  INVALID_TYPE_ID,
  SPEND_LOYALTY_TYPE_ID, Trx } from '../models/trx';
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
  dialog!: DialogComponent<Trx>;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns: string[] = ['id', 'text', 'value', 'actions'];
  typeId: number = INVALID_TYPE_ID;

  constructor(
    private route: ActivatedRoute,
    private dataService: TrxService,
    public _dialog: MatDialog
  ) {
  }

  delete(id: number): void {
    this.dialog.deleteDialog(id, this.status, this.dataSource);
  }

  init(): void {
    this.route.url.subscribe((_url) => {
      this.status.clear();

      try {
        switch (_url.toString()) {
          case 'events':
            this.displayedColumns = ['id', 'timestamp', 'tsFormat', 'text', 'actions'];
            this.typeId = CHRONOLOGY_EVENT_TYPE_ID;
            break;
          case 'get-points':
            this.typeId = GET_LOYALTY_TYPE_ID;
            break;
          case 'spend-points':
            this.typeId = SPEND_LOYALTY_TYPE_ID;
            break;
          case 'trxes':
            this.displayedColumns = ['id', 'typeId', 'linkId', 'timestamp', 'tsFormat', 'text', 'value', 'actions'];
            this.typeId = ALL_TYPES_TYPE_ID;
            break;
        }

        this.dataSource = new TrxesDataSource(this.dataService, this.status, this.typeId);
        this.dialog = new DialogComponent(this._dialog, this.dataService);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.table.dataSource = this.dataSource;
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
