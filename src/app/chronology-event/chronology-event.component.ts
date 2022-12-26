import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import * as uuid from 'uuid';

@Component({
  selector: 'app-chronology-event',
  templateUrl: './chronology-event.component.html',
  styleUrls: ['./chronology-event.component.scss']
})
export class ChronologyEventComponent {
  eventForm = this.fb.group({
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
