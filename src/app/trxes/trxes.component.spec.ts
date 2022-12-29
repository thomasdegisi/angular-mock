import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrxesComponent } from './trxes.component';

describe('TrxesComponent', () => {
  let component: TrxesComponent;
  let fixture: ComponentFixture<TrxesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TrxesComponent ],
      imports: [
        HttpClientTestingModule,
        MatDialogModule,
        MatPaginatorModule,
        MatSortModule,
        MatTableModule,
        NoopAnimationsModule,
        RouterTestingModule,
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
