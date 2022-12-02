import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  auth!: string;

  nameForm: string;

  constructor() {
    this.nameForm = "auth"
  }

  ngOnInit(): void {
  }

  authListener(auth: string) {
    this.auth = auth;
    console.log(auth)
    }
}
