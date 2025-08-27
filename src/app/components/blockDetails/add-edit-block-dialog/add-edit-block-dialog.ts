import { Component,Inject,OnInit} from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { GetBlock } from '../../../core/models/block/get-block';
import { ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-block',
  imports: [ReactiveFormsModule,MatButtonModule,MatFormFieldModule,MatInputModule],
  templateUrl: './add-edit-block-dialog.component.html',
  styleUrl: './add-edit-block-dialog.component.css'
})
export class EditBlockComponent implements OnInit {
public blockForm! : FormGroup;
public blockId?:number
public blockCode?:number
public blockFloor?:number
public isEditMode=false


constructor(private fb:FormBuilder,private dialogRef:MatDialogRef<EditBlockComponent>,@Inject(MAT_DIALOG_DATA) public data:GetBlock){}

ngOnInit() {
   if(this.data){
  this.isEditMode=true
 }
  this.blockForm = this.fb.group({
    blockCode: [this.blockCode, Validators.required],
    blockFloor: [this.blockFloor, Validators.required]
  });
}

public onSubmit(){
if(this.blockForm.valid){
  if(this.isEditMode){
    this.dialogRef.close({
      blockId:this.data.blockId,
      ...this.blockForm.value
    })
  }
  else{
    this.dialogRef.close(this.blockForm.value)
  }
}
}

public cancel(){
  this.dialogRef.close()
}
}





