import { Component, OnInit } from '@angular/core';
import { TransactionsService } from './transactions.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit{
  transactions: any = [];

  constructor(public transactionsServive: TransactionsService) {}

  ngOnInit(): void {
    this.listTransactions();
  }

  listTransactions() {
    this.transactionsServive.getTransactions()
      .subscribe((data: any = {}) => {
        this.transactions = data.transactions;
      });
  }

  delete(id:any) {
    this.transactionsServive.delete(id)
      .subscribe((data: {}) => {
        console.log(data);
        this.listTransactions();
      });
  }
}
