export interface GetRoom {
    roomId:number,
    roomNumber:number,
    roomType:string,
    availability:boolean,
    createdOn:Date | string,
    block:
        {
            blockId:number,
            blockFloor:number,
            blockCode:number,
            createdOn:Date | string
        }
}
