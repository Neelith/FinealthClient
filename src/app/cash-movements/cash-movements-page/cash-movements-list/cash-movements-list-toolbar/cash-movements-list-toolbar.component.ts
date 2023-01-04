import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Category } from 'src/app/entities/category';

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

  @Input() categories: Category[] = [];
  selectedCategory: Category;
  allCategory: Category = {
    categoryId: 0,
    name: 'Tutte',
    iconUrl: '',
  };

  constructor() {
    this.endDateValue = new Date();
    this.startDateValue = new Date();
    this.startDateValue.setDate(1);

    this.startDate = new FormControl(this.startDateValue);
    this.endDate = new FormControl(this.endDateValue);

    this.selectedCategory = this.allCategory;
  }

  onAddCashMovement() {
    this.onAddCashMovementEvent.emit();
  }

  onSearchCashMovements() {
    this.onSearchCashMovementsEvent.emit({
      startDate: this.startDate,
      endDate: this.endDate,
      selectedCategory: this.selectedCategory,
    });
  }
}
