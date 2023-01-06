import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of, tap } from 'rxjs';

import { DbDataSource } from '../services/db-datasource';
import { DbService } from '../services/db.service';
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

  constructor(public dialog: MatDialog, private dataService: DbService<T>) {
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

  deleteDialog(id: number, status: StatusComponent, dataSource: DbDataSource<T>): void {
    let idDisplay: string = this.dataService.idDisplay(id);

    this.dialogResult('', 'Delete' + idDisplay + '?', 'Delete').subscribe((_deleteIt) => {
      if (_deleteIt) {
        status.clear();
        this.dataService.delete(id).pipe(
          tap(() => dataSource.delete(id)),
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
