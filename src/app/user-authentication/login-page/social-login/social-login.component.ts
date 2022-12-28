import { Component, EventEmitter, Output } from '@angular/core';
import { CredentialResponse } from 'google-one-tap';

@Component({
  selector: 'app-social-login',
  templateUrl: './social-login.component.html',
  styleUrls: ['./social-login.component.scss'],
})
export class SocialLoginComponent {
  @Output() onHandleCredentialResponseFromGoogle = new EventEmitter<CredentialResponse>();
  constructor() {}

  onHandleCredentialResponseFromGoogleBtn(response: CredentialResponse) {
    this.onHandleCredentialResponseFromGoogle.emit(response);
  }
}
