import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent {

  
  
  public doughnutChartLabels: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [ 350, 450, 100 ],
        backgroundColor: [ '#2DD90B', '#00E6AC', '#BB33F0' ],
        hoverBackgroundColor: [ '#2DD90B', '#00E6AC', '#BB33F0' ]
      }
    ]
  };
  public doughnutChartType: ChartType = 'doughnut';
  
  
}
