import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router, RouterLink, RouterOutlet} from '@angular/router';
import {ThemeSwitcherService} from './services/theme-switcher-service';
import {AuthenticationService} from './services/authentication-service';
import {LocalStorageService} from './services/local-storage-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'The Crimson Sunrise';
  currentPath = '';
  loggedIn = false;

  constructor(private router: Router, private themeService: ThemeSwitcherService,
              private authenticationService: AuthenticationService,
              private localStorageService: LocalStorageService) {
    this.loggedIn = this.localStorageService.getToken() !== null;
  }

  ngOnInit(): void {
    this.router.events.subscribe((event: any) => {
      this.loggedIn = this.localStorageService.getToken() !== null;
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

  getThemeButtonLabel() {
    const currentTheme = this.themeService.getCurrentTheme();
    if (currentTheme === 'dark') {
      return 'Light Mode'
    }
    return 'Dark Mode';
  }

  getThemeIcon(): string {
    const currentTheme = this.themeService.getCurrentTheme();
    if (currentTheme === 'dark') {
      return 'light-mode.png'
    }
    return 'dark-mode.png';
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['home']);
  }
}
