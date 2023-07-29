import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';

import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

// Templates
import { MainHeaderComponent } from './templates/main-header/main-header.component';
import { MainSidebarComponent } from './templates/main-sidebar/main-sidebar.component';
import { MainFooterComponent } from './templates/main-footer/main-footer.component';
import { ContentWrapperComponent } from './templates/content-wrapper/content-wrapper.component';
import { ControlSidebarComponent } from './templates/control-sidebar/control-sidebar.component';

// Overview (Dashboard)
import { OverviewComponent } from './overview/overview.component';
import { DashboardComponent } from './dashboard/dashboard.component';

// Transaction
import { TransactionsComponent } from './transactions/transactions.component';
import { AddComponent } from './transactions/add/add.component';
import { EditComponent } from './transactions/edit/edit.component';
import { MonthlyTransactionsChartComponent } from './dashboard/monthly-transactions-chart/monthly-transactions-chart.component';
import { MonthlyTransactionsPerTypeChartComponent } from './dashboard/monthly-transactions-per-type-chart/monthly-transactions-per-type-chart.component';
import { DividendsComponent } from './dividends/dividends.component';
import { AddDividendsComponent } from './dividends/add-dividends/add-dividends.component';
import { AssetsComponent } from './assets/assets.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './templates/login/login.component';
import { AppLayoutComponent } from './templates/app-layout/app-layout.component';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    MainSidebarComponent,
    MainFooterComponent,
    ContentWrapperComponent,
    ControlSidebarComponent,
    OverviewComponent,
    TransactionsComponent,
    AddComponent,
    EditComponent,
    DashboardComponent,
    MonthlyTransactionsChartComponent,
    MonthlyTransactionsPerTypeChartComponent,
    DividendsComponent,
    AddDividendsComponent,
    AssetsComponent,
    AuthComponent,
    LoginComponent,
    AppLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CanvasJSAngularChartsModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
