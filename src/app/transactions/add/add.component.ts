import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TransactionsService } from '../transactions.service';
import { AssetsService } from 'src/app/assets/assets.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit{

  addTransaction = this.formBuilder.group({
    asset_id: '',
    trade_date: '',
    value: 0.00,
    quantity: 0,
    total: 0,
  });

  assets: any = [];

  constructor(
    private transactionService: TransactionsService,
    private formBuilder: FormBuilder,
    private assetsSrvc: AssetsService,
  ) { };

  ngOnInit(): void {
    this.getAssetsList();
  }

  onSubmit() {
    console.log(this.addTransaction.value);
    this.addTransaction.value.total = Number(this.addTransaction.value.value) * Number(this.addTransaction.value.quantity);

    this.transactionService.add(this.addTransaction.value)
      .subscribe((data: {}) => {
        console.log(data);
      });
  }

  getAssetsList() {
    this.assetsSrvc.index()
      .subscribe((data: any = []) => {
        this.assets = data.assets;
      });
  }
}
