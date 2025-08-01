export interface IIncidentStatusesGetAllResponse {
    incidentStatuses: IIncidentStatusResponse[]
}

export interface IIncidentStatusResponse {
    id: string,
    name: string
    createdAt?: Date | null,
    updatedAt?: Date | null
}
