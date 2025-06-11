import { CommonModule} from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { NavBarService } from '../../services/nav-bar.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  haveLogin:boolean = false;
  haveNotLogin:boolean = true;

  constructor(
    public navBarService: NavBarService,
    private router: Router) {}

  userExits () {
    this.navBarService.modifyStateLogin()
    localStorage.setItem('haveLogin', JSON.stringify(this.haveLogin))
    localStorage.setItem('haveNotLogin', JSON.stringify(this.haveNotLogin))
    localStorage.clear();
    this.router.navigateByUrl('/home')
  }

}
