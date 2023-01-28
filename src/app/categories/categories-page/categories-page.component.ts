import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  concatMap,
  EMPTY,
  finalize,
  firstValueFrom,
  map,
  Observable,
  Subscription,
} from 'rxjs';
import { DialogService } from 'src/app/dialogs/services/dialog.service';
import { Category } from 'src/app/entities/category';
import { HttpService } from 'src/app/http/services/http.service';
import { CategoryRepositoryService } from 'src/app/persistance/services/category-repository.service';

@Component({
  selector: 'app-categories-page',
  templateUrl: './categories-page.component.html',
  styleUrls: ['./categories-page.component.scss'],
})
export class CategoriesPageComponent implements OnInit, OnDestroy {
  subscription: Subscription = new Subscription();
  categories$: Observable<Category[]>;
  iconUrls: string[] = [
    '../../../assets/icons/icons8-account-64.png',
    '../../../assets/icons/icons8-air-conditioner-64.png',
    '../../../assets/icons/icons8-airplane-landing-64.png',
    '../../../assets/icons/icons8-airplane-take-off-64.png',
    '../../../assets/icons/icons8-airport-64.png',
    '../../../assets/icons/icons8-ambulance-64.png',
    '../../../assets/icons/icons8-baby-bottle-64.png',
    '../../../assets/icons/icons8-baby-stroller-64.png',
    '../../../assets/icons/icons8-bank-account-64.png',
    '../../../assets/icons/icons8-banknotes-64.png',
    '../../../assets/icons/icons8-barbershop-64.png',
    '../../../assets/icons/icons8-beach-64.png',
    '../../../assets/icons/icons8-brain-64.png',
    '../../../assets/icons/icons8-bulldozer-64.png',
    '../../../assets/icons/icons8-business-64.png',
    '../../../assets/icons/icons8-buying-64.png',
    '../../../assets/icons/icons8-camera-64.png',
    '../../../assets/icons/icons8-cash-register-64.png',
    '../../../assets/icons/icons8-cat-footprint-64.png',
    '../../../assets/icons/icons8-cleaning-service-64.png',
    '../../../assets/icons/icons8-coins-64.png',
    '../../../assets/icons/icons8-collectibles-64.png',
    '../../../assets/icons/icons8-confectionery-64.png',
    '../../../assets/icons/icons8-conflict-64.png',
    '../../../assets/icons/icons8-container-truck-64.png',
    '../../../assets/icons/icons8-cutlery-64.png',
    '../../../assets/icons/icons8-decrease-64.png',
    '../../../assets/icons/icons8-delivery-64.png',
    '../../../assets/icons/icons8-donate-64.png',
    '../../../assets/icons/icons8-gas-station-64.png',
    '../../../assets/icons/icons8-gift-64.png',
    '../../../assets/icons/icons8-heart-health-64.png',
    '../../../assets/icons/icons8-jewelry-64.png',
    '../../../assets/icons/icons8-kitchenwares-64.png',
    '../../../assets/icons/icons8-leaf-64.png',
    '../../../assets/icons/icons8-lipstick-64.png',
    '../../../assets/icons/icons8-money-bag-64.png',
    '../../../assets/icons/icons8-online-store-64.png',
    '../../../assets/icons/icons8-party-balloon-64.png',
    '../../../assets/icons/icons8-podium-64.png',
    '../../../assets/icons/icons8-potted-plant-64.png',
    '../../../assets/icons/icons8-product-64.png',
    '../../../assets/icons/icons8-quality-64.png',
    '../../../assets/icons/icons8-rent-64.png',
    '../../../assets/icons/icons8-road-64.png',
    '../../../assets/icons/icons8-school-64.png',
    '../../../assets/icons/icons8-sedan-64.png',
    '../../../assets/icons/icons8-shop-64.png',
    '../../../assets/icons/icons8-shopping-cart-64.png',
    '../../../assets/icons/icons8-souvenirs-64.png',
    '../../../assets/icons/icons8-stationery-64.png',
    '../../../assets/icons/icons8-syringe-64.png',
    '../../../assets/icons/icons8-taxi-64.png',
    '../../../assets/icons/icons8-temperature-inside-64.png',
    '../../../assets/icons/icons8-tooth-caries-64.png',
    '../../../assets/icons/icons8-train-64.png',
    '../../../assets/icons/icons8-travel-agency-64.png',
    '../../../assets/icons/icons8-trust-64.png',
    '../../../assets/icons/icons8-used-product-64.png',
    '../../../assets/icons/icons8-vending-machine-64.png',
    '../../../assets/icons/icons8-veterinarian-64.png',
    '../../../assets/icons/icons8-wallet-64.png',
    '../../../assets/icons/icons8-wrench-64.png',
  ];

  constructor(
    private categoryRepository: CategoryRepositoryService,
    private dialogService: DialogService,
    private httpService: HttpService
  ) {
    this.categories$ = this.categoryRepository.getAllCategories();
  }

  async ngOnInit() {
    // debugger;
    // await firstValueFrom(this.httpService.getIcons()).then((icons) => {
    //   debugger;
    // });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onAddCategory() {
    this.subscription.add(
      this.dialogService
        .showAddCategoryDialog(this.iconUrls)
        .afterClosed()
        .pipe(
          map((form) => {
            let category: Category | null = null;

            if (form.valid) {
              category = new Category();
              category.name = form.value.name;
              category.iconUrl = form.value.iconUrl;
            }

            return category;
          }),
          concatMap((category) => {
            if (category !== null) {
              return this.categoryRepository.add(category);
            }
            return EMPTY;
          }),
          finalize(() => {
            this.categories$ = this.categoryRepository.getAllCategories();
          })
        )
        .subscribe()
    );
  }

  onEditCategory(category: Category) {
    this.subscription.add(
      this.dialogService
        .showEditCategoryDialog({ iconUrls: this.iconUrls, category: category })
        .afterClosed()
        .pipe(
          map((form) => {
            let editedCategory: Category | null = null;

            if (form.valid) {
              editedCategory = new Category();
              editedCategory.name = form.value.name;
              editedCategory.iconUrl = form.value.iconUrl;
              editedCategory.categoryId = category.categoryId;
            }

            return editedCategory;
          }),
          concatMap((category) => {
            if (category !== null) {
              return this.categoryRepository.edit(category);
            }
            return EMPTY;
          }),
          finalize(() => {
            this.categories$ = this.categoryRepository.getAllCategories();
          })
        )
        .subscribe()
    );
  }
}
