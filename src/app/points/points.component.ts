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
  dataSource!: PointsDataSource;
  data: Trx[] = [];

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['desc', 'points'];

  constructor(
    private route: ActivatedRoute,
    private trxService: MockTrxService
  ) {
  }

  init(): void {
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

      this.trxService.getTrxList(trxTypeId)
        .subscribe(trxList => this.data = trxList);
      this.dataSource = new PointsDataSource(this.data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.table.dataSource = this.dataSource;
    });
  }

  ngOnInit(): void {
    this.init();
  }

  ngAfterViewInit(): void {
    this.init();
  }
}
