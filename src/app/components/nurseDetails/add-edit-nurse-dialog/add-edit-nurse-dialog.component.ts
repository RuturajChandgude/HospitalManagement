import { Component,Inject} from '@angular/core';
import { MatDialog, MatDialogRef,MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { postNurse } from '../../../core/models/nurse';
import { NurseService } from '../../../core/services/nurse/nurse.service';
import { UpdateNurse } from '../../../core/models/nurse/update-nurse';

@Component({
  selector: 'app-edit-nurse',
  imports: [MatDialogModule,FormsModule,MatRadioModule,MatButtonModule,MatFormFieldModule,MatInputModule],
  templateUrl: './edit-nurse.component.html',
  styleUrl: './edit-nurse.component.css'
})
export class EditNurseComponent {
nurseId?:number
name:string=''
position:string=''
registered:boolean=false


constructor(private nurseService:NurseService,private dialogRef:MatDialogRef<EditNurseComponent>,@Inject(MAT_DIALOG_DATA) public data:UpdateNurse){
  if(data){
  this.nurseId=data.nurseId,
  this.name=data.name,
  this.position=data.position,
  this.registered=data.registered
}
}


edit(){
  if(this.name && this.position){
    this.dialogRef.close({nurseId:this.nurseId,name:this.name,position:this.position,registered:this.registered})
  }
}

cancel(){
  this.dialogRef.close()
}

}
