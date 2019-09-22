import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChecklistTemplateTwoComponent } from './checklist-template-two.component';

describe('ChecklistTemplateTwoComponent', () => {
  let component: ChecklistTemplateTwoComponent;
  let fixture: ComponentFixture<ChecklistTemplateTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChecklistTemplateTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChecklistTemplateTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
