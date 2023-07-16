import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDividendsComponent } from './add-dividends.component';

describe('AddDividendsComponent', () => {
  let component: AddDividendsComponent;
  let fixture: ComponentFixture<AddDividendsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddDividendsComponent]
    });
    fixture = TestBed.createComponent(AddDividendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
