import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  pathImage: string;

  constructor() {
    this.pathImage = '/assets/images/header/';
  }

  ngOnInit(): void {
  }

}
