import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IIncidentStatusesGetAllResponse } from '../../../interface/Incident/IIncidentStatusesGetAllResponse';

@Injectable({
  providedIn: 'root'
})
export class StatusIncidentServiceService {
  private baseUrl: string = 'https://localhost:7258/IncidentStatus'; 

  constructor(private http: HttpClient) { }

  getAllIncidentStatuses(): Observable<IIncidentStatusesGetAllResponse> {
    return this.http.get<IIncidentStatusesGetAllResponse>(`${this.baseUrl}/getAll`);
  }
}
