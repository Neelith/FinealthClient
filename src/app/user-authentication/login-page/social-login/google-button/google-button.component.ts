import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CredentialResponse } from 'google-one-tap';
import { googleOpenIdConfig } from 'src/environments/environment';

@Component({
  selector: 'app-google-button',
  templateUrl: './google-button.component.html',
  styleUrls: ['./google-button.component.scss'],
})
export class GoogleButtonComponent implements OnInit {
  @Output() onHandleCredentialResponseFromGoogleBtn = new EventEmitter<CredentialResponse>();

  constructor() {}

  ngOnInit(): void {
    //@ts-ignore
    window.onGoogleLibraryLoad = () => {
      //@ts-ignore
      google.accounts.id.initialize({
        client_id: googleOpenIdConfig.clientId,
        callback: this.handleCredentialResponse.bind(this),
        auto_select: false,
        cancel_on_tap_outside: true,
      });

      //@ts-ignore
      google.accounts.id.renderButton(
        //@ts-ignore
        document.getElementById('google-button-id'),
        { theme: 'outline', size: 'large', width: '100%' }
      );

      //@ts-ignore
      google.accounts.id.prompt((notification: PromptMomentNotification) => {});
    };
  }

  handleCredentialResponse(response: CredentialResponse) {
    this.onHandleCredentialResponseFromGoogleBtn.emit(response);
  }
}
