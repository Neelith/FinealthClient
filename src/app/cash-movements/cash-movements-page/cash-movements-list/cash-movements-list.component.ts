import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CashMovement } from 'src/app/entities/cash-movement';
import { Category } from 'src/app/entities/category';

@Component({
  selector: 'app-cash-movements-list',
  templateUrl: './cash-movements-list.component.html',
  styleUrls: ['./cash-movements-list.component.scss'],
})
export class CashMovementsListComponent {
  @Output() onDeleteCashMovementEvent = new EventEmitter<number>();
  @Output() onEditCashMovementEvent = new EventEmitter<CashMovement>();
  @Output() onAddCashMovementEvent = new EventEmitter();
  @Output() onSearchCashMovementsEvent = new EventEmitter();
  @Output() onReloadCashMovementsEvent = new EventEmitter();

  @Input() cashMovementList$!: Observable<CashMovement[]>;
  @Input() categories: Category[] = [];
  @Input() isCashMovementSearchFiltered! : boolean;

  constructor() {}

  onDeleteCashMovement(cashMovementId: number) {
    this.onDeleteCashMovementEvent.emit(cashMovementId);
  }

  onEditCashMovement(cashMovement: CashMovement) {
    this.onEditCashMovementEvent.emit(cashMovement);
  }

  onAddCashMovement() {
    this.onAddCashMovementEvent.emit();
  }

  onSearchCashMovements(data: any) {
    this.onSearchCashMovementsEvent.emit(data);
  }

  onReloadCashMovements() {
    this.onReloadCashMovementsEvent.emit();
  }

  getCategorySrcPath(categoryId: number): string {
    const index = this.categories.findIndex(
      (category) => category.categoryId === categoryId
    );

    if (index === -1) {
      return '';
    }

    return this.categories[index].iconUrl;
  }
}
