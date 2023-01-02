import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-cash-movements-list-toolbar',
  templateUrl: './cash-movements-list-toolbar.component.html',
  styleUrls: ['./cash-movements-list-toolbar.component.scss'],
})
export class CashMovementsListToolbarComponent {
  endDateValue: Date;
  startDateValue: Date;
  startDate: FormControl;
  endDate: FormControl;

  @Output() onAddCashMovementEvent = new EventEmitter();
  @Output() onSearchCashMovementsEvent = new EventEmitter();

  constructor() {
    this.endDateValue = new Date();
    this.startDateValue = new Date();
    this.startDateValue.setDate(1);

    this.startDate = new FormControl(this.startDateValue);
    this.endDate = new FormControl(this.endDateValue);
  }

  onAddCashMovement() {
    this.onAddCashMovementEvent.emit();
  }

  onSearchCashMovements() {
    this.endDateValue.setHours(23, 59, 59);

    this.onSearchCashMovementsEvent.emit({
      startDate: this.startDate,
      endDate: this.endDate,
    });
  }
}
