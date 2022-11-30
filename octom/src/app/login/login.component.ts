import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  auth: boolean = false;
  register: boolean = false;
  forgetPassword: boolean = false;

  constructor(private router: Router) {
    router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        if (event['url'] == '/login/register') {
          this.register = true;
        } else if (event['url'] == '/login/forgetPassword') {
          this.forgetPassword = true;
        } else {
          this.auth = true;
        }
      }
    });
  }

  ngOnInit(): void {
  }

}
