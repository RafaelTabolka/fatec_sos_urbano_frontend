import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUserLoginRequest } from '../../interface/user/IUserLoginRequest';
import { IUserLoginResponse } from '../../interface/user/IUserLoginResponse';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  // A URL completa da sua API de login
  private readonly apiUrl = 'https://localhost:7258/Login/loginUser';

  constructor(private http: HttpClient) { }

  /**
   * Envia as credenciais para a API para autenticar o usuário.
   * @param credentials O objeto contendo email e senha.
   * @returns Um Observable com a resposta da API (contendo o accessToken).
   */
  login(credentials: IUserLoginRequest): Observable<IUserLoginResponse> {
    // Como sua API espera parâmetros na URL (query params), usamos HttpParams.
    const loginParams = new HttpParams()
      .set('email', credentials.email)
      .set('password', credentials.password);

    // A chamada POST é feita com o corpo (segundo argumento) nulo,
    // e os parâmetros são passados no terceiro argumento.
    return this.http.post<IUserLoginResponse>(this.apiUrl, null, {
      params: loginParams
    });
  }
}