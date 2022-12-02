import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  forgotPwd!: string;

  nameForm: string;

  constructor() {
    this.nameForm = "forgotPwd"
  }

  ngOnInit(): void {
  }

  forgotPwdListener(forgotPwd: string) {
    this.forgotPwd = forgotPwd;
  }
}
