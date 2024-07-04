import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoatDongTaiHcmuteComponent } from './hoat-dong-tai-hcmute.component';

describe('HoatDongTaiHcmuteComponent', () => {
  let component: HoatDongTaiHcmuteComponent;
  let fixture: ComponentFixture<HoatDongTaiHcmuteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoatDongTaiHcmuteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HoatDongTaiHcmuteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
