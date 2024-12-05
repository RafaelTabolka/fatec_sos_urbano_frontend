import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NavBarService } from '../../../services/nav-bar.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-login',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, CommonModule],
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css'
})
export class UserLoginComponent {
  formLogin: FormGroup;
  showMessageError: boolean = false;
  
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
    if(this.formLogin.value.email == "fatec@fatec.sp.gov.br" &&
    this.formLogin.value.password == "fatec123"
    ) {
      console.log(this.formLogin.value.email);
      
      this.navBarService.modifyStateLogin();
      localStorage.setItem('haveLogin', JSON.stringify(this.navBarService.haveLogin));
      localStorage.setItem('haveNotLogin', JSON.stringify(this.navBarService.haveNotLogin));
      this.router.navigateByUrl('/home');
      this.showMessageError = false;
    }else {
      this.showMessageError = true;
    }
  }
}
