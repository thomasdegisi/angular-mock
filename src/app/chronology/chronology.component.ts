import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CHRONOLOGY_EVENT_TYPE_ID, Trx } from 'src/app/models/trx';
import { MockTrxService } from 'src/app/mock/services/mock-trx.service';

@Component({
  selector: 'app-chronology',
  templateUrl: './chronology.component.html',
  styleUrls: ['./chronology.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChronologyComponent {
  events: Trx[];

  constructor(private trxService: MockTrxService) {
    this.events = trxService.getTrxList(CHRONOLOGY_EVENT_TYPE_ID);
  }
}
