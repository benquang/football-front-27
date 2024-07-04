import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThuNgoPageComponent } from './thu-ngo-page.component';

describe('ThuNgoPageComponent', () => {
  let component: ThuNgoPageComponent;
  let fixture: ComponentFixture<ThuNgoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThuNgoPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThuNgoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
