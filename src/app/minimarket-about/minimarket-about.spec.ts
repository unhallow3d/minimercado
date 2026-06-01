import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinimarketAbout } from './minimarket-about';

describe('MinimarketAbout', () => {
  let component: MinimarketAbout;
  let fixture: ComponentFixture<MinimarketAbout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MinimarketAbout],
    }).compileComponents();

    fixture = TestBed.createComponent(MinimarketAbout);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
