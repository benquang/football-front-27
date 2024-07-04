import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardNewsSmallComponent } from './card-news-small.component';

describe('CardNewsSmallComponent', () => {
  let component: CardNewsSmallComponent;
  let fixture: ComponentFixture<CardNewsSmallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardNewsSmallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardNewsSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
