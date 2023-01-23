import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-category-chart-toolbar',
  templateUrl: './category-chart-toolbar.component.html',
  styleUrls: ['./category-chart-toolbar.component.scss'],
})
export class CategoryChartToolbarComponent {
  endDateValue: Date;
  startDateValue: Date;
  startDate: FormControl;
  endDate: FormControl;

  @Output() onSearchEvent = new EventEmitter();
  @Output() onReloadEvent = new EventEmitter();

  @Input() isSearchFiltered!: boolean;

  constructor() {
    this.endDateValue = new Date();
    this.startDateValue = new Date();
    this.startDateValue.setDate(1);

    this.startDate = new FormControl(this.startDateValue);
    this.endDate = new FormControl(this.endDateValue);
  }

  onSearch() {
    this.onSearchEvent.emit({
      startDate: this.startDate,
      endDate: this.endDate
    });
  }

  onReload() {
    this.onReloadEvent.emit();
  }
}
