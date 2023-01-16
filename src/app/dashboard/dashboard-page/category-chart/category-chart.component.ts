import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { EChartsOption } from 'echarts';
import { CashMovement } from 'src/app/entities/cash-movement';
import { Category } from 'src/app/entities/category';

@Component({
  selector: 'app-category-chart',
  templateUrl: './category-chart.component.html',
  styleUrls: ['./category-chart.component.scss'],
})
export class CategoryChartComponent implements OnChanges {
  @Input() cashMovements: CashMovement[] = [];
  @Input() categories: Category[] = [];
  inputDataValid: boolean = false;

  categoryChartOptions: EChartsOption = {
    color: ['#00A393', '#008F81', '#007A6E', '#00665C'],
    title: {
      left: '50%',
      top: '5%',
      text: 'Dove sono finiti i miei soldi?',
      subtext: '',
      textAlign: 'center',
      textStyle: { color: '#00A393' }
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : -{c} ({d}%)',
    },
    series: [
      {
        name: 'Categoria',
        type: 'pie',
        radius: [30, 100],
        roseType: 'area',
        data: [],
        label: {
          color: '#009688',
        },
        labelLine: {
          lineStyle: {
            color: '#009688',
          },
          smooth: 0.2,
          length: 10,
          length2: 20,
        },
        itemStyle: {
          shadowBlur: 200,
          shadowColor: 'rgba(0, 0, 0, 0.5)',
        },
        animationType: 'scale',
        animationEasing: 'elasticOut',
        animationDelay: () => Math.random() * 200,
      },
    ],
    legend: {
      align: 'auto',
      bottom: 10,
      data: [],
    },
    calculable: true,
  };

  ngOnChanges(changes: SimpleChanges): void {
    this.inputDataValid =
      this.cashMovements &&
      this.cashMovements.length > 0 &&
      this.categories &&
      this.categories.length > 0
        ? true
        : false;

    if (this.inputDataValid) {
      let categoryGraphData = this.getCategoryGraphData();
      //@ts-ignore
      this.categoryChartOptions.series[0].data = categoryGraphData;
      //@ts-ignore
      this.categoryChartOptions.legend.data = categoryGraphData.map((data) => data.name);
    }
  }

  getCategoryGraphData() {
    return this.categories
      .map((category) => {
        let categoryCashMovements = this.cashMovements.filter(
          (cashMovement) =>
            cashMovement.categoryId === category.categoryId &&
            cashMovement.amount < 0
        );

        let totalAmount = categoryCashMovements.reduce(
          (sum, cashMovement) => sum + Math.abs(cashMovement.amount),
          0
        );

        return {
          value: totalAmount,
          name: category.name,
        };
      })
      .filter((data) => data.value !== 0)
      .sort((a, b) => a.value - b.value);
  }
}
