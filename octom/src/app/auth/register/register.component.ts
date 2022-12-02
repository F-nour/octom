import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  register!: string;

  nameForm: string;

  constructor() {
    this.nameForm = "register"
  }

  ngOnInit(): void {
  }

  registerListener(register: string) {
    this.register = register;
  }
}
