import {Component} from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {environment} from '../../environments/environment';
import {firstValueFrom} from 'rxjs';
import {LocalStorageService} from '../services/local-storage-service';

@Component({
  selector: 'app-hot-take',
  imports: [
    RouterLink,
    ReactiveFormsModule
  ],
  templateUrl: './hot-take.component.html',
  styleUrl: './hot-take.component.css'
})
export class HotTakeComponent {

  title = new FormControl('', [Validators.required]);
  details = new FormControl('');
  submitting = false;
  hotTakeForm: FormGroup = new FormGroup({
    titleControl: this.title,
    detailsControl: this.details
  });


  constructor(private httpClient: HttpClient, private router: Router, private localStorageService: LocalStorageService) {

  }

  public async postHotTake($event: any) {
    $event.preventDefault();
    this.submitting = true;
    const body = {
      title: this.title.value,
      details: this.details.value
    }
    const url = `${environment.apiBaseUrl}/prerise/takes`;
    try {
      const response = await firstValueFrom(this.httpClient.post(url, body, {
        headers: {
          'Authorization': 'Bearer ' + this.localStorageService.getToken()
        }
      }));
      console.log(response);
      this.submitting = false;
      this.router.navigateByUrl('/fortress');
    } catch (error) {
      console.log(error);
      this.submitting = false;
    }
  }
}
