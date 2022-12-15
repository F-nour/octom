import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  register!: string;

  nameForm: string;

  registerForm!: FormGroup

  constructor(private formBuilder: FormBuilder) {
    this.nameForm = "register"
  }

  ngOnInit(): void {

    this.registerForm = this.formBuilder.group ({
      name: [null],
      firstname: [null],
      username: [null],
      password: [null],
      confirmPassword: [null]
    })
  }

  get name() { return this.registerForm.get('name'); }
  get firstname() { return this.registerForm.get('firstname'); }
  get username() { return this.registerForm.get('username'); }
  get password() { return this.registerForm.get('password'); }
  get confirmPassword() { return this.registerForm.get('confirmPassword'); }


  submit() {
    alert("bravo!");
    return;
  }
}
