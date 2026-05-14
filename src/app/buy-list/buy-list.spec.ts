import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyList } from './buy-list';

describe('BuyList', () => {
  let component: BuyList;
  let fixture: ComponentFixture<BuyList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BuyList],
    }).compileComponents();

    fixture = TestBed.createComponent(BuyList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
