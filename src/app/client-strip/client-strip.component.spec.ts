import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientStripComponent } from './client-strip.component';

describe('ClientStripComponent', () => {
  let component: ClientStripComponent;
  let fixture: ComponentFixture<ClientStripComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientStripComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientStripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
