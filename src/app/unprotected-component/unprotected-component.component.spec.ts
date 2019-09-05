import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnprotectedComponentComponent } from './unprotected-component.component';

describe('UnprotectedComponentComponent', () => {
  let component: UnprotectedComponentComponent;
  let fixture: ComponentFixture<UnprotectedComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnprotectedComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnprotectedComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
