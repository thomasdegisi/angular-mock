import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  addEventActive: boolean = false;
  customerEditActive: boolean = false;
  customersActive: boolean = false;
  homeActive: boolean = false;
  notFoundActive: boolean = false;
  pointsActive: boolean = false;
  underConstructionActive: boolean = false;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private route: ActivatedRoute, private breakpointObserver: BreakpointObserver) {
    switch (this.route.snapshot.url.toString()) {
      case 'chronology-event':
        this.showAddEvent();
        break;
      case '':
        this.showHome();
        break;
      case 'customer-edit':
        this.showCustomerEdit();
        break;
      case 'customers':
        this.showCustomers();
        break;
      case 'get-points':
      case 'spend-points':
        this.showPoints();
        break;
      case 'under':
        this.showUnderConstruction();
        break;
      default:
        this.showNotFound();
        break;
    }
  }

  showAddEvent() {
    this.addEventActive = true;
    this.customerEditActive = false;
    this.customersActive = false;
    this.homeActive = false;
    this.notFoundActive = false;
    this.pointsActive = false;
    this.underConstructionActive = false;
  }

  showCustomerEdit() {
    this.addEventActive = false;
    this.customerEditActive = true;
    this.customersActive = false;
    this.homeActive = false;
    this.notFoundActive = false;
    this.pointsActive = false;
    this.underConstructionActive = false;
  }

  showCustomers() {
    this.addEventActive = false;
    this.customerEditActive = false;
    this.customersActive = true;
    this.homeActive = false;
    this.notFoundActive = false;
    this.pointsActive = false;
    this.underConstructionActive = false;
  }

  showPoints() {
    this.addEventActive = false;
    this.customerEditActive = false;
    this.customersActive = false;
    this.homeActive = false;
    this.notFoundActive = false;
    this.pointsActive = true;
    this.underConstructionActive = false;
  }

  showHome() {
    this.addEventActive = false;
    this.customerEditActive = false;
    this.customersActive = false;
    this.homeActive = true;
    this.notFoundActive = false;
    this.pointsActive = false;
    this.underConstructionActive = false;
  }

  showNotFound() {
    this.addEventActive = false;
    this.customerEditActive = false;
    this.customersActive = false;
    this.homeActive = false;
    this.notFoundActive = true;
    this.pointsActive = false;
    this.underConstructionActive = false;
  }

  showUnderConstruction() {
    this.addEventActive = false;
    this.customerEditActive = false;
    this.customersActive = false;
    this.homeActive = false;
    this.notFoundActive = false;
    this.pointsActive = false;
    this.underConstructionActive = true;
  }
}
