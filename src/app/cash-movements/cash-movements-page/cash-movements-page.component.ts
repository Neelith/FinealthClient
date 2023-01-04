import { Component, OnInit } from '@angular/core';
import { CashMovement } from 'src/app/entities/cash-movement';
import { DialogService } from 'src/app/dialogs/services/dialog.service';
import { Category } from 'src/app/entities/category';
import { CashMovementRepositoryService } from 'src/app/persistance/services/cash-movement-repository.service';
import { concatMap, EMPTY, filter, finalize, map, Observable, of } from 'rxjs';
import * as moment from 'moment';

@Component({
  selector: 'app-cash-movements-page',
  templateUrl: './cash-movements-page.component.html',
  styleUrls: ['./cash-movements-page.component.scss'],
})
export class CashMovementsPageComponent {
  cashMovementList$: Observable<CashMovement[]>;

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

  constructor(
    private dialogService: DialogService,
    private cashMovementRepository: CashMovementRepositoryService
  ) {
    this.cashMovementList$ = this.cashMovementRepository.getAllCashMovements();
  }

  onSearchCashMovements(data: any) {
    let startDateValue = moment(data.startDate.value);
    let endDateValue = moment(data.endDate.value);
    endDateValue.hours(23).minutes(59).seconds(59);

    this.cashMovementList$ = this.cashMovementRepository
      .getAllCashMovements()
      .pipe(
        map((cashMovementList) => {
          let filteredCashMovements: CashMovement[] = [];

          for (const cashMovement of cashMovementList) {
            let cashMovementDate = moment(
              cashMovement.date,
              'ddd MMM DD YYYY HH:mm:ss'
            );
            if (
              cashMovementDate.isBetween(
                startDateValue,
                endDateValue,
                undefined,
                '[]'
              ) &&
              data.selectedCategory.categoryId === 0
            ) {
              filteredCashMovements.push(cashMovement);
            }

            if (
              cashMovementDate.isBetween(
                startDateValue,
                endDateValue,
                undefined,
                '[]'
              ) &&
              data.selectedCategory.categoryId === cashMovement.categoryId
            ) {
              filteredCashMovements.push(cashMovement);
            }
          }

          return filteredCashMovements;
        })
      );
  }

  onDeleteCashMovement(cashMovementId: number) {
    this.cashMovementRepository
      .deleteCashMovementById(cashMovementId)
      .subscribe(
        (cashMovementListFromDb) =>
          (this.cashMovementList$ = of(cashMovementListFromDb))
      );
  }

  onEditCashMovement(cashMovement: CashMovement) {
    this.dialogService
      .showEditCashMovementDialog({
        cashMovement: cashMovement,
        categories: this.categories,
      })
      .afterClosed()
      .pipe(
        map((form) => {
          let editedCashMovement: CashMovement | null = null;

          if (form.valid) {
            editedCashMovement = new CashMovement();
            editedCashMovement.description = form.value.description;
            editedCashMovement.amount = form.value.amount;
            editedCashMovement.categoryId = form.value.categoryId;
            editedCashMovement.date = form.value.date.toString();
            editedCashMovement.cashMovementId = cashMovement.cashMovementId;
          }

          return editedCashMovement;
        }),
        concatMap((cashMovement) => {
          if (cashMovement !== null) {
            return this.cashMovementRepository.edit(cashMovement);
          }

          return EMPTY;
        })
      )
      .pipe(finalize(() => this.loadCashMovementList()))
      .subscribe();
  }

  onAddCashMovement() {
    this.dialogService
      .showAddCashMovementDialog(this.categories)
      .afterClosed()
      .pipe(
        map((form) => {
          let cashMovement: CashMovement | null = null;

          if (form.valid) {
            cashMovement = new CashMovement();
            cashMovement.description = form.value.description;
            cashMovement.amount = form.value.amount;
            cashMovement.categoryId = form.value.categoryId;
            cashMovement.date = form.value.date.toString();
            return cashMovement;
          }

          return cashMovement;
        }),
        concatMap((cashMovement) => {
          if (cashMovement !== null) {
            return this.cashMovementRepository.add(cashMovement);
          }

          return EMPTY;
        })
      )
      .pipe(finalize(() => this.loadCashMovementList()))
      .subscribe();
  }

  loadCashMovementList() {
    this.cashMovementList$ = this.cashMovementRepository.getAllCashMovements();
  }
}
