import { Component } from '@angular/core';
import { NavBarService } from '../../../services/nav-bar.service';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-register',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './user-register.component.html',
  styleUrl: './user-register.component.css'
})
export class UserRegisterComponent {
  formRegister: FormGroup;
  
  constructor(
    private navBarService: NavBarService,
    private router: Router,
    private fb: FormBuilder) {
    this.formRegister = this.fb.group({
      completeName:['', Validators.required],
      email:['', [Validators.required, Validators.email]],
      cpf:['', Validators.required],
      phone:['', Validators.required],
      password:['', Validators.required],
      confirmPassword:['', Validators.required]
    })
  }

  ngOnInit(): void {}

  onSubmit() {
    if(this.formRegister.valid) {
      this.navBarService.modifyStateLogin();
      localStorage.setItem('haveLogin', JSON.stringify(this.navBarService.haveLogin))
      localStorage.setItem('haveNotLogin', JSON.stringify(this.navBarService.haveNotLogin))
      this.router.navigateByUrl('/home')
    }
  }
}
