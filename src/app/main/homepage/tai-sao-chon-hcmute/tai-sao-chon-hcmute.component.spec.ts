import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaiSaoChonHcmuteComponent } from './tai-sao-chon-hcmute.component';

describe('TaiSaoChonHcmuteComponent', () => {
  let component: TaiSaoChonHcmuteComponent;
  let fixture: ComponentFixture<TaiSaoChonHcmuteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaiSaoChonHcmuteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaiSaoChonHcmuteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
