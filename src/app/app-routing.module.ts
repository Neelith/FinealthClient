import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CashMovementsPageComponent } from './cash-movements/cash-movements-page/cash-movements-page.component';
import { LoginPageComponent } from './user-authentication/login-page/login-page.component';

const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  { path: 'movements', component: CashMovementsPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
