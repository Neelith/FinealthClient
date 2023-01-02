import { Component, OnInit } from '@angular/core';
import { CashMovement } from 'src/app/entities/cash-movement';
import { DialogService } from 'src/app/dialogs/services/dialog.service';
import { Category } from 'src/app/entities/category';
import { CashMovementRepositoryService } from 'src/app/persistance/services/cash-movement-repository.service';
import {
  concat,
  concatMap,
  EMPTY,
  finalize,
  last,
  map,
  Observable,
  of,
} from 'rxjs';
import { EMPTY_SUBSCRIPTION } from 'rxjs/internal/Subscription';
import { WithID } from 'ngx-indexed-db';

@Component({
  selector: 'app-cash-movements-page',
  templateUrl: './cash-movements-page.component.html',
  styleUrls: ['./cash-movements-page.component.scss'],
})
export class CashMovementsPageComponent implements OnInit {
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
    this.cashMovementList$ = this.loadCashMovementList();
  }

  ngOnInit(): void {}

  onDeleteCashMovement(cashMovementId: number) {
    // const itemToRemoveIndex = this.cashMovementList.findIndex(
    //   (item) => item.cashMovementId === cashMovementId
    // );
    // this.cashMovementList.splice(itemToRemoveIndex, 1);
  }

  onEditCashMovement(cashMovement: CashMovement) {
    // this.dialogService
    //   .showEditCashMovementDialog({
    //     cashMovement: cashMovement,
    //     categories: this.categories,
    //   })
    //   .afterClosed()
    //   .subscribe({
    //     next: (form) => {
    //       if (form.valid) {
    //         var newCashMovement = new CashMovement();
    //         newCashMovement.description = form.value.description;
    //         newCashMovement.amount = form.value.amount;
    //         newCashMovement.categoryId = form.value.categoryId;
    //         newCashMovement.date = form.value.date;
    //         newCashMovement.cashMovementId = cashMovement.cashMovementId;
    //         const itemToRemoveIndex = this.cashMovementList.findIndex(
    //           (item) => item.cashMovementId === cashMovement.cashMovementId
    //         );
    //         this.cashMovementList.splice(itemToRemoveIndex, 1, newCashMovement);
    //       }
    //     },
    //     error: (err) => console.error(err),
    //   });
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
            cashMovement.date = form.value.date;
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
      .subscribe({
        next: cashMovementFromDb => {
          debugger;
          cashMovementFromDb.cashMovementId = cashMovementFromDb.id;
        },
        error: (err) => {
          debugger;
          console.error(err);
        }
      });

    // this.dialogService
    //   .showAddCashMovementDialog(this.categories)
    //   .afterClosed()
    //   .subscribe({
    //     next: (form) => {
    //       if (form.valid) {
    //         var cashMovement = new CashMovement();
    //         cashMovement.description = form.value.description;
    //         cashMovement.amount = form.value.amount;
    //         cashMovement.categoryId = form.value.categoryId;
    //         cashMovement.date = form.value.date;
    //         this.cashMovementRepository.add(cashMovement).subscribe({
    //           next: (cashMovementFromDb) => {
    //             debugger;
    //             cashMovement.cashMovementId = cashMovementFromDb.id;
    //           },
    //           error: (err) => {
    //             console.error(err);
    //           },
    //           complete: () => {
    //             this.cashMovementList$ = this.loadCashMovementList();
    //           },
    //         });
    //       }
    //     },
    //     error: (err) => console.error(err),
    //   });
  }

  loadCashMovementList(): Observable<CashMovement[]> {
    return this.cashMovementRepository.getAllCashMovements();
  }
}
