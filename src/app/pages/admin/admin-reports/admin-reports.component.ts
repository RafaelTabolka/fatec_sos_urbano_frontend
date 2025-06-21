import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
Chart.register(...registerables)
Chart.register(ChartDataLabels)
import { EChartsOption } from 'echarts';
import { NgxEchartsDirective, provideEcharts } from 'ngx-echarts';
import { RevealOnScrollDirective } from '../../../shared/reveal-on-scroll.directive';

@Component({
  selector: 'app-admin-reports',
  standalone: true,
  imports: [CommonModule, RevealOnScrollDirective],
  templateUrl: './admin-reports.component.html',
  styleUrl: './admin-reports.component.css',
  providers: [
    provideEcharts()
  ]
})
export class AdminReportsComponent implements OnInit {
  ngOnInit(): void {
    this.RenderBarChar();
    this.RenderPieChar();
  }
  // chartOptions: EChartsOption = {
  //   xAxis: {
  //     type: 'category',
  //     data: ['Janeiro/2024', 'Fevereiro/2024', 'Março/2024'],
  //     axisLabel: {
  //       rotate: 15,
  //       interval: 1
  //     }
  //   },
  //   yAxis: {
  //     type: 'value'
  //   },
  //   series: [
  //     {
  //       name: 'Vendas (mil)',
  //       type: 'bar',
  //       data: [30, 20, 78],
  //       label: {
  //         show: true,
  //         position: 'top',
  //         formatter: '{c} mil'
  //       } 
  //     },
  //     {
  //       name: 'Vendas (mil)',
  //       type: 'line',
  //       data: [30, 20, 78],

  //     }
  //   ]
  // }

  RenderBarChar() {
    new Chart('bar-chart', {
      type: 'bar',
      data: {
        labels: ['Região norte', 'Região norte', 'Região norte', 'Região norte', 'Região norte', 'Região norte', 'Região norte', 'Região norte', 'Região norte', 'Região norte', 'Região norte'],
        // labels:['Teste1', 'Teste2', 'Teste3', 'Teste4', 'Teste4', 'Teste4', 'Teste4'],
        datasets: [
          {
            // label: 'Região',
            data: [100, 20, 15, 20, 20, 20, 20, 20, 20, 20, 20],
            // data: [10, 20, 15, 20, 20, 20, 20],
            backgroundColor: '#06577E'
          }
        ]
      },
      options: {
        layout: {
          padding: {
            top: 25
          }
        },
        plugins: {
          datalabels: {
            color: '#000',
            anchor: 'end',
            align: 'top'
          },
          legend: {
            display: false
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Qtde de Denúncias',
              color: '#000',
              font: {
                // size: 13
                weight: 'bold'
              }
            },
            ticks: {
              display: false
            },
            grid: {
              display: false
            }
          },
          x: {
            title: {
              display: true,
              text: 'Região',
              color: '#000',
              font: {
                
                weight: 'bold'
              }
            },
            grid: {
              display: false
            }
          }
        }
      }
    })
  }

  RenderPieChar() {
    new Chart('pie-chart', {
      type: 'pie',
      data: {
        labels: ['Região norte', 'Região norte', 'Região norte', 'Região norte', 'Região norte', 'Região norte', 'Região norte', 'Região norte', 'Região norte', 'Região norte', 'Região norte'],
        // labels:['Teste1', 'Teste2', 'Teste3', 'Teste4', 'Teste4', 'Teste4', 'Teste4'],
        datasets: [
          {
            label: 'sales',
            data: [10, 20, 15, 20, 20, 20, 20, 20, 20, 20, 20],
            // data: [10, 20, 15, 20, 20, 20, 20],
            // backgroundColor: '#06577E',
            // borderColor:'#fff'
          }
        ]
      },
      options: {
        layout: {
          padding: {
            top: 22,
            bottom: 22 
          }
        },
        plugins: {
          datalabels: {
            color: '#000',
            anchor: 'end',
            align: 'end',
            font: {
              size: 15
            }
          },
          legend: {
            title: {
              display: true,
              text: 'Região',
              color: '#000',
              font: {
                size: 17,
                weight: 'bold'
              }
            },
            display: true,
            position: 'right',
            labels: {
              color: '#000',
              font: {
                size: 15,
                
              }
            }
          }
        }
      }
    })
  }
}
