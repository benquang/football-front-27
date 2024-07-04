import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DangDoanThePageComponent } from './dang-doan-the-page.component';

describe('DangDoanThePageComponent', () => {
  let component: DangDoanThePageComponent;
  let fixture: ComponentFixture<DangDoanThePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DangDoanThePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DangDoanThePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
