export interface getOnCall{
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

export interface postOnCall{
   
    nurseId:number,
    blockId:number,
    onCallStart:Date | string,
    onCallEnd:Date | string
}

export interface updateOnCall{
    onCallId:number,
    nurseId:number,
    blockId:number,
    onCallStart:Date | string,
    onCallEnd:Date | string
}

export interface deleteOnCall{
    onCallId:number,
    nurseId:number,
    blockId:number,
    onCallStart:Date | string,
    onCallEnd:Date | string
}