import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login!: string;

  nameForm: string;

  constructor() {
    this.nameForm = "auth"
  }

  ngOnInit(): void {
  }

  loginListener(login: string) {
    this.login = login;
    console.log(login)
    }
}
