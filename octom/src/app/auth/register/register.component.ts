import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
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

  values: string[] = [];

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.nameForm = "register"
  }

  ngOnInit(): void {

    this.addValues();

    this.registerForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      firstname: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      phones: this.formBuilder.array([]),
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    })

    this.addPhone();
  }

  addValues() {
    if (this.values != null) {
      for (let i = 1; i <= 300; i++) {
        this.values.push(`+${i}`);
      }
    }
  }


  get name() { return this.registerForm.get('name'); }
  get firstname() { return this.registerForm.get('firstname'); }
  get phones() { return this.registerForm.get('phones') as FormArray; }
  get username() { return this.registerForm.get('username'); }
  get password() { return this.registerForm.get('password'); }
  get confirmPassword() { return this.registerForm.get('confirmPassword'); }

  addPhone() {
    let phone = this.formBuilder.group({
      phonePrefix: '',
      phoneNumber: ['', [
        Validators.required,
        Validators.minLength(9),
        Validators.maxLength(10),
        Validators.pattern('^[0-9]*$')
      ]]
    });
    this.phones.push(phone);
  }

  registerFormSubmit() {
    console.log(this.registerForm.value)
    if (this.registerForm.invalid) return;
    console.log("it's ok!")
    this.router.navigate(['auth']);
  }
}
