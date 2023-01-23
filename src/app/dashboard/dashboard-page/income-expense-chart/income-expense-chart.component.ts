import { Component } from '@angular/core';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-income-expense-chart',
  templateUrl: './income-expense-chart.component.html',
  styleUrls: ['./income-expense-chart.component.scss'],
})
export class IncomeExpenseChartComponent {
  incomeExpenseChartOptions: EChartsOption = {
    color: ['#00A393', '#D91409', '#F0D701'],
    title: {
      left: '50%',
      text: 'Entrate & risparmi',
      subtext: '',
      textAlign: 'center',
      textStyle: { color: '#00A393' },
    },
    tooltip: {
      trigger: 'axis',
      formatter: (params: any) => {
        let result = `${params[0].name}<br/>`;
        let total = 0;
        let income = 0;
        params.forEach((param: any) => {
          if (param.seriesName === 'Entrate') {
            income = param.data;
            total += param.data;
          } else {
            total += param.data;
          }
        });
        params.forEach((param: any) => {
          result += `
            <span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:${
              param.color
            }"></span>
            ${param.seriesName}: ${param.data} (${
            param.seriesName === 'Entrate'
              ? '100'
              : ((param.data / income) * 100).toFixed(2)
          }%)<br/>
          `;
        });
        return result;
      },
    },
    legend: {
      align: 'auto',
      data: ['Entrate', 'Uscite', 'Risparmi'],
      bottom: 0,
    },
    grid: {
      left: '20%',
      right: '20%',
      bottom: '5%',
      containLabel: true,
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        name: 'Entrate',
        type: 'line',
        data: [2000, 2000, 3000, 1900],
        zlevel: 1,
      },
      {
        name: 'Uscite',
        type: 'line',
        data: [1000, 1200, 1300, 900],
        zlevel: 2,
      },
      {
        name: 'Risparmi',
        type: 'line',
        data: [1000, 800, 1700, 1000],
        zlevel: 3,
      },
    ],
  };
}
