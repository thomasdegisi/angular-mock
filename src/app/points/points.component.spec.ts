import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { PointsComponent } from './points.component';

describe('PointsComponent', () => {
  let component: PointsComponent;
  let fixture: ComponentFixture<PointsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PointsComponent ],
      imports: [
        HttpClientTestingModule,
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
    fixture = TestBed.createComponent(PointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
