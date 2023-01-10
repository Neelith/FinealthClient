import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { PersistanceModule } from '../persistance/persistance.module';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { GraphsModule } from '../graphs/graphs.module';



@NgModule({
  declarations: [
    DashboardPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PersistanceModule,
    GraphsModule
  ]
})
export class DashboardModule { }