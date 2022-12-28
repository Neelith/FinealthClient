import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { HttpClientService } from 'src/app/shared/services/http-client.service';
import { environment } from 'src/environments/environment';
import { googleOauthConfig } from '../oauth-config';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService{


  public loggedIn: boolean = false;
  private backendApiUrl = environment.backendApiUrl;
  public googleClientId : string = "";
  public googleLoginUrl : string = "";

  constructor(private httpClient : HttpClientService, private cookieService : CookieService) {
    this.googleClientId = googleOauthConfig.clientId;
    this.googleLoginUrl = googleOauthConfig.loginUrl;
  }

  isLoggedIn() : boolean {
    //TODO: check della validtà e dell'expiration date
    let accessToken = this.cookieService.get("Finealth-Auth");
    return accessToken && accessToken.length != 0? true : false;
  }

  public signOutExternal = () => {
    this.cookieService.delete("Finealth-Auth");
  }

  loginWithGoogle(credentials: string) : Observable<any>{
    const header = new HttpHeaders().set('Content-type', 'application/json').set('withCredentials', 'true');
    return this.httpClient.loginWithGooglePost(this.backendApiUrl + "/Session/google-callback", credentials, header);
  }
}
