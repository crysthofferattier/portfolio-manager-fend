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
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './templates/login/login.component';
import { AppLayoutComponent } from './templates/app-layout/app-layout.component';
import { authguardGuard } from './auth/authguard.guard';
import { AssetsComponent } from './assets/assets.component';


const routes: Routes = [
  {
    path: '', component: LoginComponent,
    children: [
      {
        path: 'login',
        component: AuthComponent
      }
    ]
  },
  {
    path: '',
    component: AppLayoutComponent,
    canActivate:[authguardGuard],
    children: [
      { path: 'dashboard', component: DashboardComponent },
      // Transaction
      { path: 'transactions', component: TransactionsComponent },
      { path: 'transaction/add', component: AddComponent },
      { path: 'transaction/edit/:id', component: EditComponent },
      // Dividends
      { path: 'dividends', component: DividendsComponent },
      { path: 'dividends/add', component: AddDividendsComponent },
      // Assets
      { path: 'assets', component: AssetsComponent },
    ]
  },
  { path: '**', redirectTo: 'dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
