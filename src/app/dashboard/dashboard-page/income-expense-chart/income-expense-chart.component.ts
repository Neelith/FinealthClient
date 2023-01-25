import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { CashMovement } from 'src/app/entities/cash-movement';
import { Category } from 'src/app/entities/category';
import { EchartOptionsService } from 'src/app/graphs/services/echart-options.service';

@Component({
  selector: 'app-income-expense-chart',
  templateUrl: './income-expense-chart.component.html',
  styleUrls: ['./income-expense-chart.component.scss'],
})
export class IncomeExpenseChartComponent implements OnInit, OnChanges {
  @Input() cashMovements: CashMovement[] = [];
  @Input() categories: Category[] = [];

  inputDataValid: boolean = false;
  incomeExpenseChartOptions: any;
  incomeExpenseChartUpdateOptions: any;

  constructor(private echartOptionsService: EchartOptionsService) {}

  ngOnInit(): void {
    this.incomeExpenseChartOptions =
      this.echartOptionsService.getIncomeExpenseChartInitOptions();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.inputDataValid =
      this.cashMovements &&
      this.cashMovements.length > 0 &&
      this.categories &&
      this.categories.length > 0
        ? true
        : false;

    if (this.inputDataValid) {
      this.incomeExpenseChartUpdateOptions =
        this.echartOptionsService.getIncomeExpenseChartOptions(
          this.cashMovements
        );
    }
  }
}
