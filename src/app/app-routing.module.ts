import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';

// Transaction
import { TransactionsComponent } from './transactions/transactions.component';
import { AddComponent } from './transactions/add/add.component';
import { EditComponent } from './transactions/edit/edit.component';
// Dividends
import { DividendsComponent } from './dividends/dividends.component';
import { AddDividendsComponent } from './dividends/add-dividends/add-dividends.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  // Transaction
  { path: 'transactions', component: TransactionsComponent },
  { path: 'transaction/add', component: AddComponent },
  { path: 'transaction/edit/:id', component: EditComponent },
  // Dividends
  { path: 'dividends', component: DividendsComponent },
  { path: 'dividends/add', component: AddDividendsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
