import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import chartDataLabels from 'chartjs-plugin-datalabels';
Chart.register(...registerables);
Chart.register(chartDataLabels);
import * as L from 'leaflet';
import 'leaflet.heat';

@Component({
  selector: 'app-admin-statistics',
  standalone: true,
  imports: [],
  templateUrl: './admin-statistics.component.html',
  styleUrl: './admin-statistics.component.css'
})
export class AdminStatisticsComponent implements OnInit {
  ngOnInit(): void {
    this.RenderLineChart()
    this.RenderHorizontalBarChart()
    this.RenderHorizontalPercentageBarChart()
    this.RenderHeatMapChart()
  }

  RenderLineChart() {
    new Chart('line-chart', {
      type: 'line',
      data: {
        labels: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'],
        datasets: [
          {
            data: [20, 21, 10, 15, 0, 4, 5, 2, 8, 24, 21, 20, 18, 26, 23, 28, 29, 12, 14, 13, 22, 7, 6, 3],
            backgroundColor: 'black',
            borderColor: '#06577E'
          }
        ]
      },
      options: {
        layout: {
          padding: {
            top: 30
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
              text: 'Horário',
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

  RenderHorizontalBarChart() {
    new Chart('horizontal-bar-chart', {
      type: 'bar',
      data: {
        labels: ['Bairro 1', 'Bairro 2', 'Bairro 3', 'Bairro 4', 'Bairro 5', 'Bairro 6', 'Bairro 7', 'Bairro 8', 'Bairro 9', 'Bairro 10'],
        datasets: [
          {
            data: [1, 4, 8, 6, 9, 13, 2, 0, 3, 5],
            backgroundColor: '#06577E'
          }
        ]
      },
      options: {
        indexAxis: 'y',
        plugins: {
          datalabels: {
            color: '#000',
            anchor: 'end',
            align: 'end'
          },
          legend: {
            display: false
          }
        },
        scales: {
          y: {
            title: {
              display: true,
              text: 'Bairro',
              color: '#000',
              font: {
                weight: 'bold'
              }
            },
            grid: {
              display: false
            }
          },
          x: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Tempo Médio (dias)',
              color: '#000',
              font: {
                weight: 'bold'
              }
            },
            ticks: {
              display: false
            },
            grid: {
              display: false
            }
          }
        }
      }
    })
  }

  RenderHorizontalPercentageBarChart() {
    new Chart('horizontal-percentage-bar-chart', {
      type: 'bar',
      data: {
        labels: ['Bairro 1', 'Bairro 2', 'Bairro 3', 'Bairro 4', 'Bairro 5', 'Bairro 6', 'Bairro 7', 'Bairro 8', 'Bairro 9', 'Bairro 10'],
        datasets: [
          {
            data: [10, 40, 80, 65, 92, 1, 24, 0, 33, 15],
            backgroundColor: '#12B981'
          },
          {
            data: [90, 60, 20, 35, 8, 99, 76, 100, 67, 85],
            backgroundColor: '#F87171'
          }
        ]
      },
      options: {
        indexAxis: 'y',
        plugins: {
          datalabels: {
            color: '#000',
            anchor: 'center',
            align: 'center'
          },
          legend: {
            display: false
          }
        },
        scales: {
          y: {
            stacked: true, //é isso o que garante que as informações fiquem na mesma coluna
            title: {
              display: true,
              text: 'Bairro',
              color: '#000',
              font: {
                weight: 'bold'
              }
            },
            grid: {
              display: false
            }
          },
          x: {
            stacked: true, //é isso o que garante que as informações fiquem na mesma coluna
            beginAtZero: true,
            title: {
              display: true,
              text: 'Total de Denúncias',
              color: '#000',
              font: {
                weight: 'bold'
              }
            },
            ticks: {
              display: false
            },
            grid: {
              display: false
            }
          }
        }
      }
    })
  }

  RenderHeatMapChart() {
    const map = L.map('map').setView([-21.6033, -48.3658], 13);

    // Estilo mapa OpenaStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data © OpenStreetMap contributors'
    }).addTo(map);

    // Estilo mapa escuro
    // L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    //   attribution: '&copy; <a href="https://carto.com/">CARTO</a>',
    //   subdomains: 'abcd',
    //   maxZoom: 19
    // }).addTo(map);

    // Estilo mapa amarelado
    // L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
    //   attribution: '&copy; <a href="https://www.esri.com/">Esri</a>',
    //   maxZoom: 19
    // }).addTo(map);

    // Estilo mapa claro
    // L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    //   attribution: '&copy; <a href="https://carto.com/">CARTO</a>',
    //   subdomains: 'abcd',
    //   maxZoom: 19
    // }).addTo(map);

    const points: [number, number, number][] = [
      // Matão
      // Esses valores são o seguinte: [latitude, longitude, percentual de denúncias]
      [-21.6033, -48.3658, 0.5], // Centro
      [-21.5900, -48.3600, 0.1], // Norte
      [-21.6200, -48.3700, 0.15], // Sul
      [-21.6050, -48.3450, 0.2], // Leste
      [-21.6100, -48.3900, 0.05],  // Oeste

      // Araraquara
      [-21.7865, -48.1780, 0.9], // Centro
      [-21.7730, -48.1785, 0.6], // Norte (Jardim Universal)
      [-21.8020, -48.1775, 0.7], // Sul (Vale do Sol)
      [-21.7850, -48.1620, 0.4], // Leste (Jardim Dom Pedro)
      [-21.7840, -48.1950, 0.8], // Oeste (Vila Xavier)
    ]

    // Estes daqui são os pontos onde os pontos de calor serão mostrados. Então passamos a variável que possui esses pontos e o estilo desses pontos de calor
    const heat = (L as any).heatLayer(points, {
      radius: 100,
      blur: 15,
      maxZoom: 4
    }).addTo(map);
  }
}

