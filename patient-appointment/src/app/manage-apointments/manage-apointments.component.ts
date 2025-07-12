import { Component, OnInit } from '@angular/core';
import { PatientDetails, STATUS } from '../data-models/patientDetails';
import { NewPatientService } from '../forms/new-patient.service';

@Component({
  selector: 'app-manage-apointments',
  templateUrl: './manage-apointments.component.html',
  styleUrls: ['./manage-apointments.component.scss']
})
export class ManageApointmentsComponent implements OnInit {
appointments: PatientDetails[] = [
    { firstName: 'Jane', lastName: 'Cooper', phoneNo: '+91 9876543210', dateTime: '13-Aug-2023 at 10:00 AM', status: STATUS.Open },
    { firstName: 'Wade', lastName: 'Warren', phoneNo: '+91 9876543210', dateTime: '13-Aug-2023 at 10:00 AM', status: STATUS.Booked },
    { firstName: 'Brooklyn', lastName: 'Simmons', phoneNo: '+91 9876543210', dateTime: '13-Aug-2023 at 10:00 AM', status: STATUS.Completed }
  ];


  constructor(private readonly newPatientService: NewPatientService) { }

  ngOnInit(): void {
    this.newPatientService.getPatientDetails().subscribe((patientDetails: PatientDetails) => {
      this.appointments.push(patientDetails);
    });
  }
}
