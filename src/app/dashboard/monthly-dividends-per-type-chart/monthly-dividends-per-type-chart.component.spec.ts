import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyDividendsPerTypeChartComponent } from './monthly-dividends-per-type-chart.component';

describe('MonthlyDividendsPerTypeChartComponent', () => {
  let component: MonthlyDividendsPerTypeChartComponent;
  let fixture: ComponentFixture<MonthlyDividendsPerTypeChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MonthlyDividendsPerTypeChartComponent]
    });
    fixture = TestBed.createComponent(MonthlyDividendsPerTypeChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
