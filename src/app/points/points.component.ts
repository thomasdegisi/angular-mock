import { ActivatedRoute } from '@angular/router';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { GET_LOYALTY_TYPE_ID, INVALID_TYPE_ID, SPEND_LOYALTY_TYPE_ID, Trx } from '../models/trx';
import { PointsDataSource } from './points-datasource';
import { StatusComponent } from '../status/status.component';
import { TrxService } from '../services/trx.service';

@Component({
  selector: 'app-points',
  templateUrl: './points.component.html',
  styleUrls: ['./points.component.scss']
})
export class PointsComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Trx>;
  @ViewChild(StatusComponent) status!: StatusComponent;
  dataSource!: PointsDataSource;
  data: Trx[] = [];

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'desc', 'points', 'actions'];

  constructor(
    private route: ActivatedRoute,
    private trxService: TrxService
  ) {}

  deletePoints(id: number): void {
    this.status.clear();
    try {
      this.trxService.deleteTrx(id).subscribe(() => {
        this.status.showStatus('Deleted points transaction model with id(' + id + ').');
      }).unsubscribe();
    } catch (exception: any) {
      this.status.showError(exception);
    }
  }

  init(): void {
    this.route.url.subscribe((url) => {
      this.status.clear();

      try {
        let trxTypeId: number = INVALID_TYPE_ID;

        switch (url.toString()) {
          case 'get-points':
            trxTypeId = GET_LOYALTY_TYPE_ID;
            break;
          case 'spend-points':
            trxTypeId = SPEND_LOYALTY_TYPE_ID;
            break;
          default:
            break;
        }

        this.dataSource = new PointsDataSource(this.trxService, trxTypeId);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.table.dataSource = this.dataSource;
        this.status.showStatus('Got points.');
      } catch (exception: any) {
        this.status.showError(exception);
      }
    });
  }

  ngAfterViewInit(): void {
    this.init();
  }
}
