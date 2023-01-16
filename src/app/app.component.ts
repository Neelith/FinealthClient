import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Finealth';
  subscription: Subscription = new Subscription();
  showSideNav: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.subscription.add(
      this.router.events.subscribe((navigation) => {
        if (
          navigation instanceof NavigationEnd &&
          this.router.url !== '/login'
        ) {
          this.showSideNav = true;
        }

        if (
          navigation instanceof NavigationEnd &&
          this.router.url === '/login'
        ) {
          this.showSideNav = false;
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onHomeIconClick() {
    this.router.navigateByUrl('/');
  }

  onMovementsIconClick() {
    this.router.navigateByUrl('/movements');
  }

  onCategoriesIconClick() {
    this.router.navigateByUrl('/categories');
  }
}
