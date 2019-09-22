import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChecklistTemplateOneComponent } from './checklist-template-one.component';

describe('ChecklistTemplateOneComponent', () => {
  let component: ChecklistTemplateOneComponent;
  let fixture: ComponentFixture<ChecklistTemplateOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChecklistTemplateOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChecklistTemplateOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
