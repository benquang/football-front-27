import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormLoaiHinhDaoTaoComponent } from './form-loai-hinh-dao-tao.component';

describe('FormLoaiHinhDaoTaoComponent', () => {
  let component: FormLoaiHinhDaoTaoComponent;
  let fixture: ComponentFixture<FormLoaiHinhDaoTaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormLoaiHinhDaoTaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormLoaiHinhDaoTaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
