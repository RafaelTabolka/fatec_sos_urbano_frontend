import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavBarService {
  public haveLogin: boolean = false;
  public haveNotLogin: boolean = true;

  constructor() { }

  modifyStateLogin() {
    this.haveLogin = !this.haveLogin;
    this.haveNotLogin = !this.haveNotLogin;
  }
}
