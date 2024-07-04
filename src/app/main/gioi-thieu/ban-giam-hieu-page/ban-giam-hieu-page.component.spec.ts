import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BanGiamHieuPageComponent } from './ban-giam-hieu-page.component';

describe('BanGiamHieuPageComponent', () => {
  let component: BanGiamHieuPageComponent;
  let fixture: ComponentFixture<BanGiamHieuPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BanGiamHieuPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BanGiamHieuPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
