import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
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
  @Input() isCashMovementSearchFiltered!: boolean;

  displayedColumns: string[] = [
    'categoryImg',
    'description',
    'amount',
    'actions'
  ];

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

  getCategoryById(categoryId: number): Category {
    const index = this.categories.findIndex(
      (category) => category.categoryId === categoryId
    );

    return this.categories[index];
  }
}
