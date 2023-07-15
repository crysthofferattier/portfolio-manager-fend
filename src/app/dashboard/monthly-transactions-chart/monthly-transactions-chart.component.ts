import { Component } from '@angular/core';
import { TransactionsService } from 'src/app/transactions/transactions.service';

@Component({
  selector: 'app-monthly-transactions-chart',
  templateUrl: './monthly-transactions-chart.component.html',
  styleUrls: ['./monthly-transactions-chart.component.css']
})
export class MonthlyTransactionsChartComponent {
  chart: any;
  chartOptions = {
    title: {
      text: "Monthly Transactions"
    },
    theme: "light2",
    animationEnabled: true,
    axisY: {
      includeZero: true,
      valueFormatString: "R$ #,##0"
    },
    data: [{
      type: "column", //change type to bar, line, area, pie, etc
      yValueFormatString: "R$ #,##0",
      color: "#01b8aa",
      dataPoints: [
        { label: "", y: 0 },
      ]
    }]
  };

  constructor(public transactionsSrvc: TransactionsService) { }

  getChartInstance(chart: object) {
    this.chart = chart;
    this.getMonthlyTransactions();
  }

  getMonthlyTransactions() {
    this.transactionsSrvc.getMonthlyTransactions()
      .subscribe((data: any = {}) => {
        this.chartOptions.data[0].dataPoints[0] = data.monthlyTransactions[0];
        for (let index = 1; index < data.monthlyTransactions.length; index++) {
          this.chartOptions.data[0].dataPoints.push(data.monthlyTransactions[index]);  // Update an existing           
          this.chart.render();
        }
      });
  }
}
