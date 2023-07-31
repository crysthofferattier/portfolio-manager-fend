import { Component, OnInit } from '@angular/core';
import { DividendsService } from './dividends.service';

@Component({
  selector: 'app-dividends',
  templateUrl: './dividends.component.html',
  styleUrls: ['./dividends.component.css']
})
export class DividendsComponent implements OnInit {

  dividends: any = [];

  constructor(private dividendsSrvc: DividendsService) { }

  ngOnInit(): void {
    this.list();
  }

  list() {
    this.dividendsSrvc.getDividends()
      .subscribe((data: any = {}) => {
        this.dividends = data.dividends;
        console.log(this.dividends);
      });
  }

  delete(id: any) {
    this.dividendsSrvc.delete(id)
      .subscribe((data: any = {}) => {
        console.log(data);
        this.list();
      });
  }
}
