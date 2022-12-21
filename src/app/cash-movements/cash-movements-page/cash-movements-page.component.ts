import { Component } from '@angular/core';
import { CashMovement } from 'src/app/entities/cash-movement';
import { DialogService } from 'src/app/shared/services/dialog.service';

@Component({
  selector: 'app-cash-movements-page',
  templateUrl: './cash-movements-page.component.html',
  styleUrls: ['./cash-movements-page.component.scss'],
})

export class CashMovementsPageComponent {

  constructor(private dialogService : DialogService){}

  onDeleteCashMovement(cashMovementId: number) {
    console.log(cashMovementId);
  }

  onEditCashMovement(cashMovement: CashMovement) {
    console.log(cashMovement.cashMovementId);
  }

  onAddCashMovement(){
    this.dialogService.showAddCashMovementDialog();
  }
}
