import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';

import { UuidGenComponent } from './uuid-gen.component';

describe('UuidGenComponent', () => {
  let component: UuidGenComponent;
  let fixture: ComponentFixture<UuidGenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UuidGenComponent ],
      imports: [ MatBottomSheetModule ],
      schemas: [NO_ERRORS_SCHEMA],
    })
    .compileComponents();

    fixture = TestBed.createComponent(UuidGenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
