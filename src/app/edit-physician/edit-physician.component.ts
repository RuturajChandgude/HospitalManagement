import { Component, Inject, inject } from '@angular/core';
import { PhysicianService } from '../services/physician.service';
import { MatDialog, MatDialogRef,MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';


import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { updatePhysician } from '../models/physician';
@Component({
  selector: 'app-edit-physician',
  imports: [MatFormFieldModule,MatDialogModule,FormsModule,MatButtonModule,MatInputModule],
  templateUrl: './edit-physician.component.html',
  styleUrl: './edit-physician.component.css'
})
export class EditPhysicianComponent {
id?:number
name:string=''
position:string=''

constructor(private PhysicianService:PhysicianService,private dialogRef:MatDialogRef<EditPhysicianComponent>,@Inject(MAT_DIALOG_DATA) public data:updatePhysician){

if(data){
  //this.id=data.physicianId
  this.name=data.name
  this.position=data.position

}}

edit(){
  if(this.name && this.position){
    this.dialogRef.close({name:this.name,position:this.position})
  }
}
}
