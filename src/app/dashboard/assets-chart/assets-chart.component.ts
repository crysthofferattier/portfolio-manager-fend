import { Component } from '@angular/core';
import { TransactionsService } from 'src/app/transactions/transactions.service';

@Component({
  selector: 'app-assets-chart',
  templateUrl: './assets-chart.component.html',
  styleUrls: ['./assets-chart.component.css']
})
export class AssetsChartComponent {
  chart: any;
  allFii = 0;
  allStock = 0;
  chartOptions = {
    animationEnabled: true,
    title: {
      text: "Assets"
    },
    subtitles: [{
      text: ""
    }],
    data: [{
      type: "pie",
      startAngle: -90,
      indexLabel: "{name}: {p}%",
      yValueFormatString: "R$ #,###.##",
      dataPoints: [
        { name: "", y: 0, p: 0 }
      ]
    }]
  };

  constructor(private transactionsSrvc: TransactionsService) { }

  getChartInstance(chart: object) {
    this.chart = chart;
    this.getTotalPerAsset();
  }


  /**
   * Type
   * 1 - FII
   * 2 - STOCK
   */
  getTotalPerAsset() {
    this.transactionsSrvc.getTotalPerAsset()
      .subscribe((data: any = {}) => {

        for (let index = 0; index < data.result.length; index++) {
          switch (data.result[index].type_id) {
            case 1:
              this.allFii += Number(data.result[index].p);
              break;
            case 2:
              this.allStock += Number(data.result[index].p);
              break;

            default:
              break;
          }
          this.chartOptions.data[0].dataPoints.push(data.result[index]);  // Update an existing                     
        }

        this.chartOptions.subtitles[0].text = "FIIs " + this.allFii + "% STOCKS " + this.allStock + "%";

        this.chartOptions.data[0].dataPoints.splice(0, 1);
        this.chart.render();
      });
  }
}
