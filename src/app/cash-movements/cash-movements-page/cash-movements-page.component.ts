import { Component } from '@angular/core';
import { CashMovement } from 'src/app/entities/cash-movement';
import { DialogService } from 'src/app/dialogs/services/dialog.service';
import { Category } from 'src/app/entities/category';

@Component({
  selector: 'app-cash-movements-page',
  templateUrl: './cash-movements-page.component.html',
  styleUrls: ['./cash-movements-page.component.scss'],
})
export class CashMovementsPageComponent {
  cashMovementList: CashMovement[] = [
    {
      description: 'Vendita vasi fiori pensili',
      date: new Date(2022, 12, 10),
      amount: 200,
      categoryId: 1,
      cashMovementId: 1,
    },
    {
      description: 'Fiori',
      date: new Date(2022, 1, 8),
      amount: -5.99,
      categoryId: 2,
      cashMovementId: 2,
    },
    {
      description: 'Pattex millechiodi',
      date: new Date(2021, 5, 18),
      amount: -9.99,
      categoryId: 2,
      cashMovementId: 3,
    },
  ];

  categories: Category[] = [
    {
      categoryId: 1,
      name: 'Stipendio',
      iconUrl: '../../../assets/icons/money-profit-icon.png',
    },
    {
      categoryId: 2,
      name: 'Shopping',
      iconUrl: '../../../assets/icons/money-lost-icon.png',
    },
    {
      categoryId: 3,
      name: 'Affitto',
      iconUrl: '../../../assets/icons/money-lost-icon.png',
    },
  ];

  constructor(private dialogService: DialogService) {}

  onDeleteCashMovement(cashMovementId: number) {
    const itemToRemoveIndex = this.cashMovementList.findIndex(
      (item) => item.cashMovementId === cashMovementId
    );

    this.cashMovementList.splice(itemToRemoveIndex, 1);
  }

  onEditCashMovement(cashMovement: CashMovement) {
    this.dialogService
      .showEditCashMovementDialog({
        cashMovement: cashMovement,
        categories: this.categories,
      })
      .afterClosed()
      .subscribe({
        next: (form) => {
          if (form.valid) {
            var newCashMovement = new CashMovement();
            newCashMovement.description = form.value.description;
            newCashMovement.amount = form.value.amount;
            newCashMovement.categoryId = form.value.categoryId;
            newCashMovement.date = form.value.date;
            newCashMovement.cashMovementId = cashMovement.cashMovementId;

            const itemToRemoveIndex = this.cashMovementList.findIndex(
              (item) => item.cashMovementId === cashMovement.cashMovementId
            );

            this.cashMovementList.splice(itemToRemoveIndex, 1, newCashMovement);
          }
        },
        error: (err) => console.error(err),
      });
  }

  onAddCashMovement() {
    this.dialogService
      .showAddCashMovementDialog(this.categories)
      .afterClosed()
      .subscribe({
        next: (form) => {
          if (form.valid) {
            var cashMovement = new CashMovement();
            cashMovement.description = form.value.description;
            cashMovement.amount = form.value.amount;
            cashMovement.categoryId = form.value.categoryId;
            cashMovement.date = form.value.date;

            this.cashMovementList.push(cashMovement);
          }
        },
        error: (err) => console.error(err),
      });
  }
}
