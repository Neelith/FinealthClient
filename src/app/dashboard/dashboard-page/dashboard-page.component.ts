import { Component, OnDestroy, OnInit } from '@angular/core';
import { EChartsOption, graphic } from 'echarts';
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

  constructor(
    private categoryRepository: CategoryRepositoryService,
    private cashMovementRepository: CashMovementRepositoryService
  ) {}

  async ngOnInit() {
    // this.subscription.add(
    //   this.cashMovementRepository
    //     .getAllCashMovements()
    //     .subscribe((cashMovements) => {
    //       this.cashMovements = cashMovements;
    //     })
    // );

    await firstValueFrom(
      this.cashMovementRepository.getAllCashMovements()
    ).then((cashMovements) => {
      this.cashMovements = cashMovements;
    });

    // this.subscription.add(
    //   this.categoryRepository.getAllCategories().subscribe((categories) => {
    //     this.categories = categories;
    //   })
    // );

    await firstValueFrom(this.categoryRepository.getAllCategories()).then(
      (categories) => {
        this.categories = categories;
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
