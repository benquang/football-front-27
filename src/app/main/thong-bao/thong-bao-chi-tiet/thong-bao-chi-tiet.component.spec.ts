import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThongBaoChiTietComponent } from './thong-bao-chi-tiet.component';

describe('ThongBaoChiTietComponent', () => {
  let component: ThongBaoChiTietComponent;
  let fixture: ComponentFixture<ThongBaoChiTietComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThongBaoChiTietComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThongBaoChiTietComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
