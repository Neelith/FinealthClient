import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { CashMovementsPageComponent } from './cash-movements-page/cash-movements-page.component';
import { CashMovementsListComponent } from './cash-movements-page/cash-movements-list/cash-movements-list.component';
import { DialogsModule } from '../dialogs/dialogs.module';
import { PersistanceModule } from '../persistance/persistance.module';
import { CashMovementsListToolbarComponent } from './cash-movements-page/cash-movements-list/cash-movements-list-toolbar/cash-movements-list-toolbar.component';



@NgModule({
  declarations: [
    CashMovementsPageComponent,
    CashMovementsListComponent,
    CashMovementsListToolbarComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    DialogsModule,
    PersistanceModule
  ]
})
export class CashMovementsModule { }
