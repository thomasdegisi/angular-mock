import { Component, OnInit } from '@angular/core';
import { CHRONOLOGY_EVENT_TYPE_ID, Trx } from 'src/app/models/trx';
import { MockTrxService } from 'src/app/mock/services/mock-trx.service';

@Component({
  selector: 'app-chronology',
  templateUrl: './chronology.component.html',
  styleUrls: ['./chronology.component.scss'],
})
export class ChronologyComponent implements OnInit {
  events: Trx[] = [];

  constructor(private trxService: MockTrxService) {
  }

  ngOnInit(): void {
    this.trxService.getTrxList(CHRONOLOGY_EVENT_TYPE_ID)
      .subscribe(trxList => this.events = trxList);
  }
}
