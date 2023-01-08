import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CustomerComponent } from './customer/customer.component';
import { CustomersComponent } from './customers/customers.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TrxComponent } from './trx/trx.component';
import { TrxesComponent } from './trxes/trxes.component';
import { UnderConstructionComponent } from './under-construction/under-construction.component';

const routes: Routes = [
  {
    path: '', component: NavComponent, children: [
      { path: 'customer/:id', component: CustomerComponent, },
      { path: 'customers', component: CustomersComponent, },
      { path: 'home', component: HomeComponent, },
      { path: 'events/:id', component: TrxComponent, },
      { path: 'events', component: TrxesComponent, },
      { path: 'get-points/:id', component: TrxComponent, },
      { path: 'get-points', component: TrxesComponent, },
      { path: 'spend-points/:id', component: TrxComponent, },
      { path: 'spend-points', component: TrxesComponent, },
      { path: 'trxes/:id', component: TrxComponent, },
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
