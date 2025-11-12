import { Component } from '@angular/core';
import {NgStyle} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-fortress-door',
  imports: [
    NgStyle,
    FormsModule
  ],
  templateUrl: './fortress-door.component.html',
  standalone: true,
  styleUrl: './fortress-door.component.css'
})
export class FortressDoorComponent {
  lockStatusText = 'Locked';
  showDoor = false;

  constructor(private router: Router) {
  }

  unlockFortress($event: any) {
    $event.preventDefault();
    this.lockStatusText = 'Unlocked';
    this.showDoor = !this.showDoor;
    setTimeout(() => {
      this.router.navigateByUrl('/fortress');
    }, 5000);
  }
}
