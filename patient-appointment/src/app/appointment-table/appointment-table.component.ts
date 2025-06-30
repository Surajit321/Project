import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-appointment-table',
  templateUrl: './appointment-table.component.html',
  styleUrls: ['./appointment-table.component.scss']
})
export class AppointmentTableComponent {
@Input() appointments: any = [];

  getStatusClass(status: string) {
    switch (status) {
      case 'Open': return 'status-open';
      case 'Booked': return 'status-booked';
      case 'Completed': return 'status-completed';
      default: return '';
    }
  }
}
