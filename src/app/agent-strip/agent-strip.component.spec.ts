import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentStripComponent } from './agent-strip.component';

describe('AgentStripComponent', () => {
  let component: AgentStripComponent;
  let fixture: ComponentFixture<AgentStripComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentStripComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentStripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
