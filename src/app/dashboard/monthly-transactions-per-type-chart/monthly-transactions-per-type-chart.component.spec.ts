import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyTransactionsPerTypeChartComponent } from './monthly-transactions-per-type-chart.component';

describe('MonthlyTransactionsPerTypeChartComponent', () => {
  let component: MonthlyTransactionsPerTypeChartComponent;
  let fixture: ComponentFixture<MonthlyTransactionsPerTypeChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MonthlyTransactionsPerTypeChartComponent]
    });
    fixture = TestBed.createComponent(MonthlyTransactionsPerTypeChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
