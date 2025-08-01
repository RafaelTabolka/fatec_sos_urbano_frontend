import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IIncidentGetAllResponse } from '../../../interface/Incident/IIncidentGetAllResponse';

@Injectable({
  providedIn: 'root'
})
export class IncidentServiceService {
  private baseUrl: string = 'https://localhost:7258/Incident';

  constructor(private http: HttpClient) { }

  getAllIncidents(): Observable<IIncidentGetAllResponse> {
    return this.http.get<IIncidentGetAllResponse>(`${this.baseUrl}/getAll`)
  }
}
