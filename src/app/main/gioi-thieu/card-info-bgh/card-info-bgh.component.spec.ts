import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardInfoBghComponent } from './card-info-bgh.component';

describe('CardInfoBghComponent', () => {
  let component: CardInfoBghComponent;
  let fixture: ComponentFixture<CardInfoBghComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardInfoBghComponent]
    });
    fixture = TestBed.createComponent(CardInfoBghComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
