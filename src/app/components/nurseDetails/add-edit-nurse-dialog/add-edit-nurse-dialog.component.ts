import { Component,OnInit,Inject} from '@angular/core';
import { MatDialog, MatDialogRef,MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { FormBuilder,FormGroup, FormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { NurseService } from '../../../core/services/nurse/nurse.service';
import { UpdateNurse } from '../../../core/models/nurse/update-nurse';

@Component({
  selector: 'app-edit-nurse',
  imports: [ReactiveFormsModule,MatDialogModule,FormsModule,MatRadioModule,MatButtonModule,MatFormFieldModule,MatInputModule],
  templateUrl: './add-edit-nurse-dialog.component.html',
  styleUrl: './add-edit-nurse-dialog.component.css'
})
export class EditNurseComponent implements OnInit {
public nurseForm!:FormGroup
public isEditMode=false
public nurseId?:number
public name:string=''
public position:string=''
public registered:boolean=false


constructor(private fb:FormBuilder,private nurseService:NurseService,private dialogRef:MatDialogRef<EditNurseComponent>,@Inject(MAT_DIALOG_DATA) public data:UpdateNurse){}

ngOnInit() {
  if(this.data){
  this.isEditMode=true
  } 
  this.nurseForm=this.fb.group({
    nurseId:[this.data?this.data.nurseId:'',Validators.required],
    name:[this.data?this.data.name:'',Validators.required],
    position:[this.data?this.data.position:'',Validators.required],
    registered:[this.data?this.data.registered:'',Validators.required]
  })
}

public onSubmit(){
if(this.nurseForm.valid){
  if(this.isEditMode){
    this.dialogRef.close({
      nurseId:this.data.nurseId,
      ...this.nurseForm.value
    })
  }
  else{
    this.dialogRef.close(this.nurseForm.value)
  }
}
}

public cancel(){
  this.dialogRef.close()
}

}
