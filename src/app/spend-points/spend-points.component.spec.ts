import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpendPointsComponent } from './spend-points.component';

describe('SpendPointsComponent', () => {
  let component: SpendPointsComponent;
  let fixture: ComponentFixture<SpendPointsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpendPointsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpendPointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
