import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user-make-report',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-make-report.component.html',
  styleUrl: './user-make-report.component.css'
})
export class UserMakeReportComponent {
  makeReport1: boolean = true;
  makeReport2: boolean = false;
  makeReport3: boolean = false;
  makeReport4: boolean = false;
  
  alterState() {
    this.makeReport1 = false;
    this.makeReport2 = true;
  }
  alterState2() {
    this.makeReport1 = false;
    this.makeReport2 = false;
    this.makeReport3 = true;
  }
  alterState3() {
    this.makeReport1 = false;
    this.makeReport2 = false;
    this.makeReport3 = false;
    this.makeReport4 = true;
  }
  revertState() {
    this.makeReport1 = true;
    this.makeReport2 = false;
  }
  revertState2() {
    this.makeReport1 = false;
    this.makeReport2 = true;
    this.makeReport3 = false;
  }
  revertState3() {
    this.makeReport1 = false;
    this.makeReport2 = false;
    this.makeReport3 = true;
    this.makeReport4 = false;
  }
}
