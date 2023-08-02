import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from "@angular/router";
import { TransactionsService } from '../transactions.service';
import { formatDate } from '@angular/common';
import { AssetsService } from 'src/app/assets/assets.service';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  formTransaction = this.formBuilder.group({
    id: 0,
    asset_id: '',
    trade_date: '',
    value: 0,
    quantity: 0,
    total: 0
  });
  assets: any = [];

  constructor(
    private transactionService: TransactionsService,
    private formBuilder: FormBuilder,
    private activateRoute: ActivatedRoute,
    private router: Router,
    private assetsSrvc: AssetsService,
  ) { };

  ngOnInit(): void {
    this.getAssetsList();
    this.formTransaction.value.id = Number(this.activateRoute.snapshot.paramMap.get('id'));
    this.transactionService.getTransaction(this.formTransaction.value.id)
      .subscribe((data: any = {}) => {
        this.formTransaction.patchValue(data.transaction);
      });
  }

  onSubmit() {
    this.formTransaction.value.total = Number(this.formTransaction.value.value) * Number(this.formTransaction.value.quantity);

    this.transactionService.edit(this.formTransaction.value)
      .subscribe((data: {}) => {
        console.log(data);
        this.router.navigate(['/']);
      });
  }

  getAssetsList() {
    this.assetsSrvc.index()
      .subscribe((data: any = []) => {
        this.assets = data.assets;
      });
  }
}
