import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { ChronologyComponent } from './chronology.component';

describe('ChronologyComponent', () => {
  let component: ChronologyComponent;
  let fixture: ComponentFixture<ChronologyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChronologyComponent ],
      imports: [ HttpClientTestingModule ],
      schemas: [NO_ERRORS_SCHEMA],
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChronologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
