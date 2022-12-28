import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page/login-page.component';
import { SharedModule } from '../shared/shared.module';
import { LoginFormComponent } from './login-page/login-form/login-form.component';
import { SocialLoginComponent } from './login-page/social-login/social-login.component';
import { AuthenticationService } from './services/authentication.service';
import { GoogleButtonComponent } from './login-page/social-login/google-button/google-button.component';
import { LoggedInGuardGuard } from './loggedIn-guard/logged-in-guard.guard';

@NgModule({
  declarations: [
    LoginPageComponent,
    LoginFormComponent,
    SocialLoginComponent,
    GoogleButtonComponent,
  ],
  imports: [CommonModule, SharedModule],
  providers: [AuthenticationService, LoggedInGuardGuard],
  exports: []
})
export class UserAuthenticationModule {}
