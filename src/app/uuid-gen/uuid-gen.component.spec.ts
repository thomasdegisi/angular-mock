import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UuidGenComponent } from './uuid-gen.component';

describe('UuidGenComponent', () => {
  let component: UuidGenComponent;
  let fixture: ComponentFixture<UuidGenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UuidGenComponent ]
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
