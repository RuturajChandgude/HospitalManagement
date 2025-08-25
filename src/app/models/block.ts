export interface getBlock{
    blockId:number,
    blockFloor:number,
    blockCode:number,
    createdOn:Date | string
}

export interface postBlock{
    blockFloor:number,
    blockCode:number,
}

export interface updateBlock{
    blockId:number,
     blockFloor:number,
    blockCode:number,
}

