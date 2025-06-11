import { Component, OnInit } from '@angular/core'; // Adicionado OnInit para exemplo
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

// Nossas novas importações
import { LoginserviceService } from '../../../services/login/loginservice.service';
import { NavBarService } from '../../../services/nav-bar.service'; // Mantive seu serviço de NavBar

@Component({
  selector: 'app-user-login',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, CommonModule],
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css'
})
export class UserLoginComponent implements OnInit {
  formLogin: FormGroup;
  showMessageError: boolean = false;

  constructor (
    private fb: FormBuilder,
    private router: Router,
    public navBarService: NavBarService,
    private loginService: LoginserviceService // Injetamos o nosso serviço de login
  ) {
    this.formLogin = this.fb.group({
      email: ['', [Validators.required, Validators.email]], // Adicionado validador de email
      password: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    // Você pode usar o ngOnInit para alguma lógica inicial se precisar
  }

  onSubmit() {
    // Reseta a mensagem de erro a cada tentativa
    this.showMessageError = false;

    if (this.formLogin.invalid) {
      // Se o formulário for inválido, não faz nada.
      // Os próprios validadores já devem dar feedback visual ao usuário.
      return;
    }

    // Chamada para o serviço de login
    this.loginService.login(this.formLogin.value).subscribe({
      // Callback para SUCESSO na requisição
      next: (response) => {
        console.log('Login bem-sucedido!', response);

        // Salva o token de acesso no Local Storage do navegador
        localStorage.setItem('accessToken', response.accessToken);

        // Atualiza o estado da sua NavBar (como você já fazia)
        this.navBarService.modifyStateLogin();
        // Talvez você possa simplificar essa lógica de login no seu NavBarService agora
        // localStorage.setItem('haveLogin', JSON.stringify(this.navBarService.haveLogin));
        // localStorage.setItem('haveNotLogin', JSON.stringify(this.navBarService.haveNotLogin));

        // Navega para a página principal
        this.router.navigateByUrl('/home');
      },
      // Callback para ERRO na requisição
      error: (err) => {
        console.error('Erro no login:', err);
        // Exibe a mensagem de "E-mail ou senha incorretos!"
        this.showMessageError = true;
      }
    });
  }
}