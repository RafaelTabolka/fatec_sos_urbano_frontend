import { Component, OnInit } from '@angular/core';
import { NavBarService } from '../../components/navbar/nav-bar.service';
import { Router, RouterLink } from '@angular/router';
import { RevealOnScrollDirective } from '../../shared/reveal-on-scroll.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, RevealOnScrollDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
  constructor(
    private navBarService: NavBarService,
    private router: Router
  ){}

  ngOnInit(): void {
    const haveLoginLocalStorage = localStorage.getItem('haveLogin')
    const haveNotLoginLocalStorage = localStorage.getItem('haveNotLogin')
    if (haveLoginLocalStorage !== null && haveNotLoginLocalStorage !== null) {
      this.navBarService.haveLogin = JSON.parse(haveLoginLocalStorage)
      this.navBarService.haveNotLogin = JSON.parse(haveNotLoginLocalStorage)
    }    
  }

  goToHome () {
    this.router.navigate(['/how-report']).then(() => {
      window.scrollTo(0, 0)
    })
  }
}
