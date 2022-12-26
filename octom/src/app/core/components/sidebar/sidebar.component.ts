import { Component, OnInit } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faAssistiveListeningSystems, faBookOpen, faCloudArrowDown, faDashboard, faFile, faGear, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  version!  : string;
  items!: string[];
  iconItems!: IconDefinition[];

  constructor() {
  }

  ngOnInit(): void {
    this.version = require('/package.json').version;

    this.items = [
      "dashboard",
      "activity",
      "ebooks",
      "settings",
      "messenger",
      "files"
    ]

    this.iconItems = [
      faDashboard,
      faCloudArrowDown,
      faBookOpen,
      faGear,
      faPaperPlane,
      faFile,
    ]
  }

}
