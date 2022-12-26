import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login!: string;

  nameForm: string;

  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.nameForm = "auth"
  }

  get username() { return this.loginForm.get('username'); }
  get password() { return this.loginForm.get('password'); }


  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      remember: [false]
    })
  }

  loginFormSubmit() {
    console.log(this.loginForm.value)
    if (this.loginForm.invalid) return;
    console.log("it's ok!")
    this.router.navigate(['dashboard']);
  }
}
