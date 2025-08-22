import { Component,OnInit  } from '@angular/core'; 
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { PhysicianService } from '../services/physician.service';

import { getPhysician, updatePhysician } from '../models/physician';
import {MatTableModule} from '@angular/material/table';
 import { MatTableDataSource } from '@angular/material/table';
import { MatDialog,MatDialogModule } from '@angular/material/dialog';
 import { EditPhysicianComponent } from '../edit-physician/edit-physician.component';
 import { postPhysician } from '../models/physician';
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
displayedColumns: string[] = ['physicianId','name','position','edit'];
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


// editPhysician(id?:number){
//   console.log('edited')
// }
openEditDialog(name:string,position:string){
 
  const match=this.data.find(d=>d.name===name && d.position===position)
  
  const dialogRef=this.dialog.open(EditPhysicianComponent,{
    height: '400px',
    width: '400px',
    data:{name:match?.name,position:match?.position}
  })


  dialogRef.afterClosed().subscribe(updatedData=>{
    if(updatedData){
      this.PhysicianService.getPhysican().subscribe(alldata=>{
        const match=this.table_Data.find(d=>d.name===name && d.position===position)

        if(match){
          const new_updated_data:updatePhysician={
           
            //id:match.physicianId , 
            name:updatedData.name,
            position:updatedData.position
          }
           
           this.PhysicianService.updatePhysician(new_updated_data).subscribe((updated)=>{
              const index=this.data.findIndex(q=>q.physicianId===match.physicianId)
              if(index!==-1){
                this.data_update[index]=updated
              }
           })

        }
      })
    }
  })


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
