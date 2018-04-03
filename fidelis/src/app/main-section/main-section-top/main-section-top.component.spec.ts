import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSectionTopComponent } from './main-section-top.component';

describe('MainSectionTopComponent', () => {
  let component: MainSectionTopComponent;
  let fixture: ComponentFixture<MainSectionTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainSectionTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainSectionTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
