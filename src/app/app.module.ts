import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserAuthenticationModule } from './user-authentication/user-authentication.module';
import { SharedModule } from './shared/shared.module';
import { CashMovementsModule } from './cash-movements/cash-movements.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    UserAuthenticationModule,
    CashMovementsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
