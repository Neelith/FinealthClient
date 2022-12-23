import { Component, EventEmitter, Input, Output } from '@angular/core';
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

  @Input() cashMovementList : CashMovement[] = [];
  @Input() categories : Category[] = [];

  onDeleteCashMovement(cashMovementId : number){
    this.onDeleteCashMovementEvent.emit(cashMovementId);
  }

  onEditCashMovement(cashMovement : CashMovement){
    this.onEditCashMovementEvent.emit(cashMovement);
  }

  onAddCashMovement(){
    this.onAddCashMovementEvent.emit();
  }

  getCategorySrcPath(categoryId : number) : string{
    const index = this.categories.findIndex(category => category.categoryId === categoryId);
    return this.categories[index].iconUrl;
  }

}
