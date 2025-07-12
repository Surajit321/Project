import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PatientDetails, STATUS } from 'src/app/data-models/patientDetails';
import { NewPatientService } from '../new-patient.service';

@Component({
  selector: 'app-add-appointment',
  templateUrl: './add-appointment.component.html',
  styleUrls: ['./add-appointment.component.scss']
})
export class AddAppointmentComponent {

  /**
   * valid data model for appointment details 
   * firstName: "John",
     lastName: "Doe",
     phoneNo: "+91 9876543210",
     dateTime: "2024-06-15T10:30",
     status: "Confirmed"
   * */

  @Output() addPatientModalClose: EventEmitter<void> = new EventEmitter<void>();

  constructor(private readonly newPatientService: NewPatientService) { }
  
  statusList = Object.values(STATUS);
  newAppointment: PatientDetails = {
    firstName: '',
    lastName: '',
    phoneNo: '',
    dateTime: '',
    status: STATUS.Booked
  };


  public onSubmit(form: any) {
    if (form.valid) {
      this.newPatientService.setPatientDetails(this.newAppointment);
      this.reset();
      form.resetForm();
    }
  }

  public closeModal(): void {
    this.addPatientModalClose.emit();
  }

  private reset(): void {
    this.newAppointment = {
      firstName: '',
      lastName: '',
      phoneNo: '',
      dateTime: '',
      status: STATUS.Open
    };
  }
}
