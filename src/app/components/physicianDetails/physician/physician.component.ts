import { Component,OnInit  } from '@angular/core'; 
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { PhysicianService } from '../core/services/physician.service';

import { getPhysician, updatePhysician } from '../core/models/physician';
import {MatTableModule} from '@angular/material/table';
 import { MatTableDataSource } from '@angular/material/table';
import { MatDialog,MatDialogModule } from '@angular/material/dialog';
 import { EditPhysicianComponent } from '../edit-physician/edit-physician.component';
 import { postPhysician } from '../core/models/physician';
@Component({
  selector: 'app-physician',
  imports: [ReactiveFormsModule,MatDialogModule,MatTableModule,MatButtonModule,MatFormFieldModule,MatInputModule],
  templateUrl: './physician.component.html',
  styleUrl: './physician.component.css'
})
export class PhysicianComponent implements OnInit {
myform!:FormGroup

data_update:updatePhysician[]=[]

data:getPhysician[]=[]

table_Data:getPhysician[]=[]
displayedColumns: string[] = ['physicianId','name','position','edit','delete'];
dataSource= new MatTableDataSource<getPhysician>();

constructor(private fb:FormBuilder,private PhysicianService:PhysicianService,private dialog:MatDialog){}

ngOnInit(){
this.myform=this.fb.group({
  name:['',Validators.required],
  position:['',Validators.required]
})

this.PhysicianService.getPhysican().subscribe((response)=>{
  this.data=response
  console.log(this.data)
})

this.load_table_data()
 

}


load_table_data(){
 this.PhysicianService.getPhysican().subscribe((data)=>{
  this.dataSource.data=data
 })
}



openEditDialog(physician:getPhysician){
  const dialogRef=this.dialog.open(EditPhysicianComponent,{
    height: '300px',
    width: '270px',
    data:{
      physicianId:physician.physicianId,
      name:physician.name,
      position:physician.position
    }
  })

  dialogRef.afterClosed().subscribe(updatedData=>{
    if(updatedData){
      const new_updated_data:updatePhysician={
        physicianId:updatedData.physicianId,
        name:updatedData.name,
        position:updatedData.position
      }

      this.PhysicianService.updatePhysician(new_updated_data).subscribe(()=>{
        this.load_table_data()
      })
    }
  })
}


deletePhysician(physician:updatePhysician){
const confirmdelete=confirm('Are you sure you want to delete?')
if(confirmdelete){
  const body={
    physicianId:physician.physicianId,
    name:physician.name,
    position:physician.position
  }
  this.PhysicianService.deletePhysician(body).subscribe(()=>{
  console.log('Deleted succesfuly')
  this.load_table_data();
})
}


}


onSubmit(){
  if(this.myform.valid){
    console.log('Form submitted',this.myform.value)

    this.PhysicianService.postPhysician(this.myform.value).subscribe((data)=>{
      console.log('Form submitted succesfully',data)
    })
  }
  else{
    console.log('Error submitting form')
  }  
  
}
}
