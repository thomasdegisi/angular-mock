import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAX_TRX_TYPE_ID, TYPE_TYPE_ID } from '../models/trx';

@Component({
  selector: 'app-trx',
  templateUrl: './trx.component.html',
  styleUrls: ['./trx.component.scss']
})
export class TrxComponent {
  minTypeId = TYPE_TYPE_ID;
  maxTypeId = MAX_TRX_TYPE_ID;
  trx = this.fb.group({
    id: [null, Validators.required],
    typeId: [0, Validators.required],
    linkId: [0, Validators.required],
    timestamp: [new Date(), Validators.required],
    tsFormat: ['yyyy-MM-dd', Validators.required],
    text: [null, Validators.required],
    value: [0, Validators.required],
  });

  constructor(private fb: FormBuilder) {}

  onSubmit(): void {
    alert('Thanks!');
  }
}
