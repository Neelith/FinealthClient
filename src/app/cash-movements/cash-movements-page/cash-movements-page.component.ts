import { Component } from '@angular/core';
import { CashMovement } from 'src/app/entities/cash-movement';

@Component({
  selector: 'app-cash-movements-page',
  templateUrl: './cash-movements-page.component.html',
  styleUrls: ['./cash-movements-page.component.scss'],
})

export class CashMovementsPageComponent {

  onDeleteCashMovement(cashMovementId: number) {
    console.log(cashMovementId);
  }

  onEditCashMovement(cashMovement: CashMovement) {
    console.log(cashMovement.cashMovementId);
  }

  onAddCashMovement(){
    console.log("added");
  }
}
