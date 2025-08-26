export interface GetPhysician {
    physicianId?: number,
    name: string,
    position: string,
    createdOn: Date | string
    appointments: [
        {
            appointmentId: number,
            starDateTime: Date | string,
            endDateTime: Date | string,
            patient: {
                patientId: number,
                name: string,
                address: string,
                phone: string,
                createdOn: Date | string
            }
        }
    ],
    trainedIn: [
        {
            trainedInId: number,
            physicianId: number,
            physcianName: string,
            certificationDate: Date | string,
            certificationExpires: Date | string,
            createdOn: Date | string,
            treatment: {
                procedureId: number,
                name: string,
                cost: number,
                createdOn: Date | string
            }
        }
    ]
}
