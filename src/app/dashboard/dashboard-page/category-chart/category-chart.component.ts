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
  selector: 'app-category-chart',
  templateUrl: './category-chart.component.html',
  styleUrls: ['./category-chart.component.scss'],
})
export class CategoryChartComponent implements OnInit, OnChanges {
  @Input() cashMovements: CashMovement[] = [];
  @Input() categories: Category[] = [];

  inputDataValid: boolean = false;
  categoryChartOptions: any;
  categoryChartUpdateOptions: any;

  constructor(private echartOptionsService: EchartOptionsService) {}

  ngOnInit(): void {
    this.categoryChartOptions =
      this.echartOptionsService.getCategoryChartInitOptions();
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
      this.categoryChartUpdateOptions =
        this.echartOptionsService.getCategoryChartOptions(
          this.categories,
          this.cashMovements
        );
    }
  }
}
