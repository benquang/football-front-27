import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNhomNganhDaoTaoComponent } from './form-nhom-nganh-dao-tao.component';

describe('FormNhomNganhDaoTaoComponent', () => {
  let component: FormNhomNganhDaoTaoComponent;
  let fixture: ComponentFixture<FormNhomNganhDaoTaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormNhomNganhDaoTaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormNhomNganhDaoTaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
