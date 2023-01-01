import { AfterViewInit, Component, OnDestroy, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { CHRONOLOGY_EVENT_TYPE_ID, Trx } from 'src/app/models/trx';
import { StatusComponent } from '../status/status.component';
import { TrxService } from 'src/app/services/trx.service';

@Component({
  selector: 'app-chronology',
  templateUrl: './chronology.component.html',
  styleUrls: ['./chronology.component.scss'],
})
export class ChronologyComponent implements AfterViewInit, OnDestroy {
  @ViewChild(StatusComponent) status!: StatusComponent;
  events: Trx[] = [];
  subscription: Subscription | null = null;

  constructor(private trxService: TrxService) {
  }

  ngAfterViewInit(): void {
    try {
      this.subscription = this.trxService.getListByType(CHRONOLOGY_EVENT_TYPE_ID)
        .subscribe(trxList => {
          this.status.clear();
          this.events = trxList;
          this.status.showStatus('Got ' + trxList.length + ' events.');
        });
    } catch (exception: any) {
      this.status.showError(exception);
    }
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
