import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoiTacDoiNgoaiPageComponent } from './doi-tac-doi-ngoai-page.component';

describe('DoiTacDoiNgoaiPageComponent', () => {
  let component: DoiTacDoiNgoaiPageComponent;
  let fixture: ComponentFixture<DoiTacDoiNgoaiPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoiTacDoiNgoaiPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoiTacDoiNgoaiPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
