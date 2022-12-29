import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
  title: string = '';
  body: string = '';
  returnTrueLabel: string = '';
  returnFalseLabel: string = '';

  constructor(public dialog: MatDialog) {
  }

  public dialogResult(
    _title: string,
    _body: string,
    _returnTrueLabel: string,
    _returnFalseLabel: string = 'Cancel'): boolean
  {
    const ref = this.dialog.open(DialogComponent);
    const component = ref.componentInstance;

    let result = false;

    component.title = _title;
    component.body = _body;
    component.returnTrueLabel = _returnTrueLabel;
    component.returnFalseLabel = _returnFalseLabel;

    ref.afterClosed().subscribe((_result) => result = _result).unsubscribe();

    return result;
  }
}
