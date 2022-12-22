import { Component } from '@angular/core';
import { CashMovement } from 'src/app/entities/cash-movement';
import { DialogService } from 'src/app/shared/services/dialog.service';

@Component({
  selector: 'app-cash-movements-page',
  templateUrl: './cash-movements-page.component.html',
  styleUrls: ['./cash-movements-page.component.scss'],
})
export class CashMovementsPageComponent {
  cashMovementList: CashMovement[] = [
    {
      title: 'Ebay',
      description: 'Vendita vasi fiori pensili',
      date: new Date(2022, 12, 10),
      amount: 200,
      categoryId: 1,
      cashMovementId: 1,
      iconUrl: '../../../assets/icons/money-profit-icon.png',
    },
    {
      title: 'Amazon',
      description: 'Fiori',
      date: new Date(2022, 1, 8),
      amount: -5.99,
      categoryId: 1,
      cashMovementId: 2,
      iconUrl: '../../../assets/icons/money-lost-icon.png',
    },
    {
      title: 'Amazon',
      description: 'Pattex millechiodi',
      date: new Date(2021, 5, 18),
      amount: -9.99,
      categoryId: 1,
      cashMovementId: 3,
      iconUrl: '../../../assets/icons/money-lost-icon.png',
    },
  ];

  constructor(private dialogService: DialogService) {}

  onDeleteCashMovement(cashMovementId: number) {
    console.log(cashMovementId);
  }

  onEditCashMovement(cashMovement: CashMovement) {
    console.log(cashMovement.cashMovementId);
  }

  onAddCashMovement() {
    this.dialogService
      .showAddCashMovementDialog()
      .afterClosed()
      .subscribe({
        next: (form) => {
          var cashMovement = new CashMovement();
          cashMovement.description = form.value.description;
          cashMovement.amount = form.value.amount;
          cashMovement.categoryId = form.value.categoryId;

          this.cashMovementList.push(cashMovement);
        },
        error: (err) => console.error(err),
      });
  }
}
