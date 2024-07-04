import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideCardNewsBigComponent } from './slide-card-news-big.component';

describe('SlideCardNewsBigComponent', () => {
  let component: SlideCardNewsBigComponent;
  let fixture: ComponentFixture<SlideCardNewsBigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SlideCardNewsBigComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SlideCardNewsBigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
