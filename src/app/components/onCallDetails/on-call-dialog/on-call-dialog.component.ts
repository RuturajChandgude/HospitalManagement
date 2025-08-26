import { Component,OnInit,Inject } from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import {provideNativeDateAdapter} from '@angular/material/core'
import { ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { GetOnCall } from '../../../core/models/onCall/get-on-call';
@Component({
  selector: 'app-on-call-dialog',
  imports: [MatDatepickerModule,MatFormFieldModule,ReactiveFormsModule,MatInputModule,MatButtonModule],
   providers: [provideNativeDateAdapter()],
  templateUrl: './on-call-dialog.component.html',
  styleUrl: './on-call-dialog.component.css'
})
export class OnCallDialogComponent implements OnInit {

public onCallForm!:FormGroup
public isEditMode=false
constructor(private fb:FormBuilder,private dialogRef:MatDialogRef<OnCallDialogComponent>,@Inject(MAT_DIALOG_DATA) public data:GetOnCall){}

ngOnInit() {
  if(this.data){
    this.isEditMode=true
  }

  this.onCallForm=this.fb.group({
    nurseId:[this.data?this.data.nurse.nurseId:'',Validators.required],
    blockId:[this.data?this.data.block.blockId:'',Validators.required],
    onCallStart:[this.data?this.data.onCallStart:'',Validators.required],
    onCallEnd:[this.data?this.data.onCallEnd:'',Validators.required]
  })


}

public onSubmit(){

if(this.onCallForm.valid){
  if(this.isEditMode){
    this.dialogRef.close({
      onCallId:this.data.onCallId,
      ...this.onCallForm.value
    })
  }
  else{
    this.dialogRef.close(this.onCallForm.value)
  }
}
}

}
