import { Component, OnInit } from '@angular/core';
import { TransactionsService } from '../transactions/transactions.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  totalPortfolio: any = {};
  totalStocks: any = {};
  totalFIIs: any = {};

  constructor(public transactionsSrvc: TransactionsService) { }

  ngOnInit(): void {
    this.getTotalPortfolio();
    this.getTotalStocks();
    this.getTotalFIIs();
  }

  getTotalPortfolio() {
    this.transactionsSrvc.getTotalPortfolio()
      .subscribe((data: {}) => {
        this.totalPortfolio = data;
      });
  }

  getTotalStocks() {
    this.transactionsSrvc.getTotalPerType(3)
      .subscribe((data: {}) => {
        this.totalStocks = data;
      });
  }

  getTotalFIIs() {
    this.transactionsSrvc.getTotalPerType(2)
      .subscribe((data: {}) => {
        this.totalFIIs = data;
      });
  }
}
