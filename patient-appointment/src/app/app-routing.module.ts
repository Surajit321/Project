import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageApointmentsComponent } from './manage-apointments/manage-apointments.component';

const routes: Routes = [
  { path: 'manage-appointments', component: ManageApointmentsComponent },
  // { path: 'appointment-list', component: AppointmentListComponent },
  { path: '', redirectTo: 'manage-appointments', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
