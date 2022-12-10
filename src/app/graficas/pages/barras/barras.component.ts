import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-barras',
  templateUrl: './barras.component.html',
  styles: [],
})
export class BarrasComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
    datasets: [
      { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A', backgroundColor: '#3039BF', hoverBackgroundColor: '#B31512' },
      { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B', backgroundColor: '#696B8C', hoverBackgroundColor: '#B31512' },
      { data: [50, 40, 67, 10, 84, 70, 20], label: 'Series C', backgroundColor: '#C23072', hoverBackgroundColor: '#B31512'},
    ],
  };

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
  };
  public randomize(): void {
    // Only Change 3 values
    this.barChartData.datasets[0].data = [
      Math.round(Math.random() * 100),

      Math.round(Math.random() * 100),

      Math.round(Math.random() * 100),

      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
    ];

    this.barChartData.datasets[1].data = [
      Math.round(Math.random() * 100),

      Math.round(Math.random() * 100),

      Math.round(Math.random() * 100),

      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
    ];

    this.barChartData.datasets[2].data = [
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
    ];

    this.chart?.update();
  }
  constructor() {}

  ngOnInit(): void {}
}
