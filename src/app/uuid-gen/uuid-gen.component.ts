import { Component } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import * as uuid from 'uuid';

@Component({
  selector: 'app-uuid-gen',
  templateUrl: './uuid-gen.component.html',
  styleUrls: ['./uuid-gen.component.scss']
})
export class UuidGenComponent {
  constructor(private uuidShow: MatBottomSheet) {}

  showUUID(): void {
    this.uuidShow.open(UuidShowComponent);
  }
}

@Component({
  selector: 'app-uuid-show',
  templateUrl: './uuid-show.component.html',
  styleUrls: ['./uuid-show.component.scss']
})
export class UuidShowComponent {
  uuid: string = uuid.v4();

  constructor(private uuidShowRef: MatBottomSheetRef<UuidShowComponent>) {}

  close() {
    this.uuidShowRef.dismiss();
  }

  getUUID(): string {
    return this.uuid;
  }
}
