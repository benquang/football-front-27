import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormChuongTrinhDaoTaoComponent } from './form-chuong-trinh-dao-tao.component';

describe('FormChuongTrinhDaoTaoComponent', () => {
  let component: FormChuongTrinhDaoTaoComponent;
  let fixture: ComponentFixture<FormChuongTrinhDaoTaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormChuongTrinhDaoTaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormChuongTrinhDaoTaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
