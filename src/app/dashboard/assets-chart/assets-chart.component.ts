import { Component } from '@angular/core';
import { TransactionsService } from 'src/app/transactions/transactions.service';

@Component({
  selector: 'app-assets-chart',
  templateUrl: './assets-chart.component.html',
  styleUrls: ['./assets-chart.component.css']
})
export class AssetsChartComponent {
  chart: any;
  chartOptions = {
    animationEnabled: true,
    title: {
      text: "Assets"
    },
    data: [{
      type: "pie",
      startAngle: -90,
      indexLabel: "{name}: {p}",
      yValueFormatString: "R$ #,###.##",
      dataPoints: [
        { name: "", y: 0, p: 0}
      ]
    }]
  }

  constructor(private transactionsSrvc: TransactionsService) { }

  getChartInstance(chart: object) {
    this.chart = chart;
    this.getTotalPerAsset();
  }

  getTotalPerAsset() {
    this.transactionsSrvc.getTotalPerAsset()
      .subscribe((data: any = {}) => {
        this.chartOptions.data[0].dataPoints[0] = data.result[0];
        for (let index = 1; index < data.result.length; index++) {
          this.chartOptions.data[0].dataPoints.push(data.result[index]);  // Update an existing           
          this.chart.render();
        }
      });
  }
}
