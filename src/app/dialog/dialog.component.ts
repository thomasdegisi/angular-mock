import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of, tap } from 'rxjs';

import { DataService } from '../services/data.service';
import { DbType } from '../models/db-type';
import { StatusComponent } from '../status/status.component';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent<T extends DbType> {
  title: string = '';
  body: string = '';
  returnTrueLabel: string = '';
  returnFalseLabel: string = '';

  constructor(public dialog: MatDialog) {
  }

  dialogResult(
    _title: string,
    _body: string,
    _returnTrueLabel: string,
    _returnFalseLabel: string = 'Cancel'): Observable<boolean> {
    const ref = this.dialog.open(DialogComponent);
    const component = ref.componentInstance;

    let result = false;

    component.title = _title;
    component.body = _body;
    component.returnTrueLabel = _returnTrueLabel;
    component.returnFalseLabel = _returnFalseLabel;

    return ref.afterClosed();
  }

  deleteDialog(id: number, status: StatusComponent, service: DataService<T>): void {
    let idDisplay: string = service.idDisplay(id);

    this.dialogResult('', 'Delete' + idDisplay + '?', 'Delete').subscribe((deleteIt) => {
      if (deleteIt) {
        status.clear();
        service.delete(id).pipe(
          tap(() => status.showStatus('Deleted ' + idDisplay + '.')),
          catchError((err) => {
            status.showError(err);
            return of([]);
          }),
        ).subscribe();
      }
    });
  }
}
