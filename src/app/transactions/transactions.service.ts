import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, retry } from 'rxjs';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  apiURL = "http://localhost:8765/api/v1/";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  constructor(private http: HttpClient) { }

  getTransaction(id: any) {
    return this.http.get(this.apiURL + 'transactions/' + id + '.json');
  }

  getTransactions() {
    return this.http.get(this.apiURL + 'transactions.json');
  }

  add(transaction: any) {
    return this.http.post(this.apiURL + 'transactions.json', transaction, this.httpOptions);
  }

  edit(transaction: any) {
    return this.http.put(this.apiURL + 'transactions/' + transaction.id + '.json', transaction, this.httpOptions);
  }

  delete(id: any) {
    return this.http.delete(this.apiURL + 'transactions/' + id + '.json');
  }

  getTotalPortfolio() {
    return this.http.get(this.apiURL + 'transactions/total-portfolio.json');
  }

  getTotalPerType(id: any) {
    return this.http.get(this.apiURL + 'transactions/total-per-type/' + id + '.json');
  }

  getMonthlyTransactions() {
    return this.http.get(this.apiURL + 'transactions/transactions-per-month.json');
  }

  getMonthlyTransactionsPerType() {
    return this.http.get(this.apiURL + 'transactions/transactions-per-month-type.json');
  }
}
