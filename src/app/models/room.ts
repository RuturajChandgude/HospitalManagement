export interface getRoom{
    roomId:number,
    roomNumber:number,
    roomType:string,
    availability:boolean,
    createdOn:Date | string,
    block:[
        {
            blockId:number,
            blockFloor:number,
            blockCode:number,
            createdOn:Date | string
        }
    ]
}

export interface postRoom{
   
    roomNumber:number,
    blockId:number,
    roomType:string,
    availability:boolean,
    
}

export interface updateRoom{
    roomId:number,
    roomNumber:number,
    blockId:number,
    roomType:string,
    availability:boolean,
}

export interface deleteRoom{
    roomId:number,
    roomNumber:number,
    blockId:number,
    roomType:string,
    availability:boolean,
    
}