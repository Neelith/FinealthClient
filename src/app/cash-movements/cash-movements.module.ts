import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { CashMovementsPageComponent } from './cash-movements-page/cash-movements-page.component';
import { CashMovementsListComponent } from './cash-movements-page/cash-movements-list/cash-movements-list.component';
import { DialogsModule } from '../dialogs/dialogs.module';



@NgModule({
  declarations: [
    CashMovementsPageComponent,
    CashMovementsListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    DialogsModule
  ]
})
export class CashMovementsModule { }
