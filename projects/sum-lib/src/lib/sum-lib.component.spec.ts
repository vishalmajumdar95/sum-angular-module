import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SumLibComponent } from './sum-lib.component';

describe('SumLibComponent', () => {
  let component: SumLibComponent;
  let fixture: ComponentFixture<SumLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SumLibComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SumLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
