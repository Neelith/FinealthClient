import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private httpClient : HttpClient) { }

  loginWithGooglePost(path : string, credentials: string, header : HttpHeaders) : Observable<any>{
    return this.httpClient.post(path, JSON.stringify(credentials), { headers: header});
  }
}
