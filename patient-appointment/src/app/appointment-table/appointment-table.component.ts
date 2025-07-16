import { Component, Input } from '@angular/core';
import { PatientDetails } from '../data-models/patientDetails';
import { PatientDataService } from '../services/patient-data.service';

@Component({
  selector: 'app-appointment-table',
  templateUrl: './appointment-table.component.html',
  styleUrls: ['./appointment-table.component.scss']
})
export class AppointmentTableComponent {
  @Input() appointments: any = [];

  constructor(private readonly patientDataService: PatientDataService) { }

  getStatusClass(status: string) {
    switch (status) {
      case 'Open': return 'status-open';
      case 'Booked': return 'status-booked';
      case 'Completed': return 'status-completed';
      default: return '';
    }
  }

  public updateRecord(patientDetails: PatientDetails): void {
    this.patientDataService.updatePatient(patientDetails).subscribe();
  }
}
