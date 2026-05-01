import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerInfoForm } from './customer-info-form';

describe('CustomerInfoForm', () => {
  let component: CustomerInfoForm;
  let fixture: ComponentFixture<CustomerInfoForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerInfoForm],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomerInfoForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
