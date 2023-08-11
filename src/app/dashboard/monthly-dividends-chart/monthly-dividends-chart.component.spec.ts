import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyDividendsChartComponent } from './monthly-dividends-chart.component';

describe('MonthlyDividendsChartComponent', () => {
  let component: MonthlyDividendsChartComponent;
  let fixture: ComponentFixture<MonthlyDividendsChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MonthlyDividendsChartComponent]
    });
    fixture = TestBed.createComponent(MonthlyDividendsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
