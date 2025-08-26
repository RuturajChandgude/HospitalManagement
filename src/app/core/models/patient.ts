export interface getPatient{
    patientId:number,
    name:string,
    address:string,
    phone:string,
    createdOn:Date | string
}

export interface postPatient{
    name:string,
    address:string,
    phone:string
}

export interface updatePatient{
    patientId:number,
    name:string,
    address:string,
    phone:string
}

export interface deletePatient{
    patientId:number
    name:string,
    address:string,
    phone:string
}