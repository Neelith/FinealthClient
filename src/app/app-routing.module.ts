import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CashMovementsPageComponent } from './cash-movements/cash-movements-page/cash-movements-page.component';
import { LoggedInGuardGuard } from './user-authentication/loggedIn-guard/logged-in-guard.guard';
import { LoginPageComponent } from './user-authentication/login-page/login-page.component';

const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  { path: 'movements', component: CashMovementsPageComponent, canActivate: [LoggedInGuardGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
