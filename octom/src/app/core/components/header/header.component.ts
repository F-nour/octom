import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import { User } from '../../model/user.model';
import {UserService} from "../../services/user.service";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  pathImage: string;

  user!: User[];


  constructor(private router: Router, private auth: AuthService, private userService: UserService) {
    this.pathImage = '/assets/images/header/';
  }

  ngOnInit(): void {
  }

  logout(): void {
    this.auth.logout();
    this.router.navigateByUrl('/auth/login');
  }
}
