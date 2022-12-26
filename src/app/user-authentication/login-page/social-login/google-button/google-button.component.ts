import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CredentialResponse } from 'google-one-tap';
import { googleOauthConfig } from 'src/app/user-authentication/oauth-config';
import { AuthenticationService } from 'src/app/user-authentication/services/authentication.service';

@Component({
  selector: 'app-google-button',
  templateUrl: './google-button.component.html',
  styleUrls: ['./google-button.component.scss'],
})
export class GoogleButtonComponent implements OnInit {
  constructor(
    private router: Router,
    private authService: AuthenticationService,
    private ngzone: NgZone
  ) {}

  ngOnInit(): void {
    //@ts-ignore
    window.onGoogleLibraryLoad = () => {
      //@ts-ignore
      google.accounts.id.initialize({
        client_id: googleOauthConfig.clientId,
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

  async handleCredentialResponse(response: CredentialResponse) {
    await this.authService.loginWithGoogle(response.credential).subscribe(
      {
        next : (x) => {
          debugger;
          localStorage.setItem('FinealthToken', x.value);
          this.ngzone.run(() => {
            this.router.navigate(['/movements']);
          });
        },
        error : (error) => {
          console.log(error);
        }
      }
    );
  }
}
