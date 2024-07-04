import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListThuVienAnhUteComponent } from './list-thu-vien-anh-ute.component';

describe('ListThuVienAnhUteComponent', () => {
  let component: ListThuVienAnhUteComponent;
  let fixture: ComponentFixture<ListThuVienAnhUteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListThuVienAnhUteComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListThuVienAnhUteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
