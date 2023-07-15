import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyTransactionsChartComponent } from './monthly-transactions-chart.component';

describe('MonthlyTransactionsChartComponent', () => {
  let component: MonthlyTransactionsChartComponent;
  let fixture: ComponentFixture<MonthlyTransactionsChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MonthlyTransactionsChartComponent]
    });
    fixture = TestBed.createComponent(MonthlyTransactionsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
