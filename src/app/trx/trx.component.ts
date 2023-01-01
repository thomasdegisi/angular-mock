import { ActivatedRoute } from '@angular/router';
import { AfterViewInit, Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Location } from '@angular/common';

import { MAX_TRX_TYPE_ID, NEW, Trx, TYPE_TYPE_ID } from '../models/trx';
import { TrxService } from '../services/trx.service';

@Component({
  selector: 'app-trx',
  templateUrl: './trx.component.html',
  styleUrls: ['./trx.component.scss']
})
export class TrxComponent implements AfterViewInit {
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
    private location: Location,
    private service: TrxService) {}

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
    this.location.back();
  }

  ngAfterViewInit(): void {
    this.get();
  }

  onSubmit(): void {
    this.item = this.form.getRawValue();

    if (this.item.id == null) {
      this.service.add(this.item);
    } else {
      this.service.update(this.item);
    }

    this.goBack();
  }
}
