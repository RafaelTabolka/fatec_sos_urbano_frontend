import { Component } from '@angular/core';
import { NavBarService } from '../../../services/nav-bar.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-register',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './user-register.component.html',
  styleUrl: './user-register.component.css'
})
export class UserRegisterComponent {
  
  constructor(
    private navBarService: NavBarService,
    private router: Router
  ){}

  ngOnInit(): void {}

  onSubmit() {
    if(true
    ) {
      // this.haveLogin = !this.haveLogin
      // this.haveNotLogin = !this.haveNotLogin
      this.navBarService.modifyStateLogin();
      localStorage.setItem('haveLogin', JSON.stringify(this.navBarService.haveLogin))
      localStorage.setItem('haveNotLogin', JSON.stringify(this.navBarService.haveNotLogin))
      this.router.navigateByUrl('/home')
    }
  }
}
