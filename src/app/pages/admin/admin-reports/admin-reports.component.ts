import { CommonModule, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
Chart.register(...registerables)
Chart.register(ChartDataLabels)
import { provideEcharts } from 'ngx-echarts';
import { RevealOnScrollDirective } from '../../../shared/reveal-on-scroll.directive';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { StatusIncidentServiceService } from '../../../services/core/status-incident/status-incident-service.service';
import { IIncidentStatusResponse } from '../../../interface/Incident/IIncidentStatusesGetAllResponse';
import { IIncidentResponse } from '../../../interface/Incident/IIncidentGetAllResponse';
import { IncidentServiceService } from '../../../services/core/incident/incident-service.service';
import { IInfosReportResponse } from '../../../interface/Admin/admin-infos-report/IInfosReportResponse';
import { IInfosReportRequest } from '../../../interface/Admin/admin-infos-report/IInfosReportRequest';
import { AdminInfosReportServiceService } from '../../../services/admin/admin-reports/admin-infos-report-service.service';



@Component({
  selector: 'app-admin-reports',
  standalone: true,
  imports: [CommonModule, RevealOnScrollDirective, ReactiveFormsModule],
  templateUrl: './admin-reports.component.html',
  styleUrl: './admin-reports.component.css',
  providers: [
    provideEcharts()
  ]
})
export class AdminReportsComponent implements OnInit {
  filterForm: FormGroup;
  incidents: IIncidentResponse[] = [];
  statuses: IIncidentStatusResponse[] = [];
  adminInfosRequest: IInfosReportRequest = {};
  adminInfosResponse: IInfosReportResponse = {
    qtyUsers: 0,
    qtyIncidents: 0,
    qtyIncidentsResolved: 0,
    avgResolutionTimeInDays: null,
    adminIncidentsByRegionsDto: [],
    adminIncidentsByStatusesDto: [] 
  }
  barChart: Chart | null = null;
  pieChart: Chart | null = null;

  constructor(
    private fb: FormBuilder,
    private statusIncident: StatusIncidentServiceService,
    private incident: IncidentServiceService,
    private infos: AdminInfosReportServiceService ) {
    this.filterForm = this.fb.group({
      'startDate': ['', Validators.required],
      'endDate': ['', Validators.required],
      'status': ['', Validators.required],
      'address': ['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.statusIncident.getAllIncidentStatuses().subscribe((res) => {
      this.statuses = res.incidentStatuses.sort((a, b) => a.name.localeCompare(b.name)); // Ordem alfabética
    })

    this.incident.getAllIncidents().subscribe((res) => {
      this.incidents = res.incidents;
    })

    this.infos.ListInfosReport(this.adminInfosRequest).subscribe((res) => {
      this.adminInfosResponse = res
      // console.log(this.adminInfosResponse);
      this.renderBarChart();
      this.renderPieChart();
    })
  }

  makeFilters() {
    this.adminInfosRequest = {
      startDate: this.filterForm.value.startDate,
      endDate: this.filterForm.value.endDate,
      status: this.filterForm.value.status,
      address: this.filterForm.value.address
    }
    console.log(this.adminInfosRequest);
    
    this.infos.ListInfosReport(this.adminInfosRequest).subscribe((res) => {
      this.adminInfosResponse = res
      this.renderBarChart();
      this.renderPieChart();
    })
  }

  //#region BarChart
  renderBarChart() {
    this.barChart?.destroy(); // Se houver ja criado, então destroi para que o gráfico filtrado seja criado

    const labels: string[] = [];
    const data: number[] = [];
    
    for (const element of this.adminInfosResponse.adminIncidentsByRegionsDto) {
      labels.push(element.address);
      data.push(element.qtyIncidents);
    }

    this.barChart = new Chart('bar-chart', {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [
          {
            // label: 'região',
            data: data,
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
  //#endregion

  //#region  PieChart
  renderPieChart() {
    this.pieChart?.destroy(); // Se houver ja criado, então destroi para que o gráfico filtrado seja criado

    const labels: string[] = [];
    const data: number[] = [];

    for (const element of this.adminInfosResponse.adminIncidentsByStatusesDto) {
      labels.push(element.status);
      data.push(element.qtyIncidents);
    }

    this.pieChart = new Chart('pie-chart', {
      type: 'pie',
      data: {
        labels: labels,
        // labels:['Teste1', 'Teste2', 'Teste3', 'Teste4', 'Teste4', 'Teste4', 'Teste4'],
        datasets: [
          {
            label: 'sales',
            data: data,
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
              text: 'Status',
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
  //#endregion

}
