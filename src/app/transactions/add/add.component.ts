import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TransactionsService } from '../transactions.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  addTransaction = this.formBuilder.group({
    symbol: '',
    trade_date: '',
    value: 0,
    quantity: 0,
    total: 0,
    type_id: ''
  });

  constructor(
    private transactionService: TransactionsService,
    private formBuilder: FormBuilder
  ) { };

  onSubmit() {
    this.addTransaction.value.total = Number(this.addTransaction.value.value) * Number(this.addTransaction.value.quantity);

    this.transactionService.add(this.addTransaction.value)
      .subscribe((data: {}) => {
        console.log(data);
      });
  }
}
