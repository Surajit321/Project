import { Component, OnInit } from '@angular/core';
import { PatientDetails, STATUS } from '../data-models/patientDetails';
import { PatientDataService } from '../services/patient-data.service';

@Component({
  selector: 'app-manage-apointments',
  templateUrl: './manage-apointments.component.html',
  styleUrls: ['./manage-apointments.component.scss']
})
export class ManageApointmentsComponent implements OnInit {
  appointments: PatientDetails[] = [];

  // Default appointments for initial display
  defaultAppointments: PatientDetails[] = [
    { firstName: 'Jane', lastName: 'Cooper', phoneNo: '+91 9876543210', dateTime: '13-Aug-2023 at 10:00 AM', status: STATUS.Open },
    { firstName: 'Wade', lastName: 'Warren', phoneNo: '+91 9876543210', dateTime: '13-Aug-2023 at 10:00 AM', status: STATUS.Booked },
    { firstName: 'Brooklyn', lastName: 'Simmons', phoneNo: '+91 9876543210', dateTime: '13-Aug-2023 at 10:00 AM', status: STATUS.Completed }
  ];


  constructor(private readonly patientDataService: PatientDataService) { }

  ngOnInit(): void {
    this.getAllAppointments();
  }

  private getAllAppointments(): void {
    this.patientDataService.getAllPatients().subscribe({
      next: (patients: PatientDetails[]) => {
        this.appointments = patients;
      },
      error: (error) => {
        console.error('Error fetching appointments:', error);
        // Fallback to default appointments if API call fails
        this.appointments = this.defaultAppointments;
      }
    })
  }
}
