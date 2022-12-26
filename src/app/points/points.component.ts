import { ActivatedRoute } from '@angular/router';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { GET_LOYALTY_TYPE_ID, INVALID_TYPE_ID, SPEND_LOYALTY_TYPE_ID, Trx } from '../models/trx';
import { PointsDataSource } from './points-datasource';
import { MockTrxService } from 'src/app/mock/services/mock-trx.service';

@Component({
  selector: 'app-points',
  templateUrl: './points.component.html',
  styleUrls: ['./points.component.scss']
})
export class PointsComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Trx>;
  dataSource: PointsDataSource;
  data: Trx[] = [];
  error = false;
  errorMessage = '';
  // Test error message
  // errorMessage = '12345 67890 22345 67890 32345 67890 42345 67890 52345 67890 62345 67890 72345 67890 82345 67890 92345 67890';

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['desc', 'points'];

  constructor(
    private route: ActivatedRoute,
    private trxService: MockTrxService
  ) {
    this.dataSource = new PointsDataSource();
  }

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

    try {
      this.route.url.subscribe((url) => {
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

        this.dataSource = new PointsDataSource();
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.table.dataSource = this.dataSource;
        this.dataSource.setData(this.trxService.getTrxList(trxTypeId));
      });
    } catch (exception: any) {
      window.alert('in catch');
      this.showError(exception.toString());
    }
  }

  ngOnInit(): void {
    this.init();
  }

  ngAfterViewInit(): void {
    this.init();
  }
}
