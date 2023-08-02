import { Component, OnInit } from '@angular/core';
import { AssetsService } from './assets.service';

@Component({
  selector: 'app-assets',
  templateUrl: './assets.component.html',
  styleUrls: ['./assets.component.css']
})
export class AssetsComponent implements OnInit {

  assets: any = [];

  constructor(private assetsSrvc: AssetsService) { }

  ngOnInit(): void {
    this.index();
  }

  index() {
    this.assetsSrvc.index()
      .subscribe((data: any = {}) => {
        this.assets = data.assets;
      });
  }

  delete(id: any = 0) {

  }
}
