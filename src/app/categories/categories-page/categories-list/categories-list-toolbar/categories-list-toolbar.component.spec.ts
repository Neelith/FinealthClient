import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesListToolbarComponent } from './categories-list-toolbar.component';

describe('CategoriesListToolbarComponent', () => {
  let component: CategoriesListToolbarComponent;
  let fixture: ComponentFixture<CategoriesListToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriesListToolbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriesListToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
