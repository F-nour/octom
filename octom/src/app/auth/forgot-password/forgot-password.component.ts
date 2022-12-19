import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  forgotPwd!: string;

  nameForm: string;
  forgotPwdForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.nameForm = "forgotPwd"
  }

  ngOnInit(): void {
    this.forgotPwdForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.email]],
    })
  }

  get username() { return this.forgotPwdForm.get('username'); }


  formSubmit() {
    console.log(this.forgotPwdForm.value)
    if (this.forgotPwdForm.invalid) return;
    console.log("it's ok!")
  }
}
