import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isLoginPage!: boolean;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.showCoreComponents();
  };

  showCoreComponents(): void {
    this.router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        this.isLoginPage = event['url'].includes('/auth');
      }
    });
  }
}
