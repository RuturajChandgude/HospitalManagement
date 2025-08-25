import { Component ,OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RoomService } from '../../services/room.service';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { MatDialog,MatDialogModule } from '@angular/material/dialog';
 import { MatTableDataSource } from '@angular/material/table';
import { deleteRoom, getRoom } from '../../models/room';
import { updateBlock } from '../../models/block';
import { EditRoomComponent } from '../edit-room/edit-room.component';
@Component({
  selector: 'app-room',
  imports: [MatTableModule,MatButtonModule,MatDialogModule],
  templateUrl: './room.component.html',
  styleUrl: './room.component.css'
})
export class RoomComponent implements OnInit{

displayedColumns: string[] = ['roomId','roomNumber','blockId','blockFloor','roomType','createdOn','edit','delete'];
  dataSource= new MatTableDataSource<getRoom>();
  isEditing:boolean=false
constructor(private fb:FormBuilder,private roomService:RoomService,private dialog:MatDialog){}

ngOnInit() {
this.load_data()

}

load_data(){
this.roomService.getRoom().subscribe((data)=>{
  this.dataSource.data=data
})
}

openEditDialog(roomUpdate?:updateBlock){
if(roomUpdate){
  const dialogRef=this.dialog.open(EditRoomComponent,{
    width:'300px',
    height:'300px',
   
    data:roomUpdate

  })
}else{
  const dialogRef=this.dialog.open(EditRoomComponent)
}
}

deleteRoom(roomDelete:deleteRoom){

}
}
