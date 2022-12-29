import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token!: string;
  constructor() { }

  login() {
    this.token = 'fakeToken';
    localStorage.setItem('authToken', this.token);
  }

  getToken() {
    return localStorage.getItem('authToken');
  }

  logout() {
    localStorage.clear();
  }
}
