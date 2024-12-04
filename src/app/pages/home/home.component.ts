import { Component, OnInit } from '@angular/core';
import { NavBarService } from '../../services/nav-bar.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
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
