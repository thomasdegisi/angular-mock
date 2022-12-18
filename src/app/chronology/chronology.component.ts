import { ChangeDetectionStrategy, Component, Inject, LOCALE_ID } from '@angular/core';
import { formatDate } from '@angular/common';
import { MockTrxService } from 'src/app/mock/services/mock-trx.service';
import { CHRONOLOGY_ITEM_TYPE_ID, Trx } from 'src/app/models/trx';

@Component({
  selector: 'app-chronology',
  templateUrl: './chronology.component.html',
  styleUrls: ['./chronology.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChronologyComponent {
  items: Trx[];

  constructor(
    @Inject(LOCALE_ID) private locale: string,
    private trxService: MockTrxService
  ) {
    this.items = trxService.getTrxList(CHRONOLOGY_ITEM_TYPE_ID);
  }

  fmtChronologyItem(chronologyItem: Trx): string {
    return formatDate(chronologyItem.timestamp, chronologyItem.tsFormat, this.locale) +
      ': ' + chronologyItem.text;
  }
}
