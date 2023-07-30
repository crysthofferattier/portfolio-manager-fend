import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetsChartComponent } from './assets-chart.component';

describe('AssetsChartComponent', () => {
  let component: AssetsChartComponent;
  let fixture: ComponentFixture<AssetsChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssetsChartComponent]
    });
    fixture = TestBed.createComponent(AssetsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
