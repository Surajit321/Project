import { Component } from '@angular/core';

@Component({
  selector: 'app-manage-apointments',
  templateUrl: './manage-apointments.component.html',
  styleUrls: ['./manage-apointments.component.scss']
})
export class ManageApointmentsComponent {
appointments: any = [
    { firstName: 'Jane', lastName: 'Cooper', phone: '+91 9876543210', dateTime: '13-Aug-2023 at 10:00 AM', status: 'Open' },
    { firstName: 'Wade', lastName: 'Warren', phone: '+91 9876543210', dateTime: '13-Aug-2023 at 10:00 AM', status: 'Booked' },
    { firstName: 'Brooklyn', lastName: 'Simmons', phone: '+91 9876543210', dateTime: '13-Aug-2023 at 10:00 AM', status: 'Completed' }
  ];
}
