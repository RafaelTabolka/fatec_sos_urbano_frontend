import { Component } from '@angular/core';
import { NavBarService } from '../../services/nav-bar.service';

@Component({
  selector: 'app-how-report',
  standalone: true,
  imports: [],
  templateUrl: './how-report.component.html',
  styleUrl: './how-report.component.css'
})
export class HowReportComponent {
  constructor(
    private navBarService: NavBarService
  ){}

  ngOnInit(): void {
    const haveLoginLocalStorage = localStorage.getItem('haveLogin')
    const haveNotLoginLocalStorage = localStorage.getItem('haveNotLogin')
    if (haveLoginLocalStorage !== null && haveNotLoginLocalStorage !== null) {
      this.navBarService.haveLogin = JSON.parse(haveLoginLocalStorage)
      this.navBarService.haveNotLogin = JSON.parse(haveNotLoginLocalStorage)
    }
  }
}
