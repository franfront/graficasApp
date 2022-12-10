import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartDataset } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html',
  styles: [],
})
export class GraficaBarraComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  @Input() horizontal: boolean = false;
  @Input() inputLabels!: any[];
  @Input() inputDatasets!:  ChartDataset<any, any>[];

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    indexAxis: 'x',
    scales: {
      x: {},
      y: {
      }
    }
  };

  public barChartLegend = true;
  public barChartPlugins = [];
  

  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: [],
    datasets: [
    ],
  };

  constructor() {}

  ngOnInit(): void {
    if (this.horizontal) {

 
      //Para invertir las barras y colocarlas horizontalmente necesitamos cambiar el "indexAxis"
      this.barChartOptions!.indexAxis = 'y';
 
      //Para que se nos muestren todos los datos horizontalmente también debemos retirar el               
      //"min" que tenemos en el barChartOptions.
      this.barChartOptions!.scales!["y"]!.min = 0;
    }
    this.barChartData.datasets = this.inputDatasets;
    this.barChartData.labels = this.inputLabels;
  }

  


}
