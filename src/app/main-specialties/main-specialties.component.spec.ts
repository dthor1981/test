import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSpecialtiesComponent } from './main-specialties.component';

describe('MainSpecialtiesComponent', () => {
  let component: MainSpecialtiesComponent;
  let fixture: ComponentFixture<MainSpecialtiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainSpecialtiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainSpecialtiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
