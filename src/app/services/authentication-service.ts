import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {firstValueFrom} from 'rxjs';
import {LocalStorageService} from './local-storage-service';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private httpClient: HttpClient = inject(HttpClient);
  private localStorageService: LocalStorageService = inject(LocalStorageService);

  public async authenticate(userName: string, password: string): Promise<boolean> {
    let url = `${environment.apiBaseUrl}/prerise/authenticate`
    const body = {
      user_name: userName,
      password: password
    }
    try {
      const response: any = await firstValueFrom(this.httpClient.post(url, body));
      console.log(response);
      this.localStorageService.setToken(response.access_token);
      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
  }

  // TODO : Implement logout with API
  public logout() {
    this.localStorageService.deleteToken();
  }
}
