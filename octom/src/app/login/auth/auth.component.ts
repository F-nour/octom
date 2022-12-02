import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
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
