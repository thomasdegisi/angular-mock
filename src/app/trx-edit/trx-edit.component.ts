import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-trx-edit',
  templateUrl: './trx-edit.component.html',
  styleUrls: ['./trx-edit.component.scss']
})
export class TrxEditComponent {
  trxEdit = this.fb.group({
    id: [null, Validators.required],
    timestamp: [new Date(), Validators.required],
    tsFormat: ['yyyy-MM-dd', Validators.required],
    text: [null, Validators.required],
  });

  constructor(private fb: FormBuilder) {}

  onSubmit(): void {
    alert('Thanks!');
  }
}
