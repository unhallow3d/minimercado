import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinimarketProducts } from './minimarket-products';

describe('MinimarketProducts', () => {
  let component: MinimarketProducts;
  let fixture: ComponentFixture<MinimarketProducts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MinimarketProducts],
    }).compileComponents();

    fixture = TestBed.createComponent(MinimarketProducts);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
