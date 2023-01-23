import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { PersistanceModule } from '../persistance/persistance.module';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { GraphsModule } from '../graphs/graphs.module';
import { CategoryChartComponent } from './dashboard-page/category-chart/category-chart.component';
import { CategoryChartToolbarComponent } from './dashboard-page/category-chart/category-chart-toolbar/category-chart-toolbar.component';



@NgModule({
  declarations: [
    DashboardPageComponent,
    CategoryChartComponent,
    CategoryChartToolbarComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PersistanceModule,
    GraphsModule
  ]
})
export class DashboardModule { }
