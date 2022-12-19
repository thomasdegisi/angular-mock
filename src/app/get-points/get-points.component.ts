import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { GET_LOYALTY_TYPE_ID, Trx } from '../models/trx';
import { GetPointsDataSource } from './get-points-datasource';
import { MockTrxService } from 'src/app/mock/services/mock-trx.service';

@Component({
  selector: 'app-get-points',
  templateUrl: './get-points.component.html',
  styleUrls: ['./get-points.component.scss']
})
export class GetPointsComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Trx>;
  dataSource: GetPointsDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['desc', 'points'];

  constructor(private trxService: MockTrxService) {
    let data: Trx[] = trxService.getTrxList(GET_LOYALTY_TYPE_ID);
    this.dataSource = new GetPointsDataSource(data);
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
