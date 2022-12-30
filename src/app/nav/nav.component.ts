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
  customerEditActive: boolean = false;
  customersActive: boolean = false;
  homeActive: boolean = false;
  notFoundActive: boolean = false;
  trxEditActive: boolean = false;
  trxesActive: boolean = false;
  underConstructionActive: boolean = false;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private route: ActivatedRoute, private breakpointObserver: BreakpointObserver) {
    switch (this.route.snapshot.url.toString()) {
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
        this.showTrxes();
        break;
      case 'add-event':
      case 'trx-edit':
        this.showTrxEdit();
        break;
      case 'under':
        this.showUnderConstruction();
        break;
      case 'unknown':
      default:
        this.showNotFound();
        break;
    }
  }

  showCustomerEdit() {
    this.showNone();
    this.customerEditActive = true;
  }

  showCustomers() {
    this.showNone();
    this.customersActive = true;
  }

  showHome() {
    this.showNone();
    this.homeActive = true;
  }

  showNone() {
    this.trxEditActive = false;
    this.customerEditActive = false;
    this.customersActive = false;
    this.homeActive = false;
    this.notFoundActive = false;
    this.trxesActive = false;
    this.underConstructionActive = false;
  }

  showNotFound() {
    this.showNone();
    this.notFoundActive = true;
  }

  showTrxEdit() {
    this.showNone();
    this.trxEditActive = true;
  }

  showTrxes() {
    this.showNone();
    this.trxesActive = true;
  }

  showUnderConstruction() {
    this.showNone();
    this.underConstructionActive = true;
  }
}
