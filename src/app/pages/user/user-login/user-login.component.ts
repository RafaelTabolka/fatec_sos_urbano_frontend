import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-login',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css'
})
export class UserLoginComponent {
  buttonDisabled:boolean = true
  formLogin: FormGroup;
  haveLogin:boolean = false;
  haveNotLogin:boolean = true;
  
  constructor (private fb: FormBuilder) {
    this.formLogin = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
    
  }

  onSubmit() {
    if(this.formLogin.value.email == "meuSaco@hotmail.com"
      && this.formLogin.value.password == "meuPauDeAsa"
    ) {
      this.haveLogin = !this.haveLogin
      this.haveNotLogin = !this.haveNotLogin
    }
    console.log(this.haveLogin, this.haveNotLogin);
    
  }
}
