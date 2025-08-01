export interface IIncidentGetAllResponse {
    incidents: IIncidentResponse[]
}

export interface IIncidentResponse {
    id: string,
    description: string,
    latLocalization: number,
    longLocalization: number,
    address: string,
    incidentStatus: {
        id: string,
        name: string
    },
    incidentPhotos: IIncidentPhotoResponse[],
    userId: string,
    institutionId: string
}

interface IIncidentPhotoResponse {
    id: string,
    savedPath: string
}