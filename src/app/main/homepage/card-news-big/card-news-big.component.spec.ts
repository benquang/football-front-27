import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardNewsBigComponent } from './card-news-big.component';

describe('CardNewsBigComponent', () => {
  let component: CardNewsBigComponent;
  let fixture: ComponentFixture<CardNewsBigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardNewsBigComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardNewsBigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
