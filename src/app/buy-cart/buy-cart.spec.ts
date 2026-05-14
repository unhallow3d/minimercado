import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyCart } from './buy-cart';

describe('BuyCart', () => {
  let component: BuyCart;
  let fixture: ComponentFixture<BuyCart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BuyCart],
    }).compileComponents();

    fixture = TestBed.createComponent(BuyCart);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
