import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TinTucLienQuanComponent } from './tin-tuc-lien-quan.component';

describe('TinTucLienQuanComponent', () => {
  let component: TinTucLienQuanComponent;
  let fixture: ComponentFixture<TinTucLienQuanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ TinTucLienQuanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TinTucLienQuanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
