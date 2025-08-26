export interface getNurse{
    nurseId:number,
    name:string,
    position:string,
    registered:boolean,
    createdOn:Date | string
}

export interface postNurse{
    name:string,
    position:string,
    registered:boolean
}

export interface updateNurse{
    nurseId:number,
    name:string,
    position:string,
    registered:boolean,
    
}