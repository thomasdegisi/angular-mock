import { Component, OnInit } from '@angular/core';
import { CHRONOLOGY_EVENT_TYPE_ID, Trx } from 'src/app/models/trx';
import { TrxService } from 'src/app/services/trx.service';

@Component({
  selector: 'app-chronology',
  templateUrl: './chronology.component.html',
  styleUrls: ['./chronology.component.scss'],
})
export class ChronologyComponent implements OnInit {
  events: Trx[] = [];
  error = false;
  errorMessage = '';
  // Test error message
  // errorMessage = '12345 67890 22345 67890 32345 67890 42345 67890 52345 67890 62345 67890 72345 67890 82345 67890 92345 67890';

  constructor(private trxService: TrxService) {
  }

  clearError(): void {
      this.error = false;
      this.errorMessage = '';
  }

  ngOnInit(): void {
    this.clearError();

    try {
      this.trxService.getTrxList(CHRONOLOGY_EVENT_TYPE_ID)
        .subscribe(trxList => this.events = trxList);
    } catch (exception: any) {
      this.errorMessage = exception.toString();
      this.error = true;
    }
  }
}
