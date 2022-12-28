import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
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

  constructor(private httpClient : HttpClientService) {
    this.googleClientId = googleOauthConfig.clientId;
    this.googleLoginUrl = googleOauthConfig.loginUrl;
  }

  public signOutExternal = () => {
    localStorage.removeItem("FinealthToken");
  }

  loginWithGoogle(credentials: string) : Observable<any>{
    const header = new HttpHeaders().set('Content-type', 'application/json').set('withCredentials', 'true');
    return this.httpClient.loginWithGooglePost(this.backendApiUrl + "/Session/google-callback", credentials, header);
  }
}
