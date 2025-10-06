import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'The Crimson Sunrise';
  currentPath = '';

  constructor(private router: Router) {
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
}
