import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChiTietSuKienComponent } from './chi-tiet-su-kien.component';

describe('ChiTietSuKienComponent', () => {
  let component: ChiTietSuKienComponent;
  let fixture: ComponentFixture<ChiTietSuKienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChiTietSuKienComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChiTietSuKienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
