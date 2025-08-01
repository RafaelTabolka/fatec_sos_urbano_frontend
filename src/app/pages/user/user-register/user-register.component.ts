import { Component } from '@angular/core';
import { NavBarService } from '../../../components/navbar/nav-bar.service';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Importe o CommonModule
import { RegisterserviceService } from '../../../services/register/registerservice.service';
import { IUserRegisterRequest } from '../../../interface/user/IUserRegisterRequest';
import { OnlyNumbersDirective } from '../../../directives/only-numbers.directive'; 
import { OnlyLettersDirective } from '../../../directives/only-letters.directive'; 
import { RevealOnScrollDirective } from '../../../shared/reveal-on-scroll.directive';



@Component({
  selector: 'app-user-register',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, CommonModule, OnlyNumbersDirective, OnlyLettersDirective, RevealOnScrollDirective],
  templateUrl: './user-register.component.html',
  styleUrl: './user-register.component.css'
})
export class UserRegisterComponent {
  formRegister: FormGroup;
  // Para mostrar uma mensagem de erro genérica, se necessário
  errorMessage: string | null = null;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private registerService: RegisterserviceService, // Injetamos o serviço de cadastro
    private navBarService: NavBarService
  ) {
     this.formRegister = this.fb.group({
      completeName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      cpf: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]],
      phone: ['', [Validators.required, Validators.minLength(10)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, {
      validators: this.passwordMatchValidator
    });
  }

  // Validador customizado para verificar se as senhas coincidem
  passwordMatchValidator(form: FormGroup) {
    return form.get('password')?.value === form.get('confirmPassword')?.value
      ? null : { mismatch: true };
  }

  

  // Ele serve como um atalho para acessar os controles do formulário no HTML.
get f() {
    return this.formRegister.controls;
  }

  ngOnInit(): void {}

  onSubmit() {
  this.errorMessage = null;

  if (this.formRegister.invalid) {
    this.errorMessage = 'Por favor, preencha todos os campos corretamente.';
    return;
  }

  const formValue = this.formRegister.value;
  
  // A validação de senhas continua aqui, como uma boa prática
  if (formValue.password !== formValue.confirmPassword) {
    // Embora o validador já impeça o envio, mantemos como dupla checagem.
    return;
  }

  const userData: IUserRegisterRequest = {
    name: formValue.completeName,
    email: formValue.email,
    cpf: formValue.cpf,
    password: formValue.password,
    userPhones: [{ number: String(formValue.phone) }],
    termsOfUse: true,
    userStatusName: "ativo",
    userTypeName: "comum"
  };

  this.registerService.register(userData).subscribe({
    // ===== A MÁGICA DO AUTO-LOGIN ACONTECE AQUI =====
    next: (response) => {
      console.log('Cadastro realizado com sucesso, iniciando login automático...', response);

      // 1. Salva o token que a API de cadastro retornou
      localStorage.setItem('accessToken', response.accessToken);

      // 2. Avisa ao NavBarService que o estado mudou para "logado"
      this.navBarService.modifyStateLogin();

      // 3. Redireciona o usuário para a página principal, já logado
      this.router.navigateByUrl('/home');
    },
    // =================================================

    error: (err) => {
      console.error('Erro no cadastro:', err);
      this.errorMessage = err.error?.message || 'Ocorreu um erro ao tentar cadastrar.';
    }
  });
}
}