import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HttpClientService {
  private backendApiUrl = environment.backendApiUrl;

  constructor(private httpClient: HttpClient) {}

  loginWithGoogle(credentials: string): Observable<any> {
    const header = new HttpHeaders()
      .set('Content-type', 'application/json')
      .set('withCredentials', 'true');
    return this.httpClient.post(
      this.backendApiUrl + '/Session/google-callback',
      JSON.stringify(credentials),
      { headers: header }
    );
  }

  isAccessTokenValid(accessToken: string): Observable<any> {
    const header = new HttpHeaders()
      .set('Content-type', 'application/json');

    return this.httpClient.post(
      this.backendApiUrl + '/Session',
      JSON.stringify(accessToken),
      { headers: header }
    );
  }
}
