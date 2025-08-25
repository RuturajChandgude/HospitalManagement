import { Component,OnInit,Inject } from '@angular/core';
import { MatDialog, MatDialogRef,MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BlockService } from '../../services/block.service';
import { updateBlock } from '../../models/block';
@Component({
  selector: 'app-edit-block',
  imports: [MatDialogModule,FormsModule,MatButtonModule,MatFormFieldModule,MatInputModule],
  templateUrl: './edit-block.component.html',
  styleUrl: './edit-block.component.css'
})
export class EditBlockComponent {
blockId?:number
blockCode?:number
blockFloor?:number

constructor(private blockService:BlockService,private dialogRef:MatDialogRef<EditBlockComponent>,@Inject(MAT_DIALOG_DATA) public data:updateBlock){
if(data){
  this.blockId=data.blockId,
  this.blockCode=data.blockCode,
  this.blockFloor=data.blockFloor
}
}


edit(){
  if(this.blockCode && this.blockFloor){
    this.dialogRef.close({blockId:this.blockId,blockFloor:this.blockFloor,blockCode:this.blockCode})
  }
}

cancel(){
  this.dialogRef.close()
}

}
