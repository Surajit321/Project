import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PatientDetails } from '../data-models/patientDetails';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private readonly BASE_URL = 'https://patientappointmentservice.onrender.com';
  // private readonly localBaseUrl = 'http://localhost:8080';
  private readonly GET_ALL_PATIENTS_URL = `${this.BASE_URL}/appointments/patients`;
  private readonly CREATE_PATIENT_RECORD_URL = `${this.BASE_URL}/appointments/patients`;

  constructor(private httpClient: HttpClient) { }

  public getAllPatients(): Observable<PatientDetails[]> {
    return this.httpClient.get<PatientDetails[]>(this.GET_ALL_PATIENTS_URL);
  }

  public addPatient(patientDetails: PatientDetails): Observable<PatientDetails> {
    return this.httpClient.post<PatientDetails>(this.CREATE_PATIENT_RECORD_URL, patientDetails);
  }
}
