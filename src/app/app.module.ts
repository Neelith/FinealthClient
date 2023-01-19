import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserAuthenticationModule } from './user-authentication/user-authentication.module';
import { SharedModule } from './shared/shared.module';
import { CashMovementsModule } from './cash-movements/cash-movements.module';
import { DialogsModule } from './dialogs/dialogs.module';
import { CookieService } from 'ngx-cookie-service';
import { PersistanceModule } from './persistance/persistance.module';
import { CategoriesModule } from './categories/categories.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { GraphsModule } from './graphs/graphs.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    UserAuthenticationModule,
    CashMovementsModule,
    DialogsModule,
    PersistanceModule,
    CategoriesModule,
    DashboardModule,
    GraphsModule,
  ],
  providers: [CookieService],
  bootstrap: [AppComponent],
})
export class AppModule {}
