import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { DialogComponent } from './dialog.component';
import { Trx } from '../models/trx';

describe('DialogComponent', () => {
  let component: DialogComponent<Trx>;
  let fixture: ComponentFixture<DialogComponent<Trx>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogComponent ],
      imports: [ MatDialogModule ],
      schemas: [NO_ERRORS_SCHEMA],
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
