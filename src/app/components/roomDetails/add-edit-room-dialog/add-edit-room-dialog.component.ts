import { Component,Inject,OnInit} from '@angular/core';
import {MatRadioModule} from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { RoomService } from '../../../core/services/room/room.service';
import { GetRoom } from '../../../core/models/room/get-room';
  import { ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-edit-room',
  imports: [ReactiveFormsModule,MatRadioModule,MatFormFieldModule,MatInputModule,MatButtonModule],
  templateUrl: './add-edit-room-dialog.component.html',
  styleUrl: './add-edit-room-dialog.component.css'
})
export class EditRoomComponent implements OnInit {
public roomForm!:FormGroup
public isEditMode=false

constructor(private fb:FormBuilder,private dialogRef:MatDialogRef<EditRoomComponent>,@Inject(MAT_DIALOG_DATA) public data:GetRoom){}

ngOnInit() {
 if(this.data){
  this.isEditMode=true
 }
 this.roomForm=this.fb.group({
  roomNumber:[this.data?this.data.roomNumber:'',Validators.required],
  blockId:[this.data?this.data.block.blockId:'',Validators.required],
  roomType:[this.data?this.data.roomType:'',Validators.required],
  availability:[this.data?this.data.availability:'',Validators.required]
 })
}

public onSubmit(){
if(this.roomForm.valid){
  if(this.isEditMode){
    this.dialogRef.close({
      roomId:this.data.roomId,
      ...this.roomForm.value
    })
  }
  else{
    this.dialogRef.close(this.roomForm.value)
  }
}
}
}
