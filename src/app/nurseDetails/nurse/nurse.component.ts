import { Component,OnInit  } from '@angular/core'; 
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import { NurseService } from '../../services/nurse.service';
import { getNurse } from '../../models/nurse';
import {MatTableModule} from '@angular/material/table';
 import { MatTableDataSource } from '@angular/material/table';
import { MatDialog,MatDialogModule } from '@angular/material/dialog';
import { postNurse } from '../../models/nurse';
import { updateNurse } from '../../models/nurse';
import { EditNurseComponent } from '../edit-nurse/edit-nurse.component';

@Component({
  selector: 'app-nurse',
  imports: [ReactiveFormsModule,MatTableModule,MatButtonModule,MatDialogModule,MatFormFieldModule,MatInputModule,MatRadioModule],
  templateUrl: './nurse.component.html',
  styleUrl: './nurse.component.css'
})
export class NurseComponent implements OnInit {
myform!:FormGroup
displayedColumns: string[] = ['nurseId','name','position','registered','createdOn','edit','delete'];
dataSource= new MatTableDataSource<getNurse>();
//nurse:getNurse | null=null
constructor(private fb:FormBuilder,private nurseService:NurseService,private dialog:MatDialog){}

ngOnInit(){
this.myform=this.fb.group({
  name:['',Validators.required],
  position:['',Validators.required],
  registered:['',Validators.required]
})
this.load_nurse()
}


load_nurse(){
this.nurseService.getNurse().subscribe((data)=>{
this.dataSource.data=data
})
}


openEditDialog(nurse:getNurse){
 const dialogRef=this.dialog.open(EditNurseComponent,{
  height: '340px',
    width: '340px',
    data:{
      nurseId:nurse.nurseId,
      name:nurse.name,
      position:nurse.position,
      registered:nurse.registered
    }
 })

 dialogRef.afterClosed().subscribe(updatedData=>{
  if(updatedData){
    const new_updated_data:updateNurse={
      nurseId:updatedData.nurseId,
      name:updatedData.name,
      position:updatedData.position,
      registered:updatedData.registered

    }

    this.nurseService.updateNurse(new_updated_data).subscribe(()=>{
      this.load_nurse()
    })
  }
 })
}


deleteNurse(nurse:getNurse){
const confirmdata=confirm('Are you sure you want to delete?')
if(confirmdata){
 const body={
  nurseId:nurse.nurseId,
  name:nurse.name,
  position:nurse.position,
  registered:nurse.registered
 }

 this.nurseService.deleteNurse(body).subscribe(()=>{
  console.log('Deleted succesfully')
  this.load_nurse()
 })
}
}

onSubmit(){
  if(this.myform.valid){
    //console.log(this.myform.value)
    console.log('nurse submited')

    this.nurseService.postNurse(this.myform.value).subscribe((data)=>{
      console.log('Nurse data submitted succesfully',data)
      this.load_nurse()
    })
  }
}
}
