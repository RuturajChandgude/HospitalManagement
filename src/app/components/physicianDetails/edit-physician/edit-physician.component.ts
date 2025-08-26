import { Component, Inject } from '@angular/core';
import { PhysicianService } from '../core/services/physician.service';
import { MatDialog, MatDialogRef,MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';


import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { updatePhysician } from '../core/models/physician';
@Component({
  selector: 'app-edit-physician',
  imports: [MatFormFieldModule,MatDialogModule,FormsModule,MatButtonModule,MatInputModule],
  templateUrl: './edit-physician.component.html',
  styleUrl: './edit-physician.component.css'
})
export class EditPhysicianComponent {
physicianId?:number
name:string=''
position:string=''

constructor(private PhysicianService:PhysicianService,private dialogRef:MatDialogRef<EditPhysicianComponent>,@Inject(MAT_DIALOG_DATA) public data:updatePhysician){

if(data){
  this.physicianId=data.physicianId
  this.name=data.name
  this.position=data.position

}}

edit(){
  if(this.name && this.position){
    this.dialogRef.close({physicianId:this.physicianId,name:this.name,position:this.position})
  }
}


cancel(){
  this.dialogRef.close();
}
}
