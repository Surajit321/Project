import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageApointmentsComponent } from './manage-apointments.component';

describe('ManageApointmentsComponent', () => {
  let component: ManageApointmentsComponent;
  let fixture: ComponentFixture<ManageApointmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageApointmentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageApointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
