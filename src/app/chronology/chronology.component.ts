import { ChangeDetectionStrategy, Component, Inject, LOCALE_ID } from '@angular/core';
import { formatDate } from '@angular/common';
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

  constructor(
    @Inject(LOCALE_ID) private locale: string,
    private trxService: MockTrxService
  ) {
    this.events = trxService.getTrxList(CHRONOLOGY_EVENT_TYPE_ID);
  }

  fmtChronologyEvent(chronologyEvent: Trx): string {
    return formatDate(chronologyEvent.timestamp, chronologyEvent.tsFormat, this.locale) +
      ': ' + chronologyEvent.text;
  }
}
