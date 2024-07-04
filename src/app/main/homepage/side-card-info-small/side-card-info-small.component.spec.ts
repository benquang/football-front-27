import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideCardInfoSmallComponent } from './side-card-info-small.component';

describe('SideCardInfoSmallComponent', () => {
  let component: SideCardInfoSmallComponent;
  let fixture: ComponentFixture<SideCardInfoSmallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideCardInfoSmallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideCardInfoSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
