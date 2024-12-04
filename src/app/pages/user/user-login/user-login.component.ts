import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NavBarService } from '../../../services/nav-bar.service';

@Component({
  selector: 'app-user-login',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css'
})
export class UserLoginComponent {
  formLogin: FormGroup;
  // haveLogin:boolean = false;
  // haveNotLogin:boolean = true;
  
  constructor (
    private fb: FormBuilder,
    private router: Router,
    public navBarService: NavBarService) {
    this.formLogin = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
    
  }

  ngOnInit(): void {
    
  }

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
