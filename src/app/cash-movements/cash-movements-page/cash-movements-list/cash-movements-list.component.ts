import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CashMovement } from 'src/app/entities/cash-movement';

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

  onDeleteCashMovement(cashMovementId : number){
    this.onDeleteCashMovementEvent.emit(cashMovementId);
  }

  onEditCashMovement(cashMovement : CashMovement){
    this.onEditCashMovementEvent.emit(cashMovement);
  }

  onAddCashMovement(){
    this.onAddCashMovementEvent.emit();
  }

}
