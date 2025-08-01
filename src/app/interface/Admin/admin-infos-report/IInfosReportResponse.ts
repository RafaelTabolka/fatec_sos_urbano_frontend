export interface IInfosReportResponse {
    qtyUsers: number,
    qtyIncidents: number,
    qtyIncidentsResolved: number,
    avgResolutionTimeInDays: number | null,
    adminIncidentsByRegionsDto: IAdminIncidentByRegion[],
    adminIncidentsByStatusesDto: IAdminIncidentByStatus[] 
}

export interface IAdminIncidentByRegion {
    address: string,
    qtyIncidents: number
}

export interface IAdminIncidentByStatus {
    status: string,
    qtyIncidents: number
}