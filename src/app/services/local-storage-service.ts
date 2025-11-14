import {Injectable} from '@angular/core';

const PRERISE_TOKEN = "prerise-auth-token"

@Injectable({providedIn: 'root'})
export class LocalStorageService {
  public setToken(token: string) {
    localStorage.setItem(PRERISE_TOKEN, token)
  }

  public getToken() {
    return localStorage.getItem(PRERISE_TOKEN)
  }

  public deleteToken() {
    localStorage.removeItem(PRERISE_TOKEN);
  }

}
