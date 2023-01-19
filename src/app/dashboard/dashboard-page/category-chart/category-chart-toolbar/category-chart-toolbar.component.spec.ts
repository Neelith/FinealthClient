import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryChartToolbarComponent } from './category-chart-toolbar.component';

describe('CategoryChartToolbarComponent', () => {
  let component: CategoryChartToolbarComponent;
  let fixture: ComponentFixture<CategoryChartToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryChartToolbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryChartToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
