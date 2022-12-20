import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  version: string;
  items: string[];

  constructor() {
    this.items = [
      "dashboard",
      "activity",
      "ebooks",
      "settings",
      "messenger",
      "files"
    ]

    this.version = require('/package.json').version;
  }

  ngOnInit(): void {
  }

}
