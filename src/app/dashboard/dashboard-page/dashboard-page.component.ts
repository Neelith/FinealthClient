import { Component, OnDestroy, OnInit } from '@angular/core';
import { EChartsOption, graphic } from 'echarts';
import * as moment from 'moment';
import { finalize, firstValueFrom, Subscription } from 'rxjs';
import { CashMovement } from 'src/app/entities/cash-movement';
import { Category } from 'src/app/entities/category';
import { CashMovementRepositoryService } from 'src/app/persistance/services/cash-movement-repository.service';
import { CategoryRepositoryService } from 'src/app/persistance/services/category-repository.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss'],
})
export class DashboardPageComponent implements OnInit, OnDestroy {
  subscription: Subscription = new Subscription();
  cashMovements: CashMovement[] = [];
  categories: Category[] = [];
  isSearchFiltered: boolean = false;

  constructor(
    private categoryRepository: CategoryRepositoryService,
    private cashMovementRepository: CashMovementRepositoryService
  ) {}

  async ngOnInit() {
    this.cashMovements = await this.getCashMovementsAsync();
    this.categories = await this.getCategoriesAsync();
  }

  async reloadCategoryChartData() {
    this.isSearchFiltered = false;
    this.cashMovements = await this.getCashMovementsAsync();
    this.categories = await this.getCategoriesAsync();
  }

  async filterCategoryChartData(data: any) {
    this.isSearchFiltered = true;
    let startDateValue = moment(data.startDate.value);
    let endDateValue = moment(data.endDate.value);
    endDateValue.hours(23).minutes(59).seconds(59);

    this.cashMovements = (await this.getCashMovementsAsync()).filter((cm) => {
      const cashMovementDate = moment(cm.date);
      return cashMovementDate.isBetween(startDateValue, endDateValue);
    });

    this.categories = await this.getCategoriesAsync();
  }

  async getCashMovementsAsync() {
    return firstValueFrom(this.cashMovementRepository.getAllCashMovements());
  }

  async getCategoriesAsync() {
    return firstValueFrom(this.categoryRepository.getAllCategories());
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
