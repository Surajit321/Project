import { Injectable } from '@angular/core';
import { PatientService } from './patient.service';
import { PatientDetails } from '../data-models/patientDetails';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientDataService {

  constructor(private readonly patientService: PatientService) { }

  public getAllPatients(): Observable<PatientDetails[]> {
    return this.patientService.getAllPatients();
  }

  public addPatient(patientDetails: PatientDetails): Observable<PatientDetails> {
    return this.patientService.addPatient(patientDetails);
  }

  public updatePatient(patientDetails: PatientDetails): Observable<PatientDetails> {
    return this.patientService.updatePatient(patientDetails);
  }
}
