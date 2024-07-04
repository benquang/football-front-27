import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrungTamDlPageComponent } from './trung-tam-dl-page.component';

describe('TrungTamDlPageComponent', () => {
  let component: TrungTamDlPageComponent;
  let fixture: ComponentFixture<TrungTamDlPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrungTamDlPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrungTamDlPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
