import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Router, RouteReuseStrategy, Routes } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  register!: string;

  nameForm: string;

  registerForm!: FormGroup

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.nameForm = "register"
  }

  ngOnInit(): void {

    this.registerForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      firstname: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    })
  }

  get name() { return this.registerForm.get('name'); }
  get firstname() { return this.registerForm.get('firstname'); }
  get username() { return this.registerForm.get('username'); }
  get password() { return this.registerForm.get('password'); }
  get confirmPassword() { return this.registerForm.get('confirmPassword'); }


  submit() {
    this.router.navigate(["/auth/login"]);
    return;
  }
}
