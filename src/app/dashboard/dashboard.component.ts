import { Component, OnInit } from '@angular/core';
import { TransactionsService } from '../transactions/transactions.service';
import { DividendsService } from '../dividends/dividends.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  totalPortfolio: any = {};
  totalStocks: any = {};
  totalFIIs: any = {};
  totalDiv: number = 0;
  totalDivFiis: number = 0;
  totalDivStocks: number = 0;

  constructor(public transactionsSrvc: TransactionsService,
    public dividendsSrvc: DividendsService) { }

  ngOnInit(): void {
    this.getTotalPortfolio();
    this.getTotalStocks();
    this.getTotalFIIs();
    this.getDividendsPerType();
  }

  getTotalPortfolio() {
    this.transactionsSrvc.getTotalPortfolio()
      .subscribe((data: {}) => {
        this.totalPortfolio = data;
      });
  }

  getTotalStocks() {
    this.transactionsSrvc.getTotalPerType(2)
      .subscribe((data: {}) => {
        this.totalStocks = data;
      });
  }

  getTotalFIIs() {
    this.transactionsSrvc.getTotalPerType(1)
      .subscribe((data: {}) => {
        this.totalFIIs = data;
      });
  }

  getDividendsPerType() {
    this.dividendsSrvc.getDividendsPerType()
      .subscribe((data: any = {}) => {
        this.totalDiv = data.total;

        for (let index = 0; index < data.fiis.length; index++) {
          this.totalDivFiis += Number(data.fiis[index].value);
        }

        for (let index = 0; index < data.stocks.length; index++) {
          this.totalDivStocks += Number(data.stocks[index].value);
        }        
      });
  }
}
