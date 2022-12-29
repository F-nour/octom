import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from "../../core/services/auth.service";
import {User} from "../../core/model/user.model";
import {UserService} from "../../core/services/user.service";
import {Observable} from "rxjs";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login!: string;

  nameForm: string;

  loginForm!: FormGroup;

  error!: string;

  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private userService: UserService
  ) {
    this.nameForm = "auth"
  }

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }


  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      remember: [false]
    })
  }

  loginFormSubmit() {
    if (this.loginForm.invalid) {
      return
    }
    this.auth.login(this.loginForm, this.error);
  }


}
