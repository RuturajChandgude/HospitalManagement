export interface GetOnCall {
    onCallId:number,
    nurse:{
        nurseId:number,
        name:string,
        position:string,
        registered:boolean,
        createdOn:Date | string
    },
    block:{
        blockId:number,
        blockFloor:number,
        blockCode:number,
        createdOn:Date | string
    },
    onCallStart:Date | string,
    onCallEnd:Date | string
}
