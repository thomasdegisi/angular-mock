import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CustomerEditComponent } from './customer-edit/customer-edit.component';
import { CustomersComponent } from './customers/customers.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TrxEditComponent } from './trx-edit/trx-edit.component';
import { TrxesComponent } from './trxes/trxes.component';
import { UnderConstructionComponent } from './under-construction/under-construction.component';

const routes: Routes = [
  {
    path: '', component: NavComponent, children: [
      { path: 'customer/:id', component: CustomerEditComponent, },
      { path: 'customers', component: CustomersComponent, },
      { path: 'home', component: HomeComponent, },
      { path: 'events', component: TrxesComponent, },
      { path: 'get-points', component: TrxesComponent, },
      { path: 'spend-points', component: TrxesComponent, },
      { path: 'trx/:id', component: TrxEditComponent, },
      { path: 'trxes', component: TrxesComponent, },
      { path: 'under', component: UnderConstructionComponent, },
      { path: '', redirectTo: '/home', pathMatch: 'full'},
      { path: '**', component: PageNotFoundComponent, },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
