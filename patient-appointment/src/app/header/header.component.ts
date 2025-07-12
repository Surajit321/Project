import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isFormVisible: boolean = false;
  addPatient(): void {
    console.log('Add Patient button clicked');
    this.isFormVisible = true
  }

  closeAddPatientModal(): void {
    this.isFormVisible = false;
  }

}
