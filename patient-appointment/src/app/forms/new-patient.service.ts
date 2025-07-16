import { Injectable } from '@angular/core';
import { PatientDetails } from '../data-models/patientDetails';
import { Subject } from 'rxjs';
import { PatientDataService } from '../services/patient-data.service';
import { RxStomp } from '@stomp/rx-stomp';
import { createStompClient } from '../configuration/WebSocketConfig';

@Injectable({
  providedIn: 'root'
})
export class NewPatientService {
  private stompClient!: RxStomp;
  private patientDetails$: Subject<PatientDetails> = new Subject<PatientDetails>();
  private readonly TOPIC: string = "/topic/patientCreated";

  constructor(private readonly patientDataService: PatientDataService) { }
  
  public init(): void {
    this.stompClient = createStompClient();
    this.subscribeToPatientUpdates();
  }

  private subscribeToPatientUpdates(): void {
    // Subscribe to live updates via WebSocket
    this.stompClient.watch(this.TOPIC).subscribe(message => {
      this.patientDetails$.next(JSON.parse(message.body));
    });
  }

  public setPatientDetails(patientDetails: PatientDetails) {
    this.patientDataService.addPatient(patientDetails).subscribe();
  }

  public getPatientDetails() {
    return this.patientDetails$.asObservable();
  }
}
