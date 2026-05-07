import { TestBed } from '@angular/core/testing';

import { PizzaOfTheDay } from './pizza-of-the-day';

describe('PizzaOfTheDay', () => {
  let service: PizzaOfTheDay;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PizzaOfTheDay);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
