import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueueChecklistComponent } from './queue-checklist.component';

describe('QueueChecklistComponent', () => {
  let component: QueueChecklistComponent;
  let fixture: ComponentFixture<QueueChecklistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueueChecklistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueueChecklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
