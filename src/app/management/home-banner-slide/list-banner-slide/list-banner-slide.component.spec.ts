import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBannerSlideComponent } from './list-banner-slide.component';

describe('ListBannerSlideComponent', () => {
  let component: ListBannerSlideComponent;
  let fixture: ComponentFixture<ListBannerSlideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListBannerSlideComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBannerSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
