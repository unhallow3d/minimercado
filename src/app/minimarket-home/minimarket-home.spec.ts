import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinimarketHome } from './minimarket-home';

describe('MinimarketHome', () => {
  let component: MinimarketHome;
  let fixture: ComponentFixture<MinimarketHome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MinimarketHome],
    }).compileComponents();

    fixture = TestBed.createComponent(MinimarketHome);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
