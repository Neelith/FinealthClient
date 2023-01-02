import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { first, firstValueFrom, Observable } from 'rxjs';
import { HttpClientService } from 'src/app/shared/services/http-client.service';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  public loggedIn: boolean = false;

  constructor(
    private httpClient: HttpClientService,
    private cookieService: CookieService
  ) {}

  async isLoggedIn() {
    let accessToken = this.cookieService.get('Finealth-Auth');
    let accessTokenExist: boolean =
      accessToken && accessToken.length != 0 ? true : false;
    let accessTokenValid: boolean = false;

    let isAccessTokenValid$ = this.httpClient.isAccessTokenValid(accessToken);
    await firstValueFrom(isAccessTokenValid$)
      .then((response) => {
        accessTokenValid = response.accessTokenValid;
      })
      .catch(() => {
        console.error('Something went wrong during token validation.');
      });

    return accessTokenExist && accessTokenValid;
  }

  public signOutExternal = () => {
    this.cookieService.delete('Finealth-Auth');
  };

  loginWithGoogle(credentials: string): Observable<any> {
    return this.httpClient.loginWithGoogle(credentials);
  }
}
