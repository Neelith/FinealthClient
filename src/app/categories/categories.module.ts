import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { PersistanceModule } from '../persistance/persistance.module';
import { CategoriesPageComponent } from './categories-page/categories-page.component';
import { CategoriesListComponent } from './categories-page/categories-list/categories-list.component';
import { CategoriesListToolbarComponent } from './categories-page/categories-list/categories-list-toolbar/categories-list-toolbar.component';
import { DialogModule } from '@angular/cdk/dialog';



@NgModule({
  declarations: [
    CategoriesPageComponent,
    CategoriesListComponent,
    CategoriesListToolbarComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PersistanceModule,
    DialogModule
  ]
})
export class CategoriesModule { }
