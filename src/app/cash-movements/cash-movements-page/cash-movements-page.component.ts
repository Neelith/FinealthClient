import { Component, OnDestroy, OnInit } from '@angular/core';
import { CashMovement } from 'src/app/entities/cash-movement';
import { DialogService } from 'src/app/dialogs/services/dialog.service';
import { Category } from 'src/app/entities/category';
import { CashMovementRepositoryService } from 'src/app/persistance/services/cash-movement-repository.service';
import {
  concatMap,
  EMPTY,
  finalize,
  map,
  Observable,
  of,
  Subscription,
} from 'rxjs';
import * as moment from 'moment';
import { CategoryRepositoryService } from 'src/app/persistance/services/category-repository.service';

@Component({
  selector: 'app-cash-movements-page',
  templateUrl: './cash-movements-page.component.html',
  styleUrls: ['./cash-movements-page.component.scss'],
})
export class CashMovementsPageComponent implements OnInit, OnDestroy {
  cashMovementList$!: Observable<CashMovement[]>;
  isCashMovementSearchFiltered: boolean = false;
  categories: Category[] = [];
  subscription: Subscription = new Subscription();

  constructor(
    private dialogService: DialogService,
    private cashMovementRepository: CashMovementRepositoryService,
    private categoryRepository: CategoryRepositoryService
  ) {}
  
  ngOnInit(): void {
    this.cashMovementList$ = this.cashMovementRepository.getAllCashMovements();

    this.subscription.add(
      this.categoryRepository
        .getAllCategories()
        .subscribe((categories) => (this.categories = categories))
    );
  }

  onReloadCashMovements() {
    this.isCashMovementSearchFiltered = false;
    this.cashMovementList$ = this.cashMovementRepository.getAllCashMovements();
  }

  onSearchCashMovements(data: any) {
    this.isCashMovementSearchFiltered = true;
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
              data.selectedCategory.categoryId !== 0 &&
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
    this.subscription.add(
      this.cashMovementRepository
        .deleteCashMovementById(cashMovementId)
        .subscribe(
          (cashMovementListFromDb) =>
            (this.cashMovementList$ = of(cashMovementListFromDb))
        )
    );
  }

  onEditCashMovement(cashMovement: CashMovement) {
    this.subscription.add(
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
        .subscribe()
    );
  }

  onAddCashMovement() {
    this.subscription.add(
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
        .subscribe()
    );
  }

  loadCashMovementList() {
    this.cashMovementList$ = this.cashMovementRepository.getAllCashMovements();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
