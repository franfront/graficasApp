import { GraficasService } from './../../services/graficas.service';
import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [],
})
export class DonaHttpComponent implements OnInit {
  constructor(private graficasService: GraficasService) {}

  ngOnInit(): void {
    // this.graficasService.getUsuariosRedesSociales().subscribe((data) => {
    //   console.log(data);
    //   const labels = Object.keys(data);
    //   const values = Object.values(data);
    //   this.doughnutChartData = {
    //     labels: labels,
    //     datasets: [
    //       {
    //         data: values,
    //         backgroundColor: [
    //           '#2DD90B',
    //           '#00E6AC',
    //           '#BB33F0',
    //           '#D59AE6',
    //           '#DEDDE7',
    //         ],
    //         hoverBackgroundColor: [
    //           '#2DD90B',
    //           '#00E6AC',
    //           '#BB33F0',
    //           '#D59AE6',
    //           '#DEDDE7',
    //         ],
    //       },
    //     ],
    //   };
    // });

    this.graficasService
      .getUsuariosRedesSocialesDonaData()
      .subscribe(({ labels, datasets }) => {
        this.doughnutChartData = {
          labels: labels,
          datasets: [
            {
              data: datasets[0].data,
              backgroundColor: [
                '#2DD90B',
                '#00E6AC',
                '#BB33F0',
                '#D59AE6',
                '#DEDDE7',
              ],
              hoverBackgroundColor: [
                '#2DD90B',
                '#00E6AC',
                '#BB33F0',
                '#D59AE6',
                '#DEDDE7',
              ],
            },
          ],
        };
      });
  }
  public doughnutChartLabels: string[] = [];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [{ data: [] }],
  };
  public doughnutChartType: ChartType = 'doughnut';
}
