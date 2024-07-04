import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBieuDoGiangDayComponent } from './list-bieu-do-giang-day.component';

describe('ListBieuDoGiangDayComponent', () => {
  let component: ListBieuDoGiangDayComponent;
  let fixture: ComponentFixture<ListBieuDoGiangDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListBieuDoGiangDayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListBieuDoGiangDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
