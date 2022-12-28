import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CredentialResponse } from 'google-one-tap';
import { CookieService } from 'ngx-cookie-service';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {

  constructor(
    private router: Router,
    private authService: AuthenticationService,
    private cookieService: CookieService
  ) {}

  onSubmit(form: FormGroup) {
    console.log(form.get('email')?.value);
  }

  async handleCredentialResponseFromGoogle(response: CredentialResponse) {
    await this.authService.loginWithGoogle(response.credential).subscribe(
      {
        next : (x) => {
          this.cookieService.set('Finealth-Auth', x.value);
          this.router.navigate(['/movements']);
        },
        error : (error) => {
          console.log(error);
        }
      }
    );
  }
}
