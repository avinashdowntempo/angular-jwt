import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChecklistTemplateThreeComponent } from './checklist-template-three.component';

describe('ChecklistTemplateThreeComponent', () => {
  let component: ChecklistTemplateThreeComponent;
  let fixture: ComponentFixture<ChecklistTemplateThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChecklistTemplateThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChecklistTemplateThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
