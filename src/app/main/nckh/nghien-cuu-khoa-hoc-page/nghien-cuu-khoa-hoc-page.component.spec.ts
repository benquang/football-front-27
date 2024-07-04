import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NghienCuuKhoaHocPageComponent } from './nghien-cuu-khoa-hoc-page.component';

describe('NghienCuuKhoaHocPageComponent', () => {
  let component: NghienCuuKhoaHocPageComponent;
  let fixture: ComponentFixture<NghienCuuKhoaHocPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NghienCuuKhoaHocPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NghienCuuKhoaHocPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
