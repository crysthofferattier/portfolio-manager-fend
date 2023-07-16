import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DividendsService } from '../dividends.service';
import { AssetsService } from 'src/app/assets/assets.service';

@Component({
  selector: 'app-add-dividends',
  templateUrl: './add-dividends.component.html',
  styleUrls: ['./add-dividends.component.css']
})
export class AddDividendsComponent implements OnInit {
  addDividendForm = this.formBuilder.group({
    asset_id: '',
    date: new Date().toLocaleDateString("pt-BR"),
    value: 0,
  });
  assets: any = [];

  constructor(
    private formBuilder: FormBuilder,
    private dividendsSrvc: DividendsService,
    private assetsSrvc: AssetsService
  ) { };

  ngOnInit(): void {
    this.getAssets();
  }

  onSubmit() {
    this.dividendsSrvc.add(this.addDividendForm.value)
      .subscribe((data: any = {}) => {
        console.log(data)
      });
  }

  getAssets() {
    this.assetsSrvc.getAssets()
      .subscribe((data: any = {}) => {
        this.assets = data.assets
      });
  }
}
