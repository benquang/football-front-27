import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSmallImageComponent } from './card-small-image.component';

describe('CardSmallImageComponent', () => {
  let component: CardSmallImageComponent;
  let fixture: ComponentFixture<CardSmallImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardSmallImageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardSmallImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
