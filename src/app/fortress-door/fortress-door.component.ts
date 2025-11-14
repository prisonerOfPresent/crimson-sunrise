import {Component} from '@angular/core';
import {NgStyle} from '@angular/common';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthenticationService} from '../services/authentication-service';

@Component({
  selector: 'app-fortress-door',
  imports: [
    NgStyle,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './fortress-door.component.html',
  standalone: true,
  styleUrl: './fortress-door.component.css'
})
export class FortressDoorComponent {
  lockStatusText = 'Locked';
  errorText = '';
  showDoor = false;

  userName = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);
  submitting = false;
  signInForm: FormGroup = new FormGroup({
    userNameControl: this.userName,
    passwordControl: this.password
  });

  constructor(private router: Router, private authenticationService: AuthenticationService) {
  }

  async unlockFortress($event: any) {
    $event.preventDefault();
    this.errorText = '';
    this.submitting = true;
    const status = await this.authenticationService.authenticate(this.userName.value as string, this.password.value as string);
    this.submitting = false;
    if (!status) {
      this.lockStatusText = 'Locked';
      this.errorText = 'Unauthorized';
    } else {
      this.lockStatusText = 'Unlocked';
      this.showDoor = !this.showDoor;
      setTimeout(() => {
        this.router.navigateByUrl('/fortress');
      }, 2000)
    }
  }
}
