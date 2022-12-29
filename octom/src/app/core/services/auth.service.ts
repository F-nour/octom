import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../model/user.model";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token!: string;
  user!: User;

  constructor(private http: HttpClient, private router: Router) {
  }

  login(body: any, error: string) {
    this.http.post<User>('https://dummyjson.com/auth/login', body.value).subscribe(user => {
      this.user = user;
      this.token = JSON.stringify(user.username);
      localStorage.setItem('authToken', this.token)
      this.router.navigate(['dashboard']);
    }, (err) => {
      body.isInvalid;
      error = err.error.message;
      return error;
    });
  }

  getToken() {
    return localStorage.getItem('authToken');
  }

  logout() {
    localStorage.clear();
  }
}
