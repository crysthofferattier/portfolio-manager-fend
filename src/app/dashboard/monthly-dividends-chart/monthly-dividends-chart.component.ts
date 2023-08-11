import { Component, OnInit } from '@angular/core';
import { DividendsService } from 'src/app/dividends/dividends.service';

@Component({
  selector: 'app-monthly-dividends-chart',
  templateUrl: './monthly-dividends-chart.component.html',
  styleUrls: ['./monthly-dividends-chart.component.css']
})
export class MonthlyDividendsChartComponent {
  chart: any;
  chartOptions = {
    title: {
      text: "Dividends"
    },
    theme: "light2",
    animationEnabled: true,
    axisY: {
      includeZero: true,
      valueFormatString: "R$ #,##0"
    },
    data: [{
      type: "column", //change type to bar, line, area, pie, etc
      yValueFormatString: "R$ #,##0.##",
      color: "#01b8aa",
      dataPoints: [
        { label: "", y: 0 },
      ]
    }]
  };

  constructor(private dividendsSrvc: DividendsService) { }

  getChartInstance(chart: object) {
    this.chart = chart;
    this.getMonthlyDividends();
  }

  getMonthlyDividends() {
    this.dividendsSrvc.getMonthlyDividends()
      .subscribe((data: any = []) => {
        this.chartOptions.data[0].dataPoints[0] = data.monthlyDividends[0];
        for (let index = 1; index < data.monthlyDividends.length; index++) {
          this.chartOptions.data[0].dataPoints.push(data.monthlyDividends[index]);  // Update an existing           
          this.chart.render();
        }
      });
  }
}
