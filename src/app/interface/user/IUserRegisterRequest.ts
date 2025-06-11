// Esta interface representa um único telefone na lista
export interface IUserPhone {
  number: string;
}

// Esta é a interface principal para a requisição de cadastro
export interface IUserRegisterRequest {
  name: string;
  email: string;
  cpf: string;
  password: string;
  termsOfUse: boolean;
  userStatusName: string;
  userTypeName: string;
  userPhones: IUserPhone[]; // Um array de telefones
}