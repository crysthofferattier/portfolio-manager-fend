import { Component } from '@angular/core';
import { DividendsService } from 'src/app/dividends/dividends.service';

@Component({
  selector: 'app-monthly-dividends-per-type-chart',
  templateUrl: './monthly-dividends-per-type-chart.component.html',
  styleUrls: ['./monthly-dividends-per-type-chart.component.css']
})
export class MonthlyDividendsPerTypeChartComponent {
  chart: any;
  chartOptions = {
    animationEnabled: true,
    title: {
      text: ""
    },
    axisX: {
      labelAngle: -90
    },
    toolTip: {
      shared: true
    },
    data: [{ // 0
      type: "column",
      name: "FIIs",
      legendText: "FIIs",
      showInLegend: true,
      dataPoints: [
        { label: "", y: 0, type_id: 0 }
      ]
    }, {// 1
      type: "column",
      name: "Stocks",
      legendText: "Stocks",
      showInLegend: true,
      dataPoints: [
        { label: "", y: 0, type_id: 0 }
      ]
    }]
  }

  constructor(private dividendsSrvc: DividendsService) { }

  getChartInstance(chart: object) {
    this.chart = chart;

    this.chartOptions.data[0].dataPoints.pop();
    this.chartOptions.data[1].dataPoints.pop();

    this.getMonthlyDividendsPerType();
  }

  getMonthlyDividendsPerType() {
    this.dividendsSrvc.getMonthlyDividendsPerType()
      .subscribe((data: any = {}) => {
        for (let index = 0; index < data.monthlyDividendsPerType.length; index++) {
          if (data.monthlyDividendsPerType[index].type_id === 1) { //FIIs
            this.chartOptions.data[0].dataPoints.push(data.monthlyDividendsPerType[index]);
          } else if (data.monthlyDividendsPerType[index].type_id === 2) {
            this.chartOptions.data[1].dataPoints.push(data.monthlyDividendsPerType[index]);
          } else {
            continue;
          }

          this.chart.render();
        }
      });
  }
}
