import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientIpComponent } from './client-ip.component';

describe('ClientIpComponent', () => {
  let component: ClientIpComponent;
  let fixture: ComponentFixture<ClientIpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientIpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientIpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
