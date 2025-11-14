import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {firstValueFrom} from 'rxjs';
import {environment} from '../../environments/environment';
import {LocalStorageService} from '../services/local-storage-service';

@Component({
  selector: 'app-hot-takes',
  imports: [],
  templateUrl: './hot-takes.component.html',
  styleUrl: './hot-takes.component.css',
})
export class HotTakesComponent {
  hotTakes: any[] = [];
  loggedIn = false;

  constructor(private http: HttpClient, private localStorageService: LocalStorageService) {
    this.loggedIn = this.localStorageService.getToken() !== null;
    this.loadHotTakes();
  }

  loadHotTakes() {
    try {
      firstValueFrom(this.http.get(`${environment.apiBaseUrl}/prerise/takes`))
        .then(result => {
          this.hotTakes = result as any;
        })
    } catch (err) {
      console.error(err);
    }
  }

  deleteHotTake(id: any) {
    try {
      console.log(id);
      console.log('deleting hot take');
      firstValueFrom(this.http.delete(`${environment.apiBaseUrl}/prerise/takes/${id}`, {
        headers: {
          'Authorization': `Bearer ${this.localStorageService.getToken()}`
        }
      })).then(r => {
        console.log(r);
        this.loadHotTakes();
      });
    } catch (err) {
      console.error(err);
    }
  }
}
