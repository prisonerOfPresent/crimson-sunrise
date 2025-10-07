import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router, RouterLink, RouterOutlet} from '@angular/router';
import {ThemeSwitcherService} from './services/theme-switcher-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'The Crimson Sunrise';
  currentPath = '';

  constructor(private router: Router, private themeService: ThemeSwitcherService) {
  }

  ngOnInit(): void {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd && !event.url.includes('home')) {
        this.currentPath = event.url.replace('/','');
      } else {
        this.currentPath = '';
      }
    })
  }

  toggleTheme() {
    this.themeService.switchTheme();
  }
}
