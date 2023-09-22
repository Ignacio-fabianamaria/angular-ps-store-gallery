import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPricingComponent } from './card-pricing.component';

describe('CardPricingComponent', () => {
  let component: CardPricingComponent;
  let fixture: ComponentFixture<CardPricingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardPricingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardPricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
