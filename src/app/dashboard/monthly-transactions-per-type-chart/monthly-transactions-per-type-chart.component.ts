import { Component, OnInit } from '@angular/core';
import { TransactionsService } from 'src/app/transactions/transactions.service';

@Component({
  selector: 'app-monthly-transactions-per-type-chart',
  templateUrl: './monthly-transactions-per-type-chart.component.html',
  styleUrls: ['./monthly-transactions-per-type-chart.component.css']
})
export class MonthlyTransactionsPerTypeChartComponent {
  chart: any;
  chartOptions = {
    animationEnabled: true,
    title: {
      text: "Monthly Transactions per Type"
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

  constructor(private transactionSrvc: TransactionsService) { }

  getChartInstance(chart: object) {
    this.chart = chart;

    this.chartOptions.data[0].dataPoints.pop();
    this.chartOptions.data[1].dataPoints.pop();

    this.getMonthlyTransactionsPerType();
  }

  getMonthlyTransactionsPerType() {
    this.transactionSrvc.getMonthlyTransactionsPerType()
      .subscribe((data: any = {}) => {
        for (let index = 0; index < data.monthlyTransactions.length; index++) {
          if (data.monthlyTransactions[index].type_id === 1) { //FIIs
            this.chartOptions.data[0].dataPoints.push(data.monthlyTransactions[index]);
          } else if (data.monthlyTransactions[index].type_id === 2) {
            this.chartOptions.data[1].dataPoints.push(data.monthlyTransactions[index]);
          } else {
            continue;
          }

          this.chart.render();
        }
      });
  }
}
