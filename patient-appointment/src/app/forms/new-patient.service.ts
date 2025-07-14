import { Injectable } from '@angular/core';
import { PatientDetails } from '../data-models/patientDetails';
import { Subject } from 'rxjs';
import { PatientDataService } from '../services/patient-data.service';

@Injectable({
  providedIn: 'root'
})
export class NewPatientService {

  private patientDetails$: Subject<PatientDetails> = new Subject<PatientDetails>();

  constructor(private readonly patientDataService: PatientDataService) { }
  

  public setPatientDetails(patientDetails: PatientDetails) {
    this.patientDataService.addPatient(patientDetails).subscribe({
      next: (response) => {
        console.log('Patient added successfully:', response);
        this.patientDetails$.next(patientDetails);
      },
      error: (error) => {
        console.error('Error adding patient:', error);
      }
    });
  }

  public getPatientDetails() {
    return this.patientDetails$.asObservable();
  }
}
