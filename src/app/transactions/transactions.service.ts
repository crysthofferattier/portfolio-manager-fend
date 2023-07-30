import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {
  env = environment;
  apiURL = this.env.apiUrl;

  constructor(private http: HttpClient) { }

  getTransaction(id: any) {
    return this.http.get(this.apiURL + '/transactions/' + id + '.json', this.env.httpHeaders);
  }

  getTransactions() {
    return this.http.get(this.apiURL + '/transactions.json', this.env.httpHeaders);
  }

  add(transaction: any) {
    return this.http.post(this.apiURL + '/transactions.json', transaction, this.env.httpHeaders);
  }

  edit(transaction: any) {
    return this.http.put(this.apiURL + '/transactions/' + transaction.id + '.json', transaction, this.env.httpHeaders);
  }

  delete(id: any) {
    return this.http.delete(this.apiURL + '/transactions/' + id + '.json', this.env.httpHeaders);
  }

  getTotalPortfolio() {
    return this.http.get(this.apiURL + '/transactions/total-portfolio.json', this.env.httpHeaders);
  }

  getTotalPerType(id: any) {
    return this.http.get(this.apiURL + '/transactions/total-per-type/' + id + '.json', this.env.httpHeaders);
  }

  getMonthlyTransactions() {
    return this.http.get(this.apiURL + '/transactions/transactions-per-month.json', this.env.httpHeaders);
  }

  getMonthlyTransactionsPerType() {
    return this.http.get(this.apiURL + '/transactions/transactions-per-month-type.json', this.env.httpHeaders);
  }

  getTotalPerAsset(){
    return this.http.get(this.apiURL + '/transactions/total-per-asset.json', this.env.httpHeaders);
  }
}
