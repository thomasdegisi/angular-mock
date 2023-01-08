import { ActivatedRoute, Router } from '@angular/router';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { delay, Observable, tap } from 'rxjs';

import { MAX_TRX_TYPE_ID, NEW, Trx, TYPE_TYPE_ID } from '../models/trx';
import { TrxesDataSource } from '../trxes/trxes-datasource';
import { TrxService } from '../services/trx.service';
import { StatusComponent } from '../status/status.component';

@Component({
  selector: 'app-trx',
  templateUrl: './trx.component.html',
  styleUrls: ['./trx.component.scss']
})
export class TrxComponent implements AfterViewInit {
  @ViewChild(StatusComponent) status!: StatusComponent;
  baseUrl: string = '';
  dataSource!: TrxesDataSource;
  item: Trx = NEW;
  minTypeId = TYPE_TYPE_ID;
  maxTypeId = MAX_TRX_TYPE_ID;
  form = this.fb.group({
    id: [this.item.id],
    typeId: [this.item.typeId, Validators.required],
    linkId: [this.item.linkId],
    timestamp: [this.item.timestamp],
    tsFormat: [this.item.tsFormat],
    text: [this.item.text],
    value: [this.item.value],
  });

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private service: TrxService) {
    const urlSegments = this.route.snapshot.url;
    const count = urlSegments.length;

    for (var i = 0; i < count - 1; i++) {
      if (i > 0) {
        this.baseUrl += '/';
      }

      this.baseUrl += urlSegments[i].toString();
    }
  }

  getMessageTail(): string {
    return ' transaction with id(' + this.item.id + ') and typeId(' + this.item.typeId + ').';
  }

  get(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    if (id != 0) {
      this.service.getById(id).subscribe(_item => {
        this.item = _item;
        this.form = this.fb.group({
          id: [_item.id],
          typeId: [_item.typeId, Validators.required],
          linkId: [_item.linkId],
          timestamp: [_item.timestamp],
          tsFormat: [_item.tsFormat],
          text: [_item.text],
          value: [_item.value],
        });
      });
    }
  }

  goBack(): void {
    this.router.navigateByUrl(this.baseUrl);
  }

  ngAfterViewInit(): void {
    this.get();
  }

  onSubmit(): void {
    this.item = this.form.getRawValue();

    let messageHead: string;
    let observable: Observable<Trx>;

    if (this.item.id == null) {
      observable = this.service.add(this.item);
      messageHead = 'Added';
    } else {
      observable = this.service.update(this.item);
      messageHead = 'Updated';
    }

    observable.pipe(
      tap((_item) => {
        this.dataSource = new TrxesDataSource(this.service, this.status);

        if (this.item.id == null) {
          this.item = _item;
          this.dataSource.add(_item);
        } else {
          this.dataSource.update(_item);
        }
        this.status.statusMessage = messageHead + this.getMessageTail();
      }),
      delay(2000),
    ).subscribe(() => this.goBack());
  }
}
