import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCashMovementDialogComponent } from './edit-cash-movement-dialog.component';

describe('EditCashMovementDialogComponent', () => {
  let component: EditCashMovementDialogComponent;
  let fixture: ComponentFixture<EditCashMovementDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCashMovementDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditCashMovementDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
