import { ActivatedRoute } from '@angular/router';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { GET_LOYALTY_TYPE_ID, INVALID_TYPE_ID, SPEND_LOYALTY_TYPE_ID, Trx } from '../models/trx';
import { PointsDataSource } from './points-datasource';
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
  dataSource!: PointsDataSource;
  data: Trx[] = [];
  error = false;
  errorMessage = '';
  // Test error message
  // errorMessage = '12345 67890 22345 67890 32345 67890 42345 67890 52345 67890 62345 67890 72345 67890 82345 67890 92345 67890';

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['desc', 'points'];

  constructor(
    private route: ActivatedRoute,
    private trxService: TrxService
  ) {}

  clearError(): void {
    this.error = false;
    this.errorMessage = '';
  }

  showError(message: string) {
    this.errorMessage = message;
    this.error = true;
  }

  init(): void {
    this.clearError();

      this.route.url.subscribe((url) => {
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
      } catch (exception: any) {
        this.showError(exception.toString());
      }
    });
  }

  ngAfterViewInit(): void {
    this.init();
  }
}
