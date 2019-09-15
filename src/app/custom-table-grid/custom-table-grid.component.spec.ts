import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomTableGridComponent } from './custom-table-grid.component';

describe('CustomTableGridComponent', () => {
  let component: CustomTableGridComponent;
  let fixture: ComponentFixture<CustomTableGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomTableGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomTableGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
