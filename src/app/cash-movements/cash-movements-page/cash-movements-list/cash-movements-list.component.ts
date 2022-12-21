import { Component, EventEmitter, Output } from '@angular/core';
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

  cashMovementList : CashMovement[] = [
    {
      title: 'Ebay',
      description: 'Vendita vasi fiori pensili',
      date: new Date(2022, 12, 10),
      amount: 200,
      categoryId: 1,
      cashMovementId: 1,
      iconUrl: "../../../assets/icons/money-profit-icon.png"
    },
    {
      title: 'Amazon',
      description: 'Fiori',
      date: new Date(2022, 1, 8),
      amount: -5.99,
      categoryId: 1,
      cashMovementId: 2,
      iconUrl: "../../../assets/icons/money-lost-icon.png"
    },
    {
      title: 'Amazon',
      description: 'Pattex millechiodi',
      date: new Date(2021, 5, 18),
      amount: -9.99,
      categoryId: 1,
      cashMovementId: 3,
      iconUrl: "../../../assets/icons/money-lost-icon.png"
    },
  ];

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
