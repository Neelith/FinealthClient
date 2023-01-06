import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditCategoryFormComponent } from './add-edit-category-form.component';

describe('AddEditCategoryFormComponent', () => {
  let component: AddEditCategoryFormComponent;
  let fixture: ComponentFixture<AddEditCategoryFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditCategoryFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditCategoryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
