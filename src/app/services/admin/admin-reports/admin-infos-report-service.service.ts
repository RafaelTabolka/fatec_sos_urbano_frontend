import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IInfosReportResponse } from '../../../interface/Admin/admin-infos-report/IInfosReportResponse';
import { IInfosReportRequest } from '../../../interface/Admin/admin-infos-report/IInfosReportRequest';

@Injectable({
  providedIn: 'root'
})
export class AdminInfosReportServiceService {
  private baseUrl: string = 'https://localhost:7258/AdminInfosReport/listAdminInfosReport';

  constructor(private http: HttpClient) { }

  ListInfosReport(request: IInfosReportRequest): Observable<IInfosReportResponse> {
    let params: HttpParams = new HttpParams();

    if (request.startDate)
      params = params.set('StartDate', request.startDate.toString());

    if (request.endDate)
      params = params.set('EndDate', request.endDate.toString());

    if (request.status)
      params = params.set('Status', request.status.toString());

    if (request.address)
      params = params.set('Address', request.address.toString());
    
    return this.http.get<IInfosReportResponse>(this.baseUrl, {params})
  }
}
