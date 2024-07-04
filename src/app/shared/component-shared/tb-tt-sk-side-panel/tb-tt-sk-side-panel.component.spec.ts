import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TbTtSkSidePanelComponent } from './tb-tt-sk-side-panel.component';

describe('TbTtSkSidePanelComponent', () => {
  let component: TbTtSkSidePanelComponent;
  let fixture: ComponentFixture<TbTtSkSidePanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ TbTtSkSidePanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TbTtSkSidePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
