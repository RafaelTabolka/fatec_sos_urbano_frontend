import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUserRegisterRequest } from '../../interface/user/IUserRegisterRequest';
import { IUserRegisterResponse } from '../../interface/user/IUserRegisterResponse';

@Injectable({
  providedIn: 'root'
})
export class RegisterserviceService {

  private readonly apiUrl = 'https://localhost:7258/User/create';

  constructor(private http: HttpClient) { }

  /**
   * Envia os dados do novo usuário para a API para registro.
   * @param userData O objeto contendo todos os dados do usuário.
   * @returns Um Observable com a resposta da API.
   */
  register(userData: IUserRegisterRequest): Observable<IUserRegisterResponse> {
    return this.http.post<IUserRegisterResponse>(this.apiUrl, userData);
  }
}