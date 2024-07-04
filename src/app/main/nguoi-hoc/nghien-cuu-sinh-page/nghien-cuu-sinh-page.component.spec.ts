import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NghienCuuSinhPageComponent } from './nghien-cuu-sinh-page.component';

describe('NghienCuuSinhPageComponent', () => {
  let component: NghienCuuSinhPageComponent;
  let fixture: ComponentFixture<NghienCuuSinhPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NghienCuuSinhPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NghienCuuSinhPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
