import { Injectable } from '@angular/core';
import { PatientDetails } from '../data-models/patientDetails';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewPatientService {

  private patientDetails$: Subject<PatientDetails> = new Subject<PatientDetails>();

  constructor() { 
  }

  public setPatientDetails(patientDetails: PatientDetails) {
    this.patientDetails$.next(patientDetails);
  }

  public getPatientDetails() {
    return this.patientDetails$.asObservable();
  }
}
