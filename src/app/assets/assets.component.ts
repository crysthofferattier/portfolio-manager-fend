import { Component, OnInit } from '@angular/core';
import { AssetsService } from './assets.service';

@Component({
  selector: 'app-assets',
  templateUrl: './assets.component.html',
  styleUrls: ['./assets.component.css']
})
export class AssetsComponent implements OnInit {

  constructor(private assetsSrvc: AssetsService){}
  
  ngOnInit(): void {
    this.assetsSrvc.getAssets()
    .subscribe((data: any = {}) => {
      console.log(data);
    });
  }
}
