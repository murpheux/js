import { Injectable } from '@angular/core';

@Injectable()
export class AuthenticationService {

  private isUserLoggedIn;
  private username;

  constructor() {
    this.isUserLoggedIn = false;
  }

  setUserLoggedIn(uname) {
    this.isUserLoggedIn = true;
    this.username = uname;
  }

  getUserLoggedIn() {
    return this.isUserLoggedIn;
  }

  getUsername() {
    return this.username;
  }

  logOut() {
    this.isUserLoggedIn = false;
    this.username = '';
  }

}
