import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashMovementsListToolbarComponent } from './cash-movements-list-toolbar.component';

describe('CashMovementsListToolbarComponent', () => {
  let component: CashMovementsListToolbarComponent;
  let fixture: ComponentFixture<CashMovementsListToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CashMovementsListToolbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CashMovementsListToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
