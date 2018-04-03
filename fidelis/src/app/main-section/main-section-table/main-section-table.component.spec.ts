import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSectionTableComponent } from './main-section-table.component';

describe('MainSectionTableComponent', () => {
  let component: MainSectionTableComponent;
  let fixture: ComponentFixture<MainSectionTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainSectionTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainSectionTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
